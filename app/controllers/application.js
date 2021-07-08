import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    let teamMembers = [
      { name: 'Richard Hendrix' },
      { name: 'Jared Dunn' },
      { name: 'Dinesh' },
      { name: 'Gilfoyle' },
      { name: 'Monica' },
      { name: 'Jian-Yang' },
      { name: 'Gavin Belson' }
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
