// Generated by CoffeeScript 1.6.3
(function() {
  var Muscle;

  Muscle = window.Muscle = {};

  Muscle.View = Backbone.View.extend({
    initialize: function() {
      this.createTemplate();
      this.watcher();
      return this.trigger('initialized');
    },
    renderMethod: 'html',
    templateDir: 'app/templates/',
    render: function(obj) {
      this.$el[this.renderMethod](this.template(obj));
      return this.trigger('rendered');
    },
    watcher: function() {
      return this.on('rendered', this.DOMControl, this);
    },
    createTemplate: function() {
      if (typeof HandlebarsTemplates !== "undefined" && HandlebarsTemplates !== null) {
        return this.template = HandlebarsTemplates[this.templateDir + this.templateName];
      } else {
        return this.template = Handlebars.templates[this.templateName + '.hbs'];
      }
    },
    DOMControl: function() {}
  });

  Muscle.CollectionView = Muscle.View.extend({
    renderMethod: 'append',
    addOne: function(model) {
      var modelView;
      modelView = new this.modelView({
        model: model
      });
      modelView.render();
      return this.$el[this.renderMethod](modelView.el);
    },
    addAll: function() {
      return this.collection.forEach(this.addOne, this);
    },
    render: function() {
      this.addAll();
      return this.trigger('rendered');
    },
    remove: function(model) {
      return model.destroy();
    },
    watcher: function() {
      Muscle.View.prototype.watcher.apply(this);
      this.collection.on('add', this.addOne, this);
      this.collection.on('reset', this.addAll, this);
      this.collection.on('reset', this.DOMControl, this);
      return this.collection.on('remove', this.remove, this);
    }
  });

  Muscle.ModelView = Muscle.View.extend({
    remove: function() {
      this.$el.remove();
      return this.trigger('removed');
    },
    render: function() {
      return Muscle.View.prototype.render.apply(this, [this.model.toJSON()]);
    },
    watcher: function() {
      Muscle.View.prototype.watcher.apply(this);
      this.model.on('change', this.render, this);
      return this.model.on('destroy', this.remove, this);
    }
  });

}).call(this);
