import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions : {
    showEditForm() {
      this.set('editQuestion', true);
    },

    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        mainQuestion: this.get('mainQuestion'),
        notes: this.get('notes'),
      };
      this.set('editQuestion', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
