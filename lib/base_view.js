'use strict';
var Backbone, $;
Backbone = require('backbone');
Backbone.$ = $ = require('jquery');
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
    if (typeof HandlebarsTemplates != 'undefined' && HandlebarsTemplates !== null) {
      return this.template = HandlebarsTemplates[this.templateDir + this.templateName];
    } else {
      return this.template = Handlebars.templates[this.templateName + '.hbs'];
    }
  },
  DOMControl: function(){}
});