'use strict';
var Backbone, $, View;
Backbone = require('backbone');
Backbone.$ = $ = require('jquery');
View = require('./base_view');
module.exports = View.extend({
  remove: function(){
    this.$el.remove();
    return this.trigger('removed');
  },
  render: function(){
    return View.prototype.render.apply(this, [this.model.toJSON()]);
  },
  watcher: function(){
    View.prototype.watcher.apply(this);
    this.model.on('change', this.render, this);
    return this.model.on('destroy', this.remove, this);
  }
});