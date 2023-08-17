let common = {
  init: () => {
    console.log("init on every page");
  },
  finalize: () => {
    console.log("finalize on every page");
  }
};
let index = {
  init: () => {
    console.log('Init Page');
  },
  events: () => {},
  hello: () => {
    console.log("HELLO");
  },
  goodbye: () => {
    console.log("GOODBYE");
  }
};
const connectButton = document.querySelector('.connect');
const port = ':3000';
let socketOpen = false;
let socket = null;

// Connect to CloudPlantIO
var connectPlantIO = function () {
  connectButton.innerHTML = "&hellip;connecting&hellip;";
  connectButton.classList.add("connection-animation");
  document.querySelector('.lds-ripple').classList.add('show');
  return new Promise(function (resolve, reject) {
    console.log('connecting to CloudPlantIO...');
    document.getElementById('shield').classList.toggle('hidden');
    document.querySelector('.content-footer').classList.toggle('active');

    // Get internal ip automatically:
    // https://stackoverflow.com/questions/32837471/how-to-get-local-internal-ip-with-javascript
    // UPDATE 2023
    // Broken by mDNS:
    // https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript/32841164#32841164

    // window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for firefox and chrome
    // var pc = new RTCPeerConnection({
    //     iceServers: []
    //   }),
    //   noop = function() {};
    // pc.createDataChannel(""); //create a bogus data channel
    // pc.createOffer(pc.setLocalDescription.bind(pc), noop); // create offer and set local description
    // pc.onicecandidate = function(ice) { //listen for candidate events

    //   if (!ice || !ice.candidate || !ice.candidate.candidate) return;
    //   var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
    //   console.log('my IP: ', myIP);
    //   pc.onicecandidate = noop;

    //   let ip = myIP + port;
    //   socket = io(ip);
    //   socketOpen = true;

    //   setTimeout(
    //     function tick() {
    //       connectButton.classList.remove("connection-animation")
    //       console.log('Connected!');
    //     }, 2000);

    //   resolve({
    //     connection: 'active'
    //   });
    // };

    // Get local IP from mDNS

    getIPs().then(data => {
      console.log('my IP: ', data.join('\n'));
      let ip = data + port;
      socket = io(ip);
      socketOpen = true;
      setTimeout(function tick() {
        connectButton.classList.remove("connection-animation");
        console.log('Connected!');
      }, 2000);
      resolve({
        connection: 'active'
      });
    });

    /*
    *   This file is the entire script combined in working order.
    *   Copyright 2021 © Joey Malvinni
    *   License: MIT
    */

    // [---------------------------------------------------------------------------]
    // File: ip_validator.js
    // URL: https://cdn.jsdelivr.net/gh/joeymalvinni/webrtc-ip/dist/bundle.dev.js

    /*
    *   This module validates the two types of IP addresses.
    *   Copyright 2021 © Joey Malvinni
    *   License: MIT
    */

    // The function that checks if the given IPv4 address is valid.
    function is_ipv4(ip) {
      return regex_v4.test(ip);
    }
    ;

    // Checks if the IPv6 address is valid.
    function is_ipv6(ip) {
      return regex_v6.test(ip);
    }
    ;

    // Simple IP regex that works on both IPv6 and IPv4
    var simpleIPRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

    // IPv4 regex used to determine whether an IP is IPv4 or not.
    let regex_v4 = /((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/;

    // The IPv6 regex used when determining an IPv6 address.
    let regex_v6 = /((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/;

    // Exporting the two regexes in an array to be used in the main detector.
    let ip_regex_array = [regex_v6, regex_v4];

    // [---------------------------------------------------------------------------]
    // File: peer_conn.js

    /*
    *   This module provides the main WebRTC functions that return IP addresses from the STUN request.
    *   Copyright 2021 © Joey Malvinni
    *   License: MIT
    */

    function peer(callback) {
      // Creating the peer connection.
      var WebRTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
      // Initializing the connection.
      var createdConnection;

      // Main start function.
      function start() {
        // Creating the actual connection.
        createConnection();
        // Log the STUN request.
        createStunRequest();
      }
      ;

      // Stop function to reset the connection.
      function stop() {
        // Checking if the connection has been created or not.
        if (createdConnection) {
          // Attempt to close it, if RTCPeerConnection.close() is not supported, remove the event listeners.
          try {
            createdConnection.close();
          } finally {
            createdConnection.onicecandidate = () => {};
            createdConnection = null;
          }
          ;
        }
        ;
      }
      ;

      // Function that makes the connection request to Google's STUN server
      function createConnection() {
        let iceServers = [{
          urls: 'stun:stun.l.google.com:19302'
        }];
        // Creating the connection with the STUN server.
        createdConnection = new WebRTCPeerConnection({
          iceServers
        });
        // Handling the ICE candidate event.
        createdConnection.onicecandidate = data => handleCandidates(data);
        // Creation of the fake data channel.
        createdConnection.createDataChannel('fake_data_channel');
      }
      ;

      // Function that creates the STUN request offer needed to get the IPs.
      function createStunRequest() {
        // Create the offer that exposes the IP addresses.
        return createdConnection.createOffer().then(sdp => createdConnection.setLocalDescription(sdp));
      }
      ;

      // Handling the onIceCandidate event.
      function handleCandidates(ice) {
        // Checking if the ICE candidate lines given are valid.
        if (ice && ice.candidate && ice.candidate.candidate) {
          // Returning the IPs to the main function.
          callback(ice && ice.candidate && ice.candidate.candidate);
        }
        ;
      }
      ;

      // Returning the main functions needed.
      return {
        start,
        stop,
        createConnection,
        createStunRequest,
        handleCandidates
      };
    }
    ;

    // [---------------------------------------------------------------------------]
    // File: public_ip.js

    /*
    *   This module provides the worker functions that return the public IP addresses.
    *   Copyright 2021 © Joey Malvinni
    *   License: MIT
    */

    function publicIPs(timer) {
      // Timing validation.
      if (timer) if (timer < 100) throw new Error('Custom timeout cannot be under 100 milliseconds.');

      // IPs is the final array of all valid IPs found.
      var IPs = [];
      // Creating the peer connection request while handling the callback event.
      var peerConn = peer(handleIceCandidates);
      function getIps() {
        // Returning a promise.
        return new Promise(function (resolve, reject) {
          // Starting the peer connection.
          peerConn.start();
          // Setting the timer.
          setTimeout(() => {
            // Checking if the IP array exists.
            if (!IPs || IPs === []) {
              // Rejecting the error
              reject('No IP addresses were found.');
            } else {
              // Return the unique IP addresses in an array.
              resolve(unique(IPs.flat(Infinity)));
            }
            ;
            // reset the peer connection.
            reset();
            // Set the Timeout to the custom timer, default to 500 milliseconds.
          }, timer || 500);
        });
      }
      ;
      function handleIceCandidates(ip) {
        var array = [];
        // Looping over the two regexs for IPv6 and IPv4
        for (let regex of ip_regex_array) {
          let arr = [];
          // Lutting all of the strings that match either IP format in an array
          let possible_ips_array = regex.exec(ip);
          if (possible_ips_array) {
            // Looping over that array
            for (let i = 0; i < possible_ips_array.length; i++) {
              // Checking if the "IP" is valid
              if (is_ipv4(possible_ips_array[i]) || is_ipv6(possible_ips_array[i])) {
                arr.push(possible_ips_array[i]);
              }
              ;
            }
            ;
            array.push(arr);
          }
          ;
        }
        ;
        // Final function that does more checks to determine the array's validity,
        // Also flattens the array to remove extraneous sub-arrays.
        push(array.flat(Infinity));
      }
      ;
      function push(ip) {
        // Checks if the IP addresses givin are already in the array. 
        if (!IPs.includes(ip)) {
          IPs.push(unique(ip.flat(Infinity)));
        }
        ;
      }
      ;
      function reset() {
        // Stops the peer connection to the STUN server.
        peerConn.stop();
      }
      ;
      // Use this to only return unique IP addresses.
      function unique(a) {
        return Array.from(new Set(a));
      }
      ;
      return getIps();
    }
    ;

    // [---------------------------------------------------------------------------]
    // File: index.js

    /*
    *   This module combines all of the worker modules into the main functions that get exported.
    *   Copyright 2021 © Joey Malvinni
    *   License: MIT
    */

    // Categorizes the IPs by IP, type, and IPv4.
    function getIPTypes(timer) {
      // Returning the result as a promise.
      return new Promise(function (resolve, reject) {
        // Final array
        let finalIpArray = [];
        // Getting the raw IPs in an array.
        publicIPs(timer).then(ips => {
          // Looping over each IP.
          ips.forEach(ip => {
            if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/)) {
              // The IP is private.
              finalIpArray.push({
                ip: ip,
                type: 'private',
                IPv4: true
              });
            } else if (ip.match(/((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/)) {
              // The IP is an IPv6 address.
              finalIpArray.push({
                ip: ip,
                type: 'IPv6',
                IPv4: false
              });
            } else {
              // Assume the IP is public.
              finalIpArray.push({
                ip: ip,
                type: 'public',
                IPv4: true
              });
            }
          });
          // Resolving the promise.
          resolve(finalIpArray);
        }).catch(reject);
      });
    }

    // Filters out IPv4 addresses.
    function getIPv4(timer) {
      return getIPTypes(timer).then(ips => {
        // Filters the IP by IPv4.
        const ip = ips.filter(ip => ip.IPv4);
        // Loops over each object and extracts the IP.
        for (let i = 0; i < ip.length; i++) {
          ip[i] = ip[i].ip;
        }
        // Returns undefined if the array is empty.
        return ip ? ip : '';
      });
    }

    // Filters out IPv6 addresses.
    function getIPv6(timer) {
      // Getting the IPs by type.
      return getIPTypes(timer).then(ips => {
        // Filtering the IPs by IPv6.
        const ip = ips.filter(ip => ip.type === 'IPv6');
        // Extracting the IPs
        for (let i = 0; i < ip.length; i++) {
          // Removing all other data from the object.
          ip[i] = ip[i].ip;
        }
        // Returning the IP or undefined.
        return ip ? ip.ip : '';
      });
    }

    // Returns all of the functions in an object, default to getting all of the IPs without any filtering applied.
    function getIPs(timer) {
      return Object.assign(publicIPs(timer), {
        types: getIPTypes,
        public: publicIPs,
        IPv4: getIPv4,
        IPv6: getIPv6
      });
    }
    ;
  });
};
let recipes = {
  init: () => {
    console.log('recipes');
  },
  events: () => {},
  recipe1: () => {
    console.log('Addine recipe one by default');
  }
};
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
    console.log('hello plant');
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
      systemPlantio = document.querySelector('.system-plantio');
    if (recipeNav !== null) {
      recipeNav.addEventListener('click', function () {
        statusPanel.style.transform = 'scale(1)';
        systemPlantio.classList.remove('active');
        contentContainer.style.transform = 'translateX(0)';
        recipeNav.classList.add('active');
        gardenNav.classList.remove('active');
        infoNav.classList.remove('active');
        infoPanel.classList.remove('active');
      });
    }
    if (gardenNav !== null) {
      gardenNav.addEventListener('click', function () {
        statusPanel.style.transform = 'scale(1)';
        systemPlantio.classList.remove('active');
        contentContainer.style.transform = 'translateX(-100vw)';
        recipeNav.classList.remove('active');
        gardenNav.classList.add('active');
        infoNav.classList.remove('active');
        infoPanel.classList.remove('active');
      });
    }
    if (infoNav !== null) {
      infoNav.addEventListener('click', function () {
        statusPanel.style.transform = 'scale(0.5)';
        contentContainer.style.transform = 'translateX(-100vw)';
        systemPlantio.classList.add('active');
        recipeNav.classList.remove('active');
        gardenNav.classList.remove('active');
        infoNav.classList.add('active');
        infoPanel.classList.add('active');
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
      return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
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
      return new Promise(function (resolve, reject) {
        // human readable values
        let nameData = chosenRecipe.name;
        let durationData = chosenRecipe.duration;
        let lightData = chosenRecipe.light;
        let feedData = chosenRecipe.feed;
        let temperatureData = chosenRecipe.temperature;
        startTime = new Date().getTime();
        startDate = new Date(startTime);
        durationLength = daysToMilliseconds(durationData);
        durationSeconds = durationLength / 1000;
        finishTime = new Date(startTime + durationLength);
        let liveLightData = 0;
        let liveFeedData = 0;
        let liveDurationLength = durationLength;
        let totalLight = parseInt(durationLength / lightData / 2);
        let lumensDosage = totalLight / durationLength * lightData * 1000;
        let totalFeed = parseInt(durationLength / feedData / 2);
        let feedDosage = totalFeed / durationLength * feedData * 1000;

        //console.log('Starting: ' + nameData + ', ' + durationData + ', ' + lightData + ', ' + feedData + ', ' + temperatureData) console.log('Date started: ' + startDate) console.log('Duration: ' + durationData + ' days') console.log('Expected harvest: ' + finishTime) console.log('Harvest info: ' + durationLength)

        let lightMilliseconds = lightData * 1000;
        let feedMilliseconds = feedData * 1000;

        //progress
        let oneSecondGrowth = 100 / durationLength * 1000;
        let progressPercentage = 0;
        let displayProgress = 0;
        let progressBar = setTimeout(function tick() {
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
        let liveData = setTimeout(function tick() {
          if (progressPercentage < 100) {
            document.querySelector('.recipe-name').innerHTML = nameData;
            document.querySelector('.recipe-description span').innerHTML = parseFloat(liveDurationLength / 1000 / 60 / 60 / 24).toFixed(5);
            document.querySelector('.live-light').innerHTML = parseInt(liveLightData);
            document.querySelector('.live-feed').innerHTML = parseInt(liveFeedData);
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
              console.log('turning on thermostat');
              socket.emit('hardware', {
                type: 'thermostat-on',
                duration: 'UNKNOWN'
              });

              //update UI
              let mercury = document.querySelector('.mercury');
              let mercuryValue = document.querySelector('.mercury span');
              let targetValue = document.querySelector('.target');
              convertedTemp = ambient * 2 + 20; //consider negative values
              targetTop = 100 - (target * 2 + 20);
              topValue = 100 - convertedTemp;
              targetValue.style.top = targetTop + '%';
              mercury.style.height = convertedTemp + '%';
              mercuryValue.innerHTML = ambient + '&deg;';
              mercuryValue.style.top = topValue + '%';
              ambient++;
            } else {
              console.log('Ambient temperature: ' + ambient);
              console.log('Target temperature: ' + target);
              console.log('turning off thermostat');
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
      ms = 1000 * 60 * 60 * 24 * days;
      return ms;
    }

    // toggle light visuals
    function power_light() {
      document.getElementById('lightfade').classList.toggle('power');
      barlist = document.getElementsByClassName('bars');
      for (var i = 0; i < barlist.length; i++) {
        barlist[i].classList.toggle('hidden');
      }
    }

    // toggle feed visuals
    function power_feed() {
      document.getElementById('feed').classList.toggle('power');
    }

    // Generic controller
    function controller(element) {
      if (power === false) {
        console.log('turning on ' + element);
        socket.emit('hardware', {
          type: element + '-on',
          duration: 'UNKNOWN'
        });
        power = true;
        console.log(power);
      } else if (power === true) {
        console.log('turning off ' + element);
        socket.emit('hardware', {
          type: element + '-off',
          duration: 'UNKNOWN'
        });
        if (element == 'light') {
          power_light();
        } else if (element == 'feed') {
          power_feed();
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
      skipButton.addEventListener('click', function () {
        document.querySelector('.onboarding-wrapper').style.display = 'none';
        skipButton.style.display = "none";
      });
    }

    // Automatic menu
    if (menuBtn !== null) {
      menuBtn.addEventListener('click', function () {
        document.querySelector('.content-footer.auto').classList.toggle('menu-open');
        let menuBtnIcon = document.getElementById('menuIcon');
        if (document.querySelector('.content-footer.auto').classList.contains('menu-open')) {
          menuBtnIcon.innerHTML = '&times;';
        } else {
          menuBtnIcon.innerHTML = 'i';
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
      chosenSeed = this.id;
      console.log(chosenSeed);
      nextSlide();
    }
    if (selectSeedButton !== null) {
      selectSeedButton.addEventListener('click', selectSeed);
    }

    // 3: Choose recipe
    function selectRecipe(event) {
      if (this.id == 'timewarp') {
        chosenRecipe = JSON.parse(JSON.stringify(timewarp));
      }
      console.log(chosenRecipe);
      console.log(typeof chosenRecipe);
      nextSlide();
    }
    if (selectRecipeButton !== null) {
      selectRecipeButton.addEventListener('click', selectRecipe);
    }
    // 4: Connect to CloudPlantIO
    function connectProcess(event) {
      if (connectButton.classList.contains('continue')) {
        nextSlide(event);
      } else {
        connectPlantIO().then((results, anotherval) => {
          console.log("Chosen seed: " + chosenSeed + ",\n" + "Chosen recipe: " + chosenRecipe.name + ",\n" + "Recipe length: " + chosenRecipe.duration + ",\n" + "Recipe length in milliseconds: " + chosenRecipe.durationLength + ",\n" + "Recipe feed: " + chosenRecipe.feed + ",\n" + "Connection: " + socket + ",\n");
          setTimeout(function tick() {
            connectButton.innerHTML = "Continue";
            document.querySelector('.lds-ripple').classList.remove('show');
            connectButton.classList.add('continue');
          }, 2000);
        });
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
    };

    // Harvest complete
    function harvestTimer() {
      if (notificationPermission == true) {
        navigator.serviceWorker.ready.then(function (registration) {
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
      startGrowingButton.addEventListener('click', function () {
        Notification.requestPermission(function (result) {
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
          console.log("durationLength: " + durationLength);
          setTimeout(function () {
            harvestTimer();
          }, durationLength);
        });
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
      collectHarvestButton.addEventListener('click', collectHarvest);
    }

    //after onboarding
    function dismiss(event) {
      document.querySelector('.gamification-screen').style.display = 'none';
      console.log('dismissed');
    }
    if (dismissBtn !== null) {
      dismissBtn.addEventListener('click', dismiss);
    }
  },
  grow: () => {
    console.log('I am growing!');
  }
};
const PLANTIO = {
  common: common,
  index: index,
  recipes: recipes,
  plant: plant
};
function init() {
  UTIL = {
    fire: function (func, funcname, args) {
      // The object literal that contains all the page functions
      var namespace = PLANTIO;

      // check whether we are calling init of another function within this page
      funcname = funcname === undefined ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function') {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function () {
      // get the body id - used to reference the page in the object literal
      var bodyId = document.getElementsByTagName("body")[0].id;

      // hit up common first.
      UTIL.fire('common');

      // get a list of all the classes
      let classes = document.body.className.split(/\s+/);

      // fire the events listed in the classes
      for (var i = 0; i < classes.length; i++) {
        UTIL.fire(bodyId);
        UTIL.fire(bodyId, classes[i]);
      }
      UTIL.fire('common', 'finalize');
    }
  };
  UTIL.loadEvents();
}