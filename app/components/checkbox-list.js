import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  checkedSet: computed('checked', function() {
    return new Set(this.checked);
  }),
  actions: {
    handleCheck(item, event) {
      let { checked } = event.target;

      if (checked) {
        this.checkedSet.add(item);
      } else {
        this.checkedSet.delete(item)
      }

      this.onCheck(Array.from(this.checkedSet));
    }
  }
});
