import Component from '@ember/component';
import { inject as service} from '@ember/service';

export default Component.extend({
  text: '',
  session: service(),
  actions: {
    onSubmit() {
      const text = this.get('text');
      const user = this.get('session').get('user') ? this.get('session').get('user') : 'Anonymous';
      const comment = { user, text };
      this.get('addComment')(comment);
      this.set('text', '');
    }
  }
});
