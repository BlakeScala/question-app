import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  mainQuestion: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
  rating: DS.attr(),
  timestamp: DS.attr(),
});
