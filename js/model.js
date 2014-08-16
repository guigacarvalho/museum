var App = Ember.Application.create();

App.ApplicationAdapter = EmberParseAdapter.Adapter.extend({
  applicationId: '0IiNyGbMOVGQd8stRLKcAl6VaEBvFdDgAnG6kKem',
  restApiId: 'bfPfvt4u87R824rtVdFcNSMqwRugq6zSwyevfzCV',
  javascriptId: 'IHaRSKSDKAUasEroXtYgEli6xvXIUrqadqRkOkvl '
});

App.Gallery = DS.ParseModel.extend({
    name: DS.attr('string'),
    desc: DS.attr('string')
  });

var donut = this.get('model');
console.log(donut);