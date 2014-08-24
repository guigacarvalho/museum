import Ember from 'ember';


export default Ember.ArrayController.extend({
  content: [{
      location: L.latLng(37.414287, -122.077409),
      title: 'Computer History Museum'
		},
		{
      location: L.latLng(37.414387, -122.077509),
      title: 'Test Gallery 1'
		}]
  });
