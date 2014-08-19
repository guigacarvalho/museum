import Ember from 'ember';

export default Ember.Route.extend({
 model: function() {
    //  this.store.push('gallery',{
 		 // 	id:1,
 			// title:'Revolution: The Story of How Computers Came to Be',
 	 	// 	desc: 'The story of computing is epic. It’s driven by the human passion for tinkering, inventing and solving difficult problems where accidents and luck can be as important as brilliant engineering. Explore the revolution that has changed our world...',
 	 	// 	img:'/assets/img/ex-revolution.jpg'});
     

	 // var gal = this.store.createRecord('gallery', {
  //           id: 2,
  //           title: "The Silicon Engine: A Timeline of Semiconductors in Computing History",
		// 	desc: 'Microelectronic silicon computer “chips” have grown in capability from a single transistor in the 1950s to hundreds of millions of transistors per chip on today’s microprocessor and memory devices. From the first documented semiconductor effect in 1833 to the transition from transistors to integrated circuits in the 1960s and 70s, this website explores key milestones in the development of these extraordinary engines that power the computing and communications revolution of the information age.',
  //           img: "/assets/img/1.jpg"
  //       });gal.save();
  //    var gal = this.store.createRecord('gallery', {
  //           id: 3,
  //           title: "The Babbage Engine: The Story of the First Computer Pioneer",
		// 	desc: 'Charles Babbage (1791-1871), computer pioneer, designed the first automatic computing engines. He invented computers but failed to build them. The first complete Babbage Engine was completed in London in 2002, 153 years after it was designed. Difference Engine No. 2, built faithfully to the original drawings, consists of 8,000 parts, weighs five tons, and measures 11 feet long. We invite you to learn more about this extraordinary object, its designer Charles Babbage and the team of people who undertook to build it. Discover the wonder of a future already passed. A sight no Victorian ever saw. An identical Engine completed in March 2008 is on display at the Computer History Museum in Mountain View, California.',
  //           img: "/assets/img/2.jpg"
  //       });gal.save();
  //    var gal = this.store.createRecord('gallery',{
		//  	id:4,
		//  	title:'Mastering the Game: A History of Computer Chess',
	 // 	 	desc: 'The history of computer chess is a five-decade long quest to solve a difficult intellectual problem. The story starts in the earliest days of computing and reflects the general advances in hardware and software over this period. This on-line exhibition contains documents, images, artifacts, oral histories, moving images and software related to computer chess from 1945 to 1997.',
	 // 	 	img:'/assets/img/3.jpg'});gal.save();
	 // var gal = this.store.createRecord('gallery',{
  //  		 	id:5,
  //  			title:'PDP-1 Restoration',
  //  	 		desc: 'The launch of Digital Equipment Corporation’s PDP-1 (Programmed Data Processor-1) computer in 1959 marked a radical shift in the philosophy of computer design. This on-line exhibition covers the history of this groundbreaking computer and the Computer History Museum’s recent restoration of a PDP-1 to working order.',
  //  	 		img:'/assets/img/ex-pdp1.jpg'});gal.save();
  //   var gal = this.store.createRecord('gallery',{
		//  	id:6,
		// 	title:'Selling the Computers Revolution',
	 // 		desc: 'The brochures selected here (just a fraction of the Museum’s holdings in this area) show some of the more important technologies, companies, and applications in computing from 1948 to 1988. This covers the period from mechanical and relay-based computers to those based on the microprocessor—a remarkable transition that occurred over only 25 years. We hope you enjoy browsing through these historical documents.',
	 // 		img:'/assets/img/ex-sellingcomputer.jpg'});gal.save();
  //   var gal = this.store.createRecord('gallery',{
		//  	id:7,
		// 	title:'Internet History',
	 // 		desc: '"In the Beginning, ARPA created the ARPANET. And the ARPANET was without form and void. And darkness was upon the deep. And the spirit of ARPA moved upon the face of the network and ARPA said, \'Let there be a protocol,\' and there was a protocol. And ARPA saw that it was good. And ARPA said, \'Let there be more protocols,\' and it was so. And ARPA saw that it was good.And ARPA said, \'Let there be more networks,\' and it was so.\" -- Danny Cohen',
	 // 		img:'/assets/img/ex-internethistory.jpg'});gal.save();
  //   var gal = this.store.createRecord('gallery',{
		//  	id:8,
		// 	title:'Hall of Fellows: Industry Leaders of the Information Age',
	 // 		desc: '',
	 // 		img:'/assets/img/4.jpg'});gal.save();

     return this.store.find('gallery');
 } 
});

