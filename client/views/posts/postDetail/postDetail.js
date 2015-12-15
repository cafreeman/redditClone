Template.postDetail.onCreated(function() {
  this.autorun(() => {
    let postId = FlowRouter.getParam('postId');
    this.subscribe('postDetail', postId);
  });
});

Template.postDetail.helpers({
  post() {
    let postId = FlowRouter.getParam('postId');
    let post = Posts.findOne({_id: postId}) || {};
    return post;
  }
});
