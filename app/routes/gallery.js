import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
     this.store.push('gallery',{id:3,title:'Is this a question',img:'/assets/img/3.jpg'});
     this.store.push('gallery',{id:4,title:'What time is it',img:'/assets/img/4.jpg'});

     return this.store.find('gallery');
 } 
});

