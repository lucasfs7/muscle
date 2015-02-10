# Muscle.js

[![browser support](https://ci.testling.com/lucasfs7/muscle.png)](https://ci.testling.com/lucasfs7/muscle)

A layer on top of Backbonejs to bring more control to views and a better integration between views and models/collections.

Totally integrated with browserify.

#### installing:

```
$ npm install muscle
```

#### using:
```javascript
// require the libs

var Backbone = require('backbone');
var $ = Backbone.$ = require('jquery');
var Muscle = require('muscle');

// create the model and collection

var Book = Backbone.Model.extend({});
var Books = Backbone.Collection.extend({ model: Book });

// create a model view

var BookShow = Muscle.ModelView.extend({
  className: 'book-show',
  tagName: 'article',
  template: function() {
    return require('book_show_template');
  }
});

var bookShow = new BookShow({
  model: new Book({
    name: 'Backbonejs is easy',
    author: 'unknown'
  })
});

// create a collection view

var BookItem = Muscle.ModelView.extend({
  className: 'book-item',
  tagName: 'li',
  template: function() {
    return require('book_item_template');
  }
});

var BookList = Muscle.CollectionView.extend({
  tagName: 'ul',
  className: 'book-list',
  modelView: BookItem
});

var bookList = new BookList({ collection: new Books });
```

#### building:
```
$ npm start
```

#### testing:
```
$ npm test
```
