'use strict'

Backbone = require 'backbone'
Backbone.$ = $ = require 'jquery'
View = require './base_view'

module.exports = View.extend
  remove: ->
    @$el.remove!
    @trigger 'removed'

  render: ->
    View.prototype.render.apply(@, [@model.toJSON!])

  watcher: ->
    View.prototype.watcher.apply @
    @model.on 'change', @render, @
    @model.on 'destroy', @remove, @
