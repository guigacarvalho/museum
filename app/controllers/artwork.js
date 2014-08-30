import Ember from 'ember';

export default Ember.ArrayController.extend({
		actions: {
		addFavorites: function(artworkid){
				var store = this.store;
				var self = this;
				return store.find('artwork').then(function(artworks){
					var favs = artworks.filterBy('id', artworkid);
					if(favs.length == 1) {
						var fav = favs[0];
						fav.set('favoriteCount', fav.get('favoriteCount')+1);
						if(fav.get('favoriteCount')>1)
							fav.set('aboveOneLikes', true);
						else
							fav.set('aboveOneLikes', false);
						fav.save().then(function(){
	  						console.log("Record saved in database");
	  					});
					}
				});
				
			}
		}

});
