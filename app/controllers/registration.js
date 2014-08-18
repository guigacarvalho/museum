import Ember from 'ember';

var RegistrationController = Ember.ArrayController.extend(Ember.Validations.Mixin , {
	gender: ["Gender","male","female"],
	selectedGender: "Gender",
	newsletter: true,
	needs: ['application'],
	loggedout: Ember.computed.alias('controllers.application.is_loggedout'),
	isNotValid: false,
	validations: {
    	zip: {
    		presence: true,
    		length: { minimum: 5 },
    		numericality: true
    	}
	},
	watchChanges: function () {
		
		this.validate();
		console.log("in validate");
	}.observes("zip"),
	actions:{
		save: function () {
			var email = this.get('email'),
				zip = this.get('zip'),
				day = this.get('day'),
				month = this.get('month'),
				year = this.get('year'),
				gender = this.get('selectedGender'),
				newsletter = this.get('newsletter');

			if(zip.match("^\\d{5}$")){
				console.log('match found');
			} else {
				console.log('match not found');
			}
			if ( zip && day && month && year ) {
				this.set('isNotValid' , false);
				this.set('loggedout', false);
				console.log(this.get('selectedGender') + newsletter);
				var visitor = this.store.createRecord('registration', {
					zip: zip,
					email: email,
					dob: day + '/' + month + '/' + year,
					gender: gender,
					newsletter: newsletter
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
						controller.set('gender', '');
						controller.set('newsletter', '');						
					// controller.addObject(visitor);
					}
				);
			} else {
				this.set('loggedout', true);
				this.set('isNotValid' , true);
			}
		},
		logout: function () {
			this.set('loggedout', true);
			this.set('isNotValid' , false);
			this.set('selectedGender','Gender');
			this.set('newsletter', true);
		}
	}
});


export default RegistrationController;