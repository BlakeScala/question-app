import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],

  add(question) {
    if(!(this.get('questions').contains(question))) {
      this.get('questions').pushObject(question);
    }
    console.log(this.get('questions').length);
  },

  remove(question) {
    this.get('questions').removeObject(question);
  }
});
