let stage = 0;

function() {
  stage++;
  switch (stage) {
    case 1:
      nextSlide()
      actionBtn.innerHTML = "Take seed"
      break;
    case 2:
      selectSeed()
      nextSlide()
      actionBtn.innerHTML = "Take recipe"
      break;
    case 3:
      selectRecipe()
      nextSlide()
      actionBtn.innerHTML = "Connect"
      break;
    case 4:
      connectPlantIO()
      animateButton()
      actionBtn.innerHTML = "Start growing"
      break;
    case 5:
      startRecipe()
      closeSlideshow()
      break;
  }
}