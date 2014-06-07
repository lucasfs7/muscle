'use strict';
var Backbone, $, _;
Backbone = require('backbone');
Backbone.$ = $ = require('jquery');
_ = require('underscore');
module.exports = Backbone.View.extend({
  initialize: function(){
    this.createTemplate();
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
  createTemplate: function(){
    return this.template = _.template('<p>teste</p>');
  },
  DOMControl: function(){}
});