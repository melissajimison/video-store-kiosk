import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request('http://localhost:3000');
  }
  // ,
  // actions: {
  //   next: function() {
  //     ajax: Ember.inject.service(),
  //
  //     return this.get('ajax').request('http://localhost:3000/?page=5&size=10');
  //   // console.log("melissa");
  // }
  // }
});
