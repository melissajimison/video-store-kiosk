import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  release_date: DS.attr('date'),
  overview: DS.attr('string'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
//
//
// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
//
// export default Model.extend({
//   title: attr('string'),
//   release_date: attr('string'),
//   overview: attr('string'),
//   inventory: attr('string'),
//   poster_filename: attr('string'),
//   createdAt: attr('date'),
//   updatedAt: attr('date')
// });
