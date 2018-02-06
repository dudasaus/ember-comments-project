import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 0,
      user: 'Austin',
      text: 'This is a comment!'
    }, {
      id: 1,
      user: 'Bob',
      text: 'This is another comment!'
    }];
  }
});
