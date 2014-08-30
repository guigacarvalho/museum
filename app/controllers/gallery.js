import Ember from 'ember';

export default Ember.ArrayController.extend({
	play: function(gal){
		//Write script to break text into 100
		
		var audio = "http://translate.google.com/translate_tts?ie=UTF-8&q="+
					gal.get('title') +
					"&tl=en";

		var audioFile = new Audio(audio);
  		 audioFile.addEventListener('ended', function() {
  		 	var audio1 = "http://translate.google.com/translate_tts?ie=UTF-8&q="+gal.get('desc').slice(0,100)+"&tl=en";
			 var audioFile1 = new Audio(audio1);
				audioFile1.play();
				// alert("test");
				// console.log("testing");
			 
  		 });
		audioFile.play();
	},
	actions: {
		addFavorites: function(galleryid){
				var store = this.store;
				var self = this;
				return store.find('gallery').then(function(galleries){
					var favs = galleries.filterBy('id', galleryid);
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