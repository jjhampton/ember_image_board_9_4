import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        url: "http://lorempixel.com/400/200/sports",
        caption: "Lorem Sports"
      },
      {
        url: "http://lorempixel.com/400/200/city",
        caption: "Lorem City"
      }
    ];
  }
});
