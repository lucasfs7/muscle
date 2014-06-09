_ = require 'underscore'
Backbone = require 'backbone'
Backbone.$ = $ = require 'jquery'
ModelView = require '../lib/model_view'
CollectionView = require '../lib/collection_view'
test = require 'tape'

test 'Collection View', (t) ->
  obj = [{name: 'name 1'}, {name: 'name 2'}]
  test-template = '<p class="name"><%= name %></p>'

  TestCollection = Backbone.Collection.extend do
    model: Backbone.Model.extend {}

  TestModelView = ModelView.extend do
    className: 'model-test'
    tagName: 'li'
    template: -> _.template(test-template)

  TestCollectionView = CollectionView.extend do
    modelView: TestModelView
    className: 'collection-test'
    tagName: 'ul'

  test-collection-view = new TestCollectionView do
    collection: new TestCollection

  test-collection-view.collection.reset obj

  t.test 'should exist', (t) ->
    t.ok test-collection-view
    t.end!

  t.test 'should have a collection', (t) ->
    t.equal typeof test-collection-view.collection, 'object'
    t.end!

  t.test 'should have 2 models', (t) ->
    t.equal test-collection-view.collection.length, 2
    t.end!

  t.test 'should be rendered', (t) ->
    t.notEqual testCollectionView.$el.html!, ''
    t.end!

