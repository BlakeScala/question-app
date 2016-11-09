import Ember from 'ember';

export function noAnswers(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 0) {
    return 'Be the first to answer!';
  } else {
    return question.get('answers').get('length') + " Answers";
  }
}

export default Ember.Helper.helper(noAnswers);
