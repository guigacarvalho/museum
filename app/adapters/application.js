import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
	firebase: new Firebase("popping-fire-5325.firebaseio.com")
});