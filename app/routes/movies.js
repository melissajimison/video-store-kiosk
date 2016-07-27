import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  // }

  model: function() {
    return this.store.find('movie');
  }
});
