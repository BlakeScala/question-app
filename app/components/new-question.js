import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        mainQuestion: this.get('mainQuestion'),
        notes: this.get('notes'),
        rating: 0,
        timestamp: moment().format('LL')
      };
      if ((Ember.isEmpty(this.get('author'))) || (Ember.isEmpty(this.get('mainQuestion'))) || (Ember.isEmpty(this.get('notes')))) {
        alert("You must complete the form!");
      } else {
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion', params);
        this.set('author', "");
        this.set('mainQuestion', "");
        this.set('notes', "");
      }
    }
  }
});
