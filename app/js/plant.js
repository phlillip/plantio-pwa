let plant = {
  init: () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
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
    const connectButton = document.querySelector('.connect');
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
    let chosenRecipe = {};
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
      connectButton.innerHTML = "&hellip;connecting&hellip;";
      connectButton.classList.add("connection-animation")

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

          setTimeout(
            function tick() {
              connectButton.classList.remove("connection-animation")
              console.log('Connected!');
            }, 3000);

          resolve({
            connection: 'active'
          });
        };

      });

    };

    //Start recipe
    function startRecipe(chosenRecipe) {

      return new Promise(function(resolve, reject) {
        // human readable values
        let nameData = chosenRecipe.name
        let durationData = chosenRecipe.duration
        let lightData = chosenRecipe.light
        let feedData = chosenRecipe.feed
        let temperatureData = chosenRecipe.temperature

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
            controller(Object.keys(chosenRecipe)[2]);
            lightLoop = setTimeout(tick, lightMilliseconds);
            liveLightData += lumensDosage;
          }
        }, lightMilliseconds);

        //feed
        let feedDosage = 5;
        let feedLoop = setTimeout(function tick() {
          if (progressPercentage < 100) {
            controller(Object.keys(chosenRecipe)[3]);
            feedLoop = setTimeout(tick, feedMilliseconds);
            liveFeedData += feedDosage;
          }
        }, feedMilliseconds);

        //temperature
        function thermostat() {
          target = Object.values(chosenRecipe)[4];

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
    function nextSlide(event) {
      $slideshow.slick('slickNext');
    }

    continueButton.addEventListener('click', nextSlide);

    // 2: Choose seed
    function selectSeed(event) {
      chosenSeed = this.id
      console.log(chosenSeed)
      nextSlide()
    }
    selectSeedButton.addEventListener('click', selectSeed);


    // 3: Choose recipe
    function selectRecipe(event) {
      if (this.id == 'timewarp') {
        chosenRecipe = JSON.parse(JSON.stringify(timewarp))
      }
      console.log(chosenRecipe)
      console.log(typeof chosenRecipe)
      nextSlide()
    }
    selectRecipeButton.addEventListener('click', selectRecipe);

    // 4: Connect to CloudPlantIO
    function connectProcess(event) {
      if (connectButton.classList.contains('continue')) {
        nextSlide(event)
      } else {
        connectPlantIO().then((results, anotherval) => {

          console.log(
            "Chosen seed: " + chosenSeed + ",\n" +
            "Chosen recipe: " + chosenRecipe.name + ",\n" +
            "Recipe length: " + chosenRecipe.duration + ",\n" +
            "Recipe length in milliseconds: " + chosenRecipe.durationLength + ",\n" +
            "Recipe feed: " + chosenRecipe.feed + ",\n" +
            "Connection: " + socket + ",\n"
          )

          setTimeout(
            function tick() {
              connectButton.innerHTML = "Continue";
              connectButton.classList.add('continue')
            }, 1000);
        })
      }

    }
    connectButton.addEventListener('click', connectProcess);

    // Harvest complete
    function harvestTimer() {

      let options = {
        body: 'Take a look at what you have grown!',
        icon: 'images/plantio_icon--192.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
        /*,
                actions: [{
                    action: 'click',
                    title: 'Explore this new world',
                    icon: 'images/checkmark.png'
                  },
                  {
                    action: 'close',
                    title: 'Close notification',
                    icon: 'images/xmark.png'
                  },
                ]*/
        // causes "TypeError: Failed to construct 'Notification':"
      }

      let harvestCompleteNotification = new Notification("Harvest complete!", options);


      document.querySelector('.onboarding-wrapper').style.display = 'block';
      document.querySelector('.tutorial').style.display = 'none';
    }

    // 5: Start recipe
    startGrowingButton.addEventListener('click', function() {

      // try to turn on notifications
      Notification.requestPermission().then(function(result) {
        if (result === 'granted') {
          console.log("Notifications granted.")
          return;
        } else if (result === 'denied') {
          console.log('Permission wasn\'t granted. Allow a retry.');
          return;
        } else if (result === 'default') {
          console.log('The permission request was dismissed.');
          return;
        }
        // Do something with the granted permission.
        console.log("working notifications")
      });

      // hide onboarding
      document.querySelector('.onboarding-wrapper').style.display = 'none';
      if (skipButton !== null) {
        skipButton.style.display = "none";
      }

      //startRecipe(chosenRecipe)
      startRecipe(chosenRecipe).then((results, anotherval) => {
        console.log("durationLength: " + durationLength)
        setTimeout(function() {
          harvestTimer()
        }, 3000)
      })
    });

    // 6: Collect Harvest
    function collectHarvest(event) {
      document.querySelector('.onboarding-wrapper').style.display = 'none';
      if (skipButton !== null) {
        skipButton.style.display = "none";
      }
      document.querySelector('.gamification-screen').style.display = 'flex';
    }
    collectHarvestButton.addEventListener('click', collectHarvest)

  },
  grow: () => {
    console.log('I am growing!');
  }
}