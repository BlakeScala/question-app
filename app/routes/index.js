import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    upvote(question) {
      var count = question.get('rating');
      count++;
      question.set('rating', count);
      question.save();
    },

    downvote(question) {
      var count = question.get('rating');
      count--;
      question.set('rating', count);
      question.save();
    }
  }
});
