import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
      Info: function() {
        this.toggleProperty('isExpanded');
      }


      // next: function() {
      //   ajax: Ember.inject.service(),
      //   model() {
      //     return this.get('ajax').request('http://localhost:3000/?page=5&size=10');
      //   };
      //
      // };
    }
  });
