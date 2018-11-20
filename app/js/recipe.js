(function(window, document, undefined) {
  // Recipe page buttons
  let selectedRecipe = document.querySelector('.recipe-switch');
  Array.from(selectedRecipe).forEach(link => {
    link.addEventListener('click', function(event) {
      console.log(this.id)
    });
  });
})(window, document);