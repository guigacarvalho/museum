
import Ember from 'ember';

// var osmUrl=;
// var osmAttrib='';
// var street_layer = 
// map = new L.Map('map',{
//                 center: initial_center,
//                 zoom: initial_zoom,
//                 layers: mapLayersList    
// });
  

export default Ember.ArrayController.extend({
  // zoom: 4,
  // center: L.latLng(37.414287, -122.077409),
  // layers: ,
  content: [{
      location: L.latLng(37.414287, -122.077409),
      title: 'Computer History Museum'
		},
		{
      location: L.latLng(37.414387, -122.077509),
      title: 'Test Gallery 1'
		}]
	// itemLayerClass: EmberLeaflet.MarkerLayer.extend(
	// 			    EmberLeaflet.DraggableMixin,
	// 			    EmberLeaflet.PopupMixin, {
	// 					  popupContentBinding: 'content.title'
	// 					})


      //Tooltip
  
  //     EmberLeaflet.MarkerLayer.extend(
		//     EmberLeaflet.DraggableMixin,
		//     EmberLeaflet.PopupMixin, {
		//   popupContentBinding: 'title'
		// })
  });
