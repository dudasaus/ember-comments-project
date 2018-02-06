import Route from '@ember/routing/route';
import db from '../utils/db';

export default Route.extend({
  model() {
    return db.comments();
  },

  actions: {
    addComment(comment) {
      db.addComment(comment);
      this.refresh();
    }
  }
});
