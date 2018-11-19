/* TODO: Read up on: */
// http://markdalgleish.com/2011/03/self-executing-anonymous-functions/

(function(window, document, undefined){


  // get the UI elements
  let connectButton = document.getElementById('connect');
  let connectIcon = document.getElementById('connect-icon');

  //connect to plant manually
  //connectButton.addEventListener('click', connectPlantio() );



  // water plant manually
  let waterOnButton = document.getElementById('water-on')
/*
  waterOnButton.addEventListener('click', function(){
    if(connectButton.classList.contains('active') == false){
      let modalMessage = document.querySelector(".message");
      modalMessage.innerHTML = "plant not connected"
      modalWindow.classList.toggle('hidden')

    }
    if (this.classList.contains('active') == true){
      console.log('turning off')
      socket.emit('hardware', {type: 'water-off', duration: 0});
    }
    else{
      console.log('turning on')
      socket.emit('hardware', {type: 'water-on', duration: 10});
    }
  this.classList.toggle('active');
});
*/

  let lightButton = document.getElementById('light')
  let modalWindow = document.getElementById('modal')
  let modalClose = document.querySelector(".close");

  //close modal
  modalClose.onclick = function() {
    modalWindow.classList.toggle('hidden')
  }

  //light plant manually
  /*
  lightButton.onclick = function lightPlant() {
    if(connectButton.classList.contains('active') == false){
      let modalMessage = document.querySelector(".message");
      modalMessage.innerHTML = "plant not connected"
      modalWindow.classList.toggle('hidden')

    }
    if (this.classList.contains('active') == true){
      console.log('turning off')
      socket.emit('hardware', {type: 'light-off'});
    }
    else{
      console.log('turning on')
      socket.emit('hardware', {type: 'light-on'});
    }
  this.classList.toggle('active');
  document.getElementById('lightfade').classList.toggle('power');
  barlist = document.getElementsByClassName('bars');
  for (var i = 0; i < barlist.length; i++) {
    barlist[i].classList.toggle('hidden')
  }
}
*/





})(window, document);
