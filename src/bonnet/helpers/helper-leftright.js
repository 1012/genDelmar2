(function() {
  module.exports.register = function(Handlebars, options) {

    // Customize this helper
    Handlebars.registerHelper('leftright', function(parent,child,threshold) {
      var index  = parent.indexOf(child);
      if (index < threshold) {
          return "right";
      } else {
          return "left"
      }
      
    });

  };
}).call(this);
