import Ember from 'ember';

export default Ember.Controller.extend({
	is_loggedout: true,
	isExpanded: true,
	actions: {
		menu: function (){
			// debugger;
			var notExpanded = !this.isExpanded;
			return this.set('isExpanded', notExpanded);
		}
	}
});