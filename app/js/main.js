const PLANTIO = {
  common: common,
  index: index,
  recipes: recipes,
  plant: plant
}

function init(){

  UTIL = {

    fire : function(func,funcname, args){

      // The object literal that contains all the page functions
      var namespace = PLANTIO;

      // check whether we are calling init of another function within this page
      funcname = (funcname === undefined) ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
        namespace[func][funcname](args);
      }
    },

    loadEvents : function(){

      // get the body id - used to reference the page in the object literal
      var bodyId = document.getElementsByTagName("body")[0].id;

      // hit up common first.
      UTIL.fire('common');

      // get a list of all the classes
      let classes = document.body.className.split(/\s+/);

      // fire the events listed in the classes
      for (var i = 0; i < classes.length; i++){
        UTIL.fire(bodyId);
        UTIL.fire(bodyId, classes[i]);
      }


      UTIL.fire('common','finalize');
    }
  };


  UTIL.loadEvents();
}
