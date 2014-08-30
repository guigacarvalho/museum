import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      return this.store.find('gallery').then(function(galleries){
		    return galleries.filterBy('isFavorite', true);
     });
   }
});