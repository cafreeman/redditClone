FlowRouter.route('/', {
  name: 'main',
  action() {
    BlazeLayout.render('mainLayout', {content: 'home'});
  }
});
