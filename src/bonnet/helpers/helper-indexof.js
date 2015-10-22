(function() {
  module.exports.register = function(Handlebars, options) {

    // Customize this helper
    Handlebars.registerHelper('indexOf', function(parent,child) {
      var content = parent.indexOf(child);
      return content;
    });

  };
}).call(this);
