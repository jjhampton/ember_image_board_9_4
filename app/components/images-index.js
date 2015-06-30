import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['image-index'],

  images: [
    {
      url: "http://lorempixel.com/400/200/sports",
      caption: "Lorem Sports"
    },
    {
      url: "http://lorempixel.com/400/200/city",
      caption: "Lorem City"
    }
  ]
});
