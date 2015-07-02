import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('images', function() {
    this.route('create');
    this.route('show', {path: '/:image_id'});
    this.route('loading');
  });
});

export default Router;
