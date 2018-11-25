let plant = {
  init: () => {
    console.log('hello plant')
  },
  events: () => {

    /*
     * VARIABLES
     */

    const port = ':3000';
    let socketOpen = false;
    let socket = null;

    const continueButton = document.querySelector('.continue');
    const selectSeedButton = document.querySelector('.take-seed');
    const selectRecipeButton = document.querySelector('.take-recipe');
    const skipButton = document.getElementById('skip');
    const connectButton = document.getElementById('connect');
    const startGrowingButton = document.querySelector('.finished-onboarding');
    const harvestModal = document.querySelector('.harvest-modal');
    const collectHarvestButton = document.querySelector('.collect-harvest');

    const menuBtn = document.getElementById('openMenu');

    //Recipe constructor
    function Recipe(name, duration, light, feed, temperature) {
      this.name = name;
      this.duration = duration; // days
      this.light = light; //milliseconds [TODO: convert to seconds]
      this.feed = feed; // milliseconds [TODO: convert to seconds]
      this.temperature = temperature;
    }

    //Recipe objects
    const timewarp = new Recipe('timewarp', .00208, 3, 0.5, 30);
    const filsToms = new Recipe('filsToms', 30, 5, 10, 20);
    const disco = new Recipe('disco', 30, 0.5, 1, 30);
    const temp = new Recipe('temp', 30, 15, 15, 10);

    let chosenSeed;
    let chosenRecipe;
    let power = false;
    let ambient = 0;


    /*
     * FUNCTIONS
     */

    // delay function for use in promises
    function delay(t, v) {
      return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
      });
    }

    // Onboarding slideshow
    // TODO: replace with custom solution, no jQuery
    $slideshow = $('.onboarding').slick({
      dots: false,
      arrows: false,
      draggable: false,
      mobileFirst: true,
      infinite: false
    });

    // Connect to CloudPlantIO
    function connectPlantIO() {

      return new Promise(function(resolve, reject) {

        console.log('connecting to CloudPlantIO...')
        document.getElementById('shield').classList.toggle('hidden')
        document.querySelector('.content-footer').classList.toggle('active');

        //get internal ip automatically:
        //https://stackoverflow.com/questions/32837471/how-to-get-local-internal-ip-with-javascript

        window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for firefox and chrome
        var pc = new RTCPeerConnection({
            iceServers: []
          }),
          noop = function() {};
        pc.createDataChannel(""); //create a bogus data channel
        pc.createOffer(pc.setLocalDescription.bind(pc), noop); // create offer and set local description
        pc.onicecandidate = function(ice) { //listen for candidate events

          if (!ice || !ice.candidate || !ice.candidate.candidate) return;
          var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
          //console.log('my IP: ', myIP);
          pc.onicecandidate = noop;

          let ip = myIP + port;
          socket = io(ip);
          socketOpen = true;
          console.log('Connected!');
          resolve({
            connection: 'active'
          });
        };

      });

    };

    //Start recipe
    function startRecipe(chosen) {

      return new Promise(function(resolve, reject) {
        // human readable values
        let nameData = Object.values(chosen)[0];
        let durationData = Object.values(chosen)[1];
        let lightData = Object.values(chosen)[2];
        let feedData = Object.values(chosen)[3];
        let temperatureData = Object.values(chosen)[4];

        startTime = new Date().getTime();
        startDate = new Date(startTime);
        durationLength = daysToMilliseconds(durationData);
        finishTime = new Date(startTime + durationLength);

        let liveLightData = 0;
        let liveFeedData = 0;

        let totalLight = durationLength / lightData / 2;
        let totalFeed = durationLength / feedData / 2;

        console.log('Starting: ' + nameData + ', ' + durationData + ', ' + lightData + ', ' + feedData + ', ' + temperatureData)
        console.log('Date started: ' + startDate)
        console.log('Duration: ' + durationData + ' days')
        console.log('Expected harvest: ' + finishTime)
        console.log('Harvest info: ' + durationLength)

        let lightMilliseconds = (lightData * 1000);
        let feedMilliseconds = (feedData * 1000);

        //progress
        let oneSecondGrowth = 100 / durationLength * 1000;
        let progressPercentage = 0;
        let displayProgress = 0;
        let progressBar = setTimeout(
          function tick() {
            if (progressPercentage < 100) {
              progressPercentage += oneSecondGrowth;
              displayProgress = Math.ceil(progressPercentage);
              document.querySelector('.progress').style.width = progressPercentage + "%";
              document.querySelector('.progress-percentage span').innerHTML = displayProgress;
              console.log("Progress: " + progressPercentage);
              progressBar = setTimeout(tick, 1000);
            }
          }, 1000);


        //livedata
        let liveData = setTimeout(
          function tick() {
            if (progressPercentage < 100) {
              document.querySelector('.recipe-name').innerHTML = nameData;
              document.querySelector('.recipe-description span').innerHTML = "xxx"
              document.querySelector('.live-light').innerHTML = liveLightData;
              document.querySelector('.live-feed').innerHTML = liveFeedData;
              document.querySelector('.total-light').innerHTML = totalLight;
              document.querySelector('.total-feed').innerHTML = totalFeed;
              document.querySelector('.recipe-temperature-value span').innerHTML = temperatureData;
              liveData = setTimeout(tick, 1000);
            }
          }, 1000);

        //light
        let lumensDosage = 47;
        let lightLoop = setTimeout(function tick() {
          if (progressPercentage < 100) {
            controller(Object.keys(chosen)[2]);
            lightLoop = setTimeout(tick, lightMilliseconds);
            liveLightData += lumensDosage;
          }
        }, lightMilliseconds);

        //feed
        let feedDosage = 5;
        let feedLoop = setTimeout(function tick() {
          if (progressPercentage < 100) {
            controller(Object.keys(chosen)[3]);
            feedLoop = setTimeout(tick, feedMilliseconds);
            liveFeedData += feedDosage;
          }
        }, feedMilliseconds);

        //temperature
        function thermostat() {
          target = Object.values(chosen)[4];

          if (ambient <= target) {
            console.log('Ambient temperature: ' + ambient);
            console.log('Target temperature: ' + target);
            console.log('turning on thermostat')
            socket.emit('hardware', {
              type: 'thermostat-on',
              duration: 'UNKNOWN'
            });

            //update UI
            let mercury = document.querySelector('.mercury');
            let mercuryValue = document.querySelector('.mercury span');
            let targetValue = document.querySelector('.target');
            convertedTemp = (ambient * 2) + 20; //consider negative values
            targetTop = 100 - ((target * 2) + 20);
            topValue = 100 - convertedTemp;
            targetValue.style.top = targetTop + '%';
            mercury.style.height = convertedTemp + '%';
            mercuryValue.innerHTML = ambient + '&deg;';
            mercuryValue.style.top = topValue + '%';

            ambient++;
          } else {
            console.log('Ambient temperature: ' + ambient);
            console.log('Target temperature: ' + target);
            console.log('turning off thermostat')
            socket.emit('hardware', {
              type: 'thermostat-off',
              duration: 'UNKNOWN'
            });
            //update UI
            ambient--;
          }
        }

        let temperatureLoop = setInterval(thermostat, 1000);

        resolve({
          recipe: 'completed'
        });
      });
    } // end of startRecipe

    // Harvest complete
    function harvestTimer() {
      document.querySelector('.onboarding-wrapper').style.display = 'block';
      document.querySelector('.tutorial').style.display = 'none';
    }

    // Time functions
    function daysToMilliseconds(days) {
      ms = days * 24 * 60 * 60 * 1000
      return ms
    }


    // toggle light visuals
    function power_light() {
      document.getElementById('lightfade').classList.toggle('power');
      barlist = document.getElementsByClassName('bars');
      for (var i = 0; i < barlist.length; i++) {
        barlist[i].classList.toggle('hidden')
      }
    }

    // toggle feed visuals
    function power_feed() {
      document.getElementById('feed').classList.toggle('power');
    }


    // Generic controller
    function controller(element) {
      if (power === false) {
        console.log('turning on ' + element)
        socket.emit('hardware', {
          type: element + '-on',
          duration: 'UNKNOWN'
        });
        power = true;
        console.log(power);
      } else if (power === true) {
        console.log('turning off ' + element)
        socket.emit('hardware', {
          type: element + '-off',
          duration: 'UNKNOWN'
        });
        if (element == 'light') {
          power_light()
        } else if (element == 'feed') {
          power_feed()
        }
        power = false;
        console.log(power);
      }
    }

    /*
     * EVENTS
     */
    console.log('adding growing events');





    if (skipButton !== null) {
      skipButton.addEventListener('click', function() {
        document.querySelector('.onboarding-wrapper').style.display = 'none';
        skipButton.style.display = "none";
      });
    }

    // Automatic menu
    if (menuBtn !== null) {
      menuBtn.addEventListener('click', function() {
        document.querySelector('.content-footer.auto').classList.toggle('menu-open');

        if (document.querySelector('.content-footer.auto').classList.contains('menu-open')) {
          document.querySelector('#menuIcon').classList.replace('fa-info-circle', 'fa-times')
        } else {
          document.querySelector('#menuIcon').classList.replace('fa-times', 'fa-info-circle')
        }
      });
    }



    // 1: Continue
    continueButton.addEventListener('click', function() {
      $slideshow.slick('slickNext');
    });

    // 2: Choose seed
    selectSeedButton.addEventListener('click', function() {
      chosenSeed = this.id;
      console.log(chosenSeed);
      $slideshow.slick('slickNext');

    });


    // 3: Choose recipe
    selectRecipeButton.addEventListener('click', function() {
      /* from: jsben.ch/bWfk9
       * chosenRecipe = new Recipe(JSON.parse(JSON.stringify(this.id)))
       */
      chosenRecipe = this.id
      console.log(chosenRecipe);
      $slideshow.slick('slickNext');
    });

    // 4: Connect to CloudPlantIO
    connectButton.addEventListener('click', function() {
      connectPlantIO().then((results, anotherval) => {
        connectButton.innerHTML = "Connected to CloudPlantIO!";
        $slideshow.slick('slickNext');
        console.log(
          "Chosen seed: " + chosenSeed + ",\n" +
          "Chosen recipe: " + chosenRecipe.name + ",\n" +
          "Recipe length: " + chosenRecipe.duration + ",\n" +
          "Recipe feed: " + chosenRecipe.feed + ",\n" +
          "Connection: " + socket + ",\n"
        )
      })
    });

    // 5: Start growing
    startGrowingButton.addEventListener('click', function() {
      document.querySelector('.onboarding-wrapper').style.display = 'none';
      if (skipButton !== null) {
        skipButton.style.display = "none";
      }
      startRecipe(chosenRecipe).then((results, anotherval) => {
        return delay(3000).then(function() { //chosenRecipe.durationLength not defined
          harvestTimer()
        });
      })

    });

    // 6: Collect Harvest
    collectHarvestButton.addEventListener('click', function() {
      document.querySelector('.onboarding-wrapper').style.display = 'none';
      if (skipButton !== null) {
        skipButton.style.display = "none";
      }
      document.querySelector('.gamification-screen').style.display = 'flex';
    });

  },
  grow: () => {
    console.log('I am growing!');
  }
}