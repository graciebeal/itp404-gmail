import DS from 'ember-data';

export default DS.Model.extend({
	// id: DS.attr('number'),
  	from: DS.attr('string'),
  	to: DS.attr('string'),
  	subject: DS.attr('string'),
  	message: DS.attr('string')

});
