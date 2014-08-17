import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
     this.store.push('artwork', {
		 id: 1,
		 galleryid: 1,
		 title: 'Calculators: First Steps on the Path to Computers',
		 desc: 'For centuries, calculators were the only machines to help us compute. A long lineage of devices stretching from the ancient abacus to today’s digital computer.',
		 img: '/assets/img/calculator.jpg',
		 date: null,
		 copyrightOwner: null,
		 source: null
     });
     this.store.push('artwork',{
		 id: 2,
		 galleryid: 1,
		 title: 'Mathematical Tools',
		 desc: 'Throughout the history of calculating we’ve devised ways to add speed and accuracy while subtracting the drudgery.' +
'Many solutions used body parts, notably fingers. A 19th century Chinese technique can count to 10 billion using just two hands! Other solutions were mechanical — both general-purpose tools for everyday calculations and specialized instruments for engineering, navigational, or other scientific and technical problems.',
		 img: '/assets/img/mathtools-1.jpg',
		 date: null,
		 copyrightOwner: null,
		 source: 'A page from Summa de arithmetica, geometrica, proportioni et proportionalita'
     });
     this.store.push('artwork',{
		 id: 3,
		 galleryid: 2,
		 title: '1833: First Semiconductor Effect is Recorded',
		 desc: 'Michael Faraday describes the "extraordinary case" of his discovery of electrical conduction increasing with temperature in silver sulfide crystals. This is the opposite to that observed in copper and other metals.',
		 img: '/assets/img/1833-faraday.jpg',
		 date: '1833',
		 copyrightOwner: null,
		 source: 'labortalk.com'
     });
     this.store.push('artwork',{
		 id: 4,
		 galleryid: 2,
		 title: '1874: Semiconductor Point-Contact Rectifier Effect is Discovered',
		 desc: 'In the first written description of a semiconductor diode, Ferdinand Braun notes that current flows freely in only one direction at the contact between a metal point and a galena crystal.',
		 img: '/assets/img/1874-braun.jpg',
		 date: '1874',
		 copyrightOwner: null,
		 source: 'www.cathodique.net'
     });
     
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

