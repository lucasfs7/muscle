_ = require 'underscore'
Backbone = require 'backbone'
Backbone.$ = $ = require 'jquery'
ModelView = require '../lib/model_view'
test = require 'tape'

test 'Model View', (t) ->
  model-name = 'Model Test'
  test-template = '<p class="name"><%= name %></p>'

  TestModel = Backbone.Model.extend {}

  TestModelView = ModelView.extend do
    className: 'model-test'
    tagName: 'article'
    template: -> _.template(test-template)

  test-model-view = new TestModelView {model: new TestModel}
  test-model-view.model.set {name: model-name}

  t.test 'should exist', (t) ->
    t.ok test-model-view
    t.end!

  t.test 'should have a model', (t) ->
    t.ok test-model-view.model
    t.equal typeof test-model-view.model, 'object'
    t.end!

  t.test 'should be rendered', (t) ->
    name = test-model-view.$el.find '.name'
    t.equal name.html!, model-name
    t.end!

  t.test 'should change when model attributes change', (t) ->
    new-name = 'new name'
    test-model-view.model.set {name: new-name}
    name = test-model-view.$el.find '.name'
    t.equal name.html!, new-name
    t.end!

  t.test 'should remove the view when the model is destroyed', (t) ->
    div = document.createElement 'div'
    $(div).append test-model-view.$el
    test-model-view.model.destroy!
    t.notOk test-model-view.$el[0] in div.childNodes
    t.end!
