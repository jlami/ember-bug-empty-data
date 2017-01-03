import Ember from 'ember';
import Adapter from 'ember-data-fixture-adapter';

export default Adapter.extend({
	findRecord() {
		//throw new Error('test');
		console.log('findRecord', ...arguments);
		return Ember.RSVP.reject();
	},
});
