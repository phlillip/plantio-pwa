/* TODO: Read up on: */
// http://markdalgleish.com/2011/03/self-executing-anonymous-functions/

(function(window, document, undefined){


let socketOpen = false;
let socket = null;
let port = ':3000';



function connectPlantIO() {


return new Promise(function(resolve, reject) {

   console.log('connecting to CloudPlantIO...')
   document.getElementById('shield').classList.toggle('hidden')
   document.querySelector('.content-footer').classList.toggle('active');

   //get internal ip automatically:
   //https://stackoverflow.com/questions/32837471/how-to-get-local-internal-ip-with-javascript

   window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
   var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};
   pc.createDataChannel("");    //create a bogus data channel
   pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
   pc.onicecandidate = function(ice){  //listen for candidate events

       if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
       var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
       //console.log('my IP: ', myIP);
       pc.onicecandidate = noop;

       let ip = myIP + port;
       socket = io(ip);
       socketOpen = true;
       console.log('Connected!');
       resolve({name: 'alcwyn', hobby: 'coding'});
   };



});


}

/*
if ( socketOpen === true ) {
console.log('disconnecting...')
document.getElementById('shield').classList.toggle('hidden')
connectIcon.classList.replace("fa-toggle-on", "fa-toggle-off")
socket = null;
socketOpen = false;
}
else {

}
*/

//Recipe constructor
function Recipe(name, duration, light, feed, temperature) {
this.name = name;
this.duration = duration; // days
this.light = light; //milliseconds [TODO: convert to seconds]
this.feed = feed; // milliseconds [TODO: convert to seconds]
this.temperature = temperature;
}

//Recipe objects
var filsToms = new Recipe('filsToms', 30, 5, 10, 20);
var disco = new Recipe('disco', 30, 0.5, 1, 30);
var temp = new Recipe('temp', 30, 15, 15, 10);

function daysToMilliseconds (days) {
ms = days * 24 * 60 * 60 * 1000
return ms
}

 // Generic controller

 let power = false;
 let ambient = 0;

 function controller(element){
   if (power === false){
     console.log('turning on ' + element)
     socket.emit('hardware', {type: element + '-on', duration: 'UNKNOWN' });
     toggleLightBars();
     power = true;
     console.log(power);
   }
   else if (power === true){
     console.log('turning off ' + element)
     socket.emit('hardware', {type: element + '-off', duration: 'UNKNOWN'});
     toggleLightBars();
     power = false;
     console.log(power);
   }
 }

 //Start recipe
 function startRecipe(chosen){
   console.log('Starting: ' + Object.values(chosen)[0] + ', ' + Object.values(chosen)[1] + ', ' + Object.values(chosen)[2] + ', ' + Object.values(chosen)[3] + ', ' + Object.values(chosen)[4])
   startTime = new Date().getTime();
   startDate = new Date(startTime);
   durationLength = daysToMilliseconds(Object.values(chosen)[1]);
   finishTime = new Date(startTime + durationLength);
   console.log('Date started: ' + startDate)
   console.log('Duration: ' + Object.values(chosen)[1] + ' days')
   console.log('Expected harvest: ' + finishTime)
   console.log('Harvest info: ' + durationLength)

   let lightMilliseconds = (Object.values(chosen)[2] * 1000);
   let feedMilliseconds = (Object.values(chosen)[3] * 1000);

   //light
   let lightLoop = setTimeout(function tick() {
     controller(Object.keys(chosen)[2]);
     lightLoop = setTimeout(tick, lightMilliseconds);
   }, lightMilliseconds);

   //feed
   /*
   let feedLoop = setTimeout(function tick() {
     controller(Object.keys(chosen)[3]);
     feedLoop = setTimeout(tick, feedMilliseconds);
   }, feedMilliseconds);
   */

   //temperature
   function thermostat(){
     target = Object.values(chosen)[4];

     if (ambient <= target){
       console.log('Ambient temperature: ' + ambient);
       console.log('Target temperature: ' + target);
       console.log('turning on thermostat')
       socket.emit('hardware', {type: 'thermostat-on', duration: 'UNKNOWN'});
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
     }
     else {
       console.log('Ambient temperature: ' + ambient);
       console.log('Target temperature: ' + target);
       console.log('turning off thermostat')
       socket.emit('hardware', {type: 'thermostat-off', duration: 'UNKNOWN'});
       //update UI
       ambient--;
     }
   }

   let temperatureLoop = setInterval(thermostat, 1000);

 }

 // Tatty old recipe
 let tattyOldRecipeButton = document.getElementById('tatty-old-recipe');

 tattyOldRecipeButton.addEventListener('click', function(){

   connectPlantIO().then( (results, anotherval) => {
     setTimeout(tattyOldRecipeButton.innerHTML="Connected to CloudPlantIO!", 3000)
     startRecipe(filsToms);
   })

 });

 // Automatic menu
 let menuBtn = document.getElementById('openMenu');
 menuBtn.addEventListener('click', function(){
   document.querySelector('.content-footer.auto').classList.toggle('menu-open');

   if(document.querySelector('.content-footer.auto').classList.contains('menu-open'))
   {
     document.querySelector('#menuIcon').classList.replace('fa-bars', 'fa-times')
   }
   else {
     document.querySelector('#menuIcon').classList.replace('fa-times', 'fa-bars')
   }
 });




// Basic arrow functions (more detail needed)
// function shout(volume, sentence){
//  console.log(sentence)
// }

// (volume, sentence) => { console.log(sentence) }



//1. connect to plant if not connected
/*
if(socketOpen){
console.log('starting recipe...');
//2. Light plant for 12 hours, every 12 hours

}
else { console.log('Socket closed :(')};
*/

/*
   if (this.classList.contains('active') == true){
     console.log('turning off')
     socket.emit('hardware', {type: 'water-off', duration: 0});
   }
   else{
     console.log('turning on LEDs...')
     socket.emit('hardware', {type: 'water-on', duration: 10});
   }
 this.classList.toggle('active');

 */


})(window, document);
