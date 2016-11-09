import Ember from 'ember';

export default Ember.Component.extend({
  starredQuestions: Ember.inject.service(),

  actions : {
    removeFromFavorites(question) {
      this.get('starredQuestions').remove(question);
    }
  }
});
