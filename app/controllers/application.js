import Controller from '@ember/controller';

export default Controller.extend({
  teamMembers: [
    { name: 'Richard' },
    { name: 'Dinesh' },
    { name: 'Gilfoyl' },
    { name: 'Monica' }
  ],
  actions: {
    handleCheck(checkedTeamMembers) {
      console.log(checkedTeamMembers);
    }
  }
});
