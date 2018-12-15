const connectButton = document.querySelector('.connect');

const port = ':3000';
let socketOpen = false;
let socket = null;

// Connect to CloudPlantIO
var connectPlantIO = function() {
  connectButton.innerHTML = "&hellip;connecting&hellip;";
  connectButton.classList.add("connection-animation")
  document.querySelector('.lds-ripple').classList.add('show');

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
        }, 2000);

      resolve({
        connection: 'active'
      });
    };

  });

};