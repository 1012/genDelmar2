(function() {
  module.exports.register = function(Handlebars, options) {

    // Customize this helper
    Handlebars.registerHelper('whatis', function(data,optios) {
      var content = JSON.stringify(data);
      return new Handlebars.SafeString(content);
    });

  };
}).call(this);