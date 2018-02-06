import Object from '@ember/object';
import { copy } from '@ember/object/internals';

export default Object.create({
  rows: [
    { id: 0, user: "Austin", text: "This is a comment" }
  ],

  comments() {
    return copy(this.rows);
  },

  addComment(comment) {
    this.rows.push(comment);
  }
});
