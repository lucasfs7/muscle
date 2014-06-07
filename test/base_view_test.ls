_ = require 'underscore'
View = require '../lib/base_view'
test = require 'tape'

test 'Base View', (t) ->
  test-template = '<p>teste</p>'

  TestView = View.extend do
    className: 'test-view'
    tagName: 'article'
    id: 'test'
    template: ->
      -> _.template(test-template)

  test-view = new TestView!
  test-view.render!

  t.test 'should exist', (t) ->
    t.ok test-view
    t.end!

  t.test 'should have a valid jquery instance in $el', (t) ->
    t.ok test-view.$el
    t.ok test-view.$el.hasClass 'test-view'
    t.equal test-view.$el.attr('id'), 'test'
    t.equal test-view.$el.0.tagName.toLowerCase!, 'article'
    t.equal test-view.$el.html!, test-template
    t.end!

