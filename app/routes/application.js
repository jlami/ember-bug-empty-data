import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({posts: this.store.findAll('post'), authors: this.store.findAll('author')});
  },

  actions: {
  test() {
  alert(this.store.peekAll('author').get('length'));
  }
  }
});
