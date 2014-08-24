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
  });
