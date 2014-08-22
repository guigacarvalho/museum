import Ember from 'ember';

var Router = Ember.Router.extend({
  location: MyNewAppENV.locationType
});

Router.map(function() {
  this.route('gallery');
  this.route('artwork');
  this.route('registration');
  this.route('map');
  this.route('about');
  this.route('favorite');
  this.route('help');
});

export default Router;
