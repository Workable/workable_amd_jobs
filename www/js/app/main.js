define(function(require) {
  var $ = require('jquery'),
    lib = require('./lib'),
    controller = require('./controller/bar'),
    model = require('./model/foo'),
    backbone = require('backbone'),
    underscore = require('underscore');

  //A fabricated API to show interaction of
  //common and specific pieces.
  controller.setModel(model);

  $(function() {
    controller.render(lib.getBody());

    //Display backbone and underscore versions
    $('body')
      .append('<div>underscore was loaded</div>')
      .append('<div>backbone was loaded</div>');
  });
});