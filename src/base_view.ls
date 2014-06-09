'use strict'

Backbone = require 'backbone'
Backbone.$ = $ = require 'jquery'

module.exports = Backbone.View.extend do
  initialize: ->
    @template? = @template!
    @watcher!
    @trigger 'initialized'

  renderMethod: 'html'
  templateDir: 'app/templates/'

  render: (obj) ->
    @$el[@renderMethod] @template obj
    @trigger 'rendered'

  watcher: ->
    @on 'rendered', @DOMControl, @

  DOMControl: ->
  template: ->

