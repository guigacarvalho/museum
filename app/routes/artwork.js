import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
     this.store.push('artwork',{id:3,title:'Is this a question',img:'/assets/img/3.jpg'});
     this.store.push('artwork',{id:4,title:'What time is it',img:'/assets/img/4.jpg'});
     
     	//include likes

// 	FIXTURES: [
//         {
//             id: 1,
//             title: "Writing",
//             img: "/assets/img/1.jpg"
//         },
//         {
//             id: 2,
//             title: "Writing a blog in Ember",
//             img: "/assets/img/2.jpg"
//         }
//     ]
// });

     return this.store.find('artwork');
 } 
});

