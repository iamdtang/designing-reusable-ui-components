import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('checkedItemsSet', new Set());
  },
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
