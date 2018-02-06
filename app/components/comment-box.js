import Component from '@ember/component';

export default Component.extend({
  text: '',
  actions: {
    onSubmit() {
      const text = this.get('text');
      const user = 'Username';
      const comment = { user, text };
      this.get('addComment')(comment);
      this.set('text', '');
    }
  }
});
