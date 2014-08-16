import DS from 'ember-data';

var Gallery = DS.Model.extend({
    title: DS.attr('string'),
    img: DS.attr('string')
});

 Gallery.reopenClass({
        //include

    FIXTURES: [
        {
            id: 1,
            title: "Writing",
            img: "/assets/img/1.jpg"
        },
        {
            id: 2,
            title: "Writing a blog in Ember",
            img: "/assets/img/2.jpg"
        }
    ]
});


export default Gallery;