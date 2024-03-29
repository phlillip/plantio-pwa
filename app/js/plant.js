let plant = {
  init: () => {
    /*if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }*/
    console.log('hello plant')
    navigator.serviceWorker.register('sw.js');

  },
  events: () => {

    /*
     * VARIABLES
     */



    //const connectButton = document.querySelector('.connect');
    const continueButton = document.querySelector('.continue'),
      selectSeedButton = document.querySelector('.take-seed'),
      selectRecipeButton = document.querySelector('.take-recipe'),
      skipButton = document.getElementById('skip'),
      startGrowingButton = document.querySelector('.finished-onboarding'),
      harvestModal = document.querySelector('.harvest-modal'),
      collectHarvestButton = document.querySelector('.collect-harvest'),
      menuBtn = document.getElementById('openMenu'),
      dismissBtn = document.getElementById('dismiss');



    const contentContainer = document.querySelector('.content'),
      recipeNav = document.getElementById('recipe-nav'),
      gardenNav = document.getElementById('garden-nav'),
      infoNav = document.getElementById('info-nav'),
      statusPanel = document.querySelector('.status-panel'),
      infoPanel = document.querySelector('.info-panel'),
      systemPlantio = document.querySelector('.system-plantio')

    if (recipeNav !== null) {
      recipeNav.addEventListener('click', function() {
        statusPanel.style.transform = 'scale(1)';
        systemPlantio.classList.remove('active');
        contentContainer.style.transform = 'translateX(0)';
        recipeNav.classList.add('active')
        gardenNav.classList.remove('active')
        infoNav.classList.remove('active')
        infoPanel.classList.remove('active')
      });
    }
    if (gardenNav !== null) {
      gardenNav.addEventListener('click', function() {
        statusPanel.style.transform = 'scale(1)';
        systemPlantio.classList.remove('active');
        contentContainer.style.transform = 'translateX(-100vw)';
        recipeNav.classList.remove('active')
        gardenNav.classList.add('active')
        infoNav.classList.remove('active')
        infoPanel.classList.remove('active')
      });
    }
    if (infoNav !== null) {
      infoNav.addEventListener('click', function() {
        statusPanel.style.transform = 'scale(0.5)';
        contentContainer.style.transform = 'translateX(-100vw)';
        systemPlantio.classList.add('active');
        recipeNav.classList.remove('active')
        gardenNav.classList.remove('active')
        infoNav.classList.add('active')
        infoPanel.classList.add('active')
      });
    }




    //Recipe constructor
    function Recipe(name, duration, light, feed, temperature) {
      this.name = name;
      this.duration = duration; // days
      this.light = light; //milliseconds [TODO: convert to seconds]
      this.feed = feed; // milliseconds [TODO: convert to seconds]
      this.temperature = temperature;
    }

    //Recipe objects
    const timewarp = new Recipe('timewarp', .00208, 3, 0.5, 30); // .00208
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
      swipeToSlide: false,
      touchMove: false,
      swipe: false,
      mobileFirst: true,
      infinite: false
    });

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
        durationSeconds = durationLength / 1000;
        finishTime = new Date(startTime + durationLength);

        let liveLightData = 0;
        let liveFeedData = 0;
        let liveDurationLength = durationLength;

        let totalLight = parseInt(durationLength / lightData / 2)
        let lumensDosage = totalLight / durationLength * lightData * 1000

        let totalFeed = parseInt(durationLength / feedData / 2)
        let feedDosage = totalFeed / durationLength * feedData * 1000

        //console.log('Starting: ' + nameData + ', ' + durationData + ', ' + lightData + ', ' + feedData + ', ' + temperatureData) console.log('Date started: ' + startDate) console.log('Duration: ' + durationData + ' days') console.log('Expected harvest: ' + finishTime) console.log('Harvest info: ' + durationLength)

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
              document.querySelector('.recipe-description span').innerHTML = parseFloat(liveDurationLength / 1000 / 60 / 60 / 24).toFixed(5)
              document.querySelector('.live-light').innerHTML = parseInt(liveLightData)
              document.querySelector('.live-feed').innerHTML = parseInt(liveFeedData)
              document.querySelector('.total-light').innerHTML = totalLight;
              document.querySelector('.total-feed').innerHTML = totalFeed;
              document.querySelector('.recipe-temperature-value span').innerHTML = temperatureData;
              liveData = setTimeout(tick, 1000);
            }
          }, 1000);

        //time
        let timeLoop = setTimeout(function tick() {
          if (progressPercentage < 100) {
            controller(durationLength);
            timeLoop = setTimeout(tick, 1000);
            liveDurationLength -= 1000;
          }
        }, 1000);

        //light
        let lightLoop = setTimeout(function tick() {
          if (progressPercentage < 100) {
            controller(Object.keys(chosenRecipe)[2]);
            lightLoop = setTimeout(tick, lightMilliseconds);
            liveLightData += lumensDosage;
          }
        }, lightMilliseconds);

        //feed
        let feedLoop = setTimeout(function tick() {
          if (progressPercentage < 100) {
            controller(Object.keys(chosenRecipe)[3]);
            feedLoop = setTimeout(tick, feedMilliseconds);
            liveFeedData += feedDosage;
          }
        }, feedMilliseconds);

        //temperature
        function thermostat() {
          target = temperatureData;

          if (progressPercentage < 100) {
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
        }

        let temperatureLoop = setInterval(thermostat, 1000);

        resolve({
          recipe: 'completed'
        });
      });
    } // end of startRecipe



    // Time functions
    function daysToMilliseconds(days) {
      ms = 1000 * 60 * 60 * 24 * days
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
        let menuBtnIcon = document.getElementById('menuIcon');
        if (document.querySelector('.content-footer.auto').classList.contains('menu-open')) {
          menuBtnIcon.innerHTML = '&times;'
        } else {
          menuBtnIcon.innerHTML = 'i'
        }
      });
    }



    // 1: Continue
    function nextSlide(event) {
      $slideshow.slick('slickNext');
    }

    if (continueButton !== null) {
      continueButton.addEventListener('click', nextSlide);
    }

    // 2: Choose seed
    function selectSeed(event) {
      chosenSeed = this.id
      console.log(chosenSeed)
      nextSlide()
    }
    if (selectSeedButton !== null) {
      selectSeedButton.addEventListener('click', selectSeed);
    }

    // 3: Choose recipe
    function selectRecipe(event) {
      if (this.id == 'timewarp') {
        chosenRecipe = JSON.parse(JSON.stringify(timewarp))
      }
      console.log(chosenRecipe)
      console.log(typeof chosenRecipe)
      nextSlide()
    }
    if (selectRecipeButton !== null) {
      selectRecipeButton.addEventListener('click', selectRecipe);
    }
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
              document.querySelector('.lds-ripple').classList.remove('show');
              connectButton.classList.add('continue')
            }, 2000);
        })
      }

    }
    if (connectButton !== null) {
      connectButton.addEventListener('click', connectProcess);
    }

    // notification
    let notificationPermission = false;
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
              action: 'explore',
              title: 'Explore this new world',
              icon: 'images/checkmark.png'
            }]*/
      // causes "TypeError: Failed to construct 'Notification':"
    }

    // Harvest complete
    function harvestTimer() {

      if (notificationPermission == true) {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Harvest complete!', options);

          /*let harvestCompleteNotification = new Notification("Harvest complete!", options);
          harvestCompleteNotification.onclick = function(event) {
            event.preventDefault();
            window.focus();
            this.close();
          };*/
        });
      }

      /*let harvestCompleteNotification = new Notification("Harvest complete!", options);
      harvestCompleteNotification.onclick = function(event) {
        event.preventDefault();
        window.focus();
        this.close();
      };*/

      document.querySelector('.onboarding-wrapper').style.display = 'block';
      document.querySelector('.tutorial').style.display = 'none';
    }

    // 5: Start recipe
    if (startGrowingButton !== null) {
      startGrowingButton.addEventListener('click', function() {


        Notification.requestPermission(function(result) {
          if (result === 'granted') {
            notificationPermission = true;
          }
        });

        // try to turn on notifications
        /*Notification.requestPermission().then(function(result) {
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
        });*/

        // hide onboarding
        document.querySelector('.onboarding-wrapper').style.display = 'none';
        if (skipButton !== null) {
          skipButton.style.display = "none";
        }

        //start plant animation
        document.querySelector('#plant-visual').classList.add('growing');

        //startRecipe(chosenRecipe)
        startRecipe(chosenRecipe).then((results, anotherval) => {
          console.log("durationLength: " + durationLength)
          setTimeout(function() {
            harvestTimer()
          }, durationLength)
        })
      });
    }

    // 6: Collect Harvest
    function collectHarvest(event) {
      document.querySelector('.onboarding-wrapper').style.display = 'none';
      if (skipButton !== null) {
        skipButton.style.display = "none";
      }
      document.querySelector('.gamification-screen').style.display = 'flex';
    }
    if (collectHarvestButton !== null) {
      collectHarvestButton.addEventListener('click', collectHarvest)
    }

    //after onboarding
    function dismiss(event) {
      document.querySelector('.gamification-screen').style.display = 'none';
      console.log('dismissed')
    }
    if (dismissBtn !== null) {
      dismissBtn.addEventListener('click', dismiss)
    }
  },
  grow: () => {
    console.log('I am growing!');
  }
}