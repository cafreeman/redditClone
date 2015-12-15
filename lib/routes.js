FlowRouter.route('/', {
  name: 'main',
  action() {
    FlowRouter.go('postsList');
    BlazeLayout.render('mainLayout', { content: 'postsList' });
  }
});

FlowRouter.route('/posts', {
  name: 'postsList',
  action() {
    BlazeLayout.render('mainLayout', { content: 'postsList' });
  }
});

FlowRouter.route('/submit-post', {
  name: 'postSubmit',
  action() {
    BlazeLayout.render('mainLayout', { content: 'postSubmit' });
  }
});

FlowRouter.route('/posts/:postId', {
  name: 'postDetail',
  action() {
    BlazeLayout.render('mainLayout', { content: 'postDetail'});
  }
});
