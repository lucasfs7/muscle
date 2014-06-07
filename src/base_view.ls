'use strict'

Backbone = require 'backbone'
Backbone.$ = $ = require 'jquery'
_ = require 'underscore'

module.exports = Backbone.View.extend do
  initialize: ->
    @createTemplate!
    @watcher!
    @trigger 'initialized'

  renderMethod: 'html'
  templateDir: 'app/templates/'

  render: (obj) ->
    @$el[@renderMethod] @template obj
    @trigger 'rendered'

  watcher: ->
    @on 'rendered', @DOMControl, @

  createTemplate: ->
    @template = _.template('<p>teste</p>');

  DOMControl: ->

