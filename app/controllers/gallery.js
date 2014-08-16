import Ember from 'ember';

export default Ember.ArrayController.extend({
	play: function(gal){
		var audio = "http://translate.google.com/translate_tts?ie=UTF-8&q="+
		gal.get('title') +
		"&tl=en&total=1&idx=0&textlen=23&prev=input";
		console.log(audio);
		new Audio(audio).play();
	}
});