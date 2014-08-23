import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyNewAppENV.locationType
});

Router.map(function() {
  this.route('gallery');
  this.route('artwork');
  this.route('registration', {path: '/'});
  this.route('map');
  this.route('about');
  this.route('favorites');
  this.route('help');
});

export default Router;
