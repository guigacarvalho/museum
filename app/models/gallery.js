import DS from 'ember-data';

var Gallery = DS.Model.extend({
    title: DS.attr('string'),
    img: DS.attr('string'),
	desc: DS.attr('string')
});

export default Gallery;