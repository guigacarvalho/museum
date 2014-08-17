import Ember from 'ember';

export default Ember.Controller.extend({
	isNotValid: false,
	actions:{
		save: function () {
			var email = this.get('email'),
				zip = this.get('zip'),
				day = this.get('day'),
				month = this.get('month'),
				year = this.get('year'),
				mailing_list = this.get('mailing_list');
			if ( zip && day && month && year ) {
				this.set('isNotValid' , false);
				console.log('inside if');
				var visitor = this.store.createRecord('registration', {
					zip: zip,
					email: email,
					dob: day + '/' + month + '/' + year,
					mailing_list: mailing_list
				});
				var controller = this;
				visitor.save().then(
					function() {
						console.log("saved!!");
						controller.get('model.registration');
						controller.set('email', '');
						controller.set('zip', '');
						controller.set('day', '');
						controller.set('month', '');
						controller.set('year', '');						
					// controller.addObject(visitor);
					}
				);
			} else {
				this.set('isNotValid' , true);
			}
		}
	}
});
