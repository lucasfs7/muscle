Backbone = require 'backbone'
Backbone.$ = $ = require 'jquery'
View = require '../lib/base_view'
test = require 'tape'

test 'Base View', (t) ->
  TestView = View.extend do
    className: 'test-view'
    tagName: 'article'
    id: 'test'

  testView = new TestView!
  testView.render!

  t.test 'should exist', (t) ->
    t.ok testView
    t.end!

  t.test 'should have a valid jquery instance in $el', (t) ->
    t.ok testView.$el
    t.ok testView.$el.hasClass 'test-view'
    t.equal testView.$el.attr('id'), 'test'
    t.equal testView.$el.0.tagName.toLowerCase!, 'article'
    t.end!

