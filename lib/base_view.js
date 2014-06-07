'use strict';
var Backbone, $;
Backbone = require('backbone');
Backbone.$ = $ = require('jquery');
module.exports = Backbone.View.extend({
  initialize: function(){
    var that;
    if ((that = this.template) != null) {
      that();
    }
    this.watcher();
    return this.trigger('initialized');
  },
  renderMethod: 'html',
  templateDir: 'app/templates/',
  render: function(obj){
    this.$el[this.renderMethod](this.template(obj));
    return this.trigger('rendered');
  },
  watcher: function(){
    return this.on('rendered', this.DOMControl, this);
  },
  DOMControl: function(){}
});