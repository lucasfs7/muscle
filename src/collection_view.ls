'use strict'

Backbone = require 'backbone'
Backbone.$ = $ = require 'jquery'
View = require './base_view'

module.exports = View.extend
  renderMethod: 'append',

  addOne: (model) -> 
    modelView = new @modelView {model} 
    modelView.render!
    @$el[@renderMethod] modelView.el

  addAll: ->
    @collection.forEach @addOne, @

  render: ->
    @addAll!
    @trigger 'rendered'

  remove: (model) -> 
    model.destroy!

  watcher: ->
    View.prototype.watcher.apply @
    @collection.on 'add', @addOne, @
    @collection.on 'reset', @render, @
    @collection.on 'rendered', @DOMControl, @
    @collection.on 'remove', @remove, @

