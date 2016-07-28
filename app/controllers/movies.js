import Ember from 'ember';

export default Ember.Controller.extend({
  isExpanded: false,

    actions: {
      showInfo: function() {
        this.set('isExpanded', true);
      },

      hideInfo: function() {
        this.set('isExpanded', false);
      }
    }
  });
