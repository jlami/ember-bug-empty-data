import Ember from 'ember';
import Adapter from 'ember-data-fixture-adapter';

export default Adapter.extend({
	coalesceFindRequests: true,

	findRecord() {
		return Ember.RSVP.reject();
	},

	findMany(store, modelClass, ids, snapshots) {
		return [];
	},
});
