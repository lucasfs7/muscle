'use strict';
var Backbone, $, View;
Backbone = require('backbone');
Backbone.$ = $ = require('jquery');
View = require('./base_view');
module.exports = View.extend({
  renderMethod: 'append',
  addOne: function(model){
    var modelView;
    modelView = new this.modelView({
      model: model
    });
    modelView.render();
    return this.$el[this.renderMethod](modelView.el);
  },
  addAll: function(){
    return this.collection.forEach(this.addOne, this);
  },
  render: function(){
    this.addAll();
    return this.trigger('rendered');
  },
  remove: function(model){
    return model.destroy();
  },
  watcher: function(){
    View.prototype.watcher.apply(this);
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.render, this);
    this.collection.on('rendered', this.DOMControl, this);
    return this.collection.on('remove', this.remove, this);
  }
});