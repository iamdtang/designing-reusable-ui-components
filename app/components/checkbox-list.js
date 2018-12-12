import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  checkedItemsSet: computed('checked', function() {
    return new Set(this.checked);
  }),
  actions: {
    handleCheck(item, event) {
      let { checked } = event.target;

      // console.log(item, checked);

      if (checked) {
        this.checkedItemsSet.add(item);
      } else {
        this.checkedItemsSet.delete(item)
      }

      this.onCheck(Array.from(this.checkedItemsSet));
    }
  }
});
