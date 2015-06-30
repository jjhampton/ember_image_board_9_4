import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      console.log(this.get('model'));
      console.log(this.model);
      this.sendAction('action', this.get('model'));
    }
  }
});
