import Ember from 'ember';

export default Ember.Component.extend({
  starredQuestions: Ember.inject.service(),
  // downvoted: false,
  // upvoted: false,

  sorted: ['rating:desc'],
  // sortedLH: ['rating:asc'],

  sortedQuestions: Ember.computed.sort('question', 'sorted'),

  actions: {
    starThis(question) {
      this.get('starredQuestions').add(question);
    },

    upvote(question) {
      // this.set('upvoted', true);
      this.sendAction('upvote', question);
    },

    downvote(question) {
      this.sendAction('downvote', question);
      // this.set('downvoted', true);
    },

    worst() {
      this.set('sorted', ['rating:asc']);
    },

    best() {
      this.set('sorted', ['rating:desc']);
    }
  }
});
