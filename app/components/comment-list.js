import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],

  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {

    worst() {
      this.set('sortBy', ['rating:asc']);
    },

    best() {
      this.set('sortBy', ['rating:desc']);
    },

    upvote(answer) {
      this.sendAction('upvote', answer);
    },

    downvote(answer) {
      this.sendAction('downvote', answer);
    }
  }
});
