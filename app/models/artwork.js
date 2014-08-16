import DS from 'ember-data';

var Artwork = DS.Model.extend({
    title: DS.attr('string'),
    img: DS.attr('string')
});

     Artwork.reopenClass({
     	//include

	FIXTURES: [

    ]
});

export default Artwork;