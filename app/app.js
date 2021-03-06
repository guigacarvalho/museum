import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'my-new-app', // TODO: loaded via config
  Resolver: Resolver
});
App.MarkerCollectionLayer =
  EmberLeaflet.MarkerCollectionLayer.extend({
    contentBinding: 'controller'});

L.Icon.Default.imagePath = '/assets/img';

loadInitializers(App, 'my-new-app');

export default App;