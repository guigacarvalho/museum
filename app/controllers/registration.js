import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		save: function () {
			var visitor = this.store.createRecord('registration',
				{
					zip: this.get('zip'),
					email: this.get('email'),
					dob: this.get('dob')
				}
			);
			var controller = this;
			visitor.save().then(
				function() {
					console.log("saved!!");
					controller.get('model.registration');
					controller.set('email', '');
					controller.set('zip', '');
					controller.set('dob', '');					
					// controller.addObject(visitor);
				}
			);

		}
	}
});
