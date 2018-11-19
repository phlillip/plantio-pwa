(function(window, document, undefined){

$('.onboarding').slick({
dots: true,
arrows: false,
draggable: true,
mobileFirst: true,
infinite: false
});

let skipButton = document.getElementById('skip');
skipButton.addEventListener('click', function(){
  document.querySelector('.onboarding').style.display = 'none';
  skipButton.style.display = "none";
});

let finishedButton = document.querySelector('.finished-onboarding');
finishedButton.addEventListener('click', function(){
  document.querySelector('.onboarding').style.display = 'none';
  skipButton.style.display = "none";
});

})(window, document);
