import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    let teamMembers = [
      { name: 'Richard' },
      { name: 'Dinesh' },
      { name: 'Gilfoyl' },
      { name: 'Monica' }
    ];

    this.setProperties({
      teamMembers,
      checkedTeamMembers: [ teamMembers[1] ]
    });
  },
  actions: {
    handleCheck(checkedTeamMembers) {
      console.log(checkedTeamMembers);
      this.setProperties({ checkedTeamMembers });
    }
  }
});
