// import App from 'ember';
export default EmberLeaflet.MapView.extend({
	 	childLayers: [
		  EmberLeaflet.TileLayer.extend({
		  	tileUrl: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			options: {
						attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}}),
		  EmberLeaflet.MarkerCollectionLayer.extend({
		  	contentBinding: 'controller',
		  	itemLayerClass: EmberLeaflet.MarkerLayer.extend(
		  		EmberLeaflet.PopupMixin, {
					  popupContentBinding: 'content.title'
					}
			    )
			  })
		],
		  center: L.latLng(37.414287, -122.077409),
		  zoom:18

		// didCreateLayer: function() {
		// 	this._super();
		//  this._layer.locate({setView: true, watch: true}) /* This will return map so you can do chaining */
	 //        .on('locationfound', function(e){
	 //            var marker = L.marker([e.latitude, e.longitude]).bindPopup('Your ass is here :)');
	 //            var circle = L.circle([e.latitude, e.longitude], e.accuracy/2, {
	 //                weight: 1,
	 //                color: 'blue',
	 //                fillColor: '#cacaca',
	 //                fillOpacity: 0.2
	 //            });
	 //            console.log("found ya!");
	 //            this.addLayer(marker);
	 //            this.addLayer(circle);
	 //        })
	 //       .on('locationerror', function(e){
	 //            console.log(e);
	 //            alert("Location access denied.");
	 //        });
	 //      console.log(L.control);

	 //      // L.control().locate().addTo(this._layer);
	 //    }	
  });
