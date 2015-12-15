Template.commentsList.onCreated(function() {
  this.autorun(() => {
    let postId = FlowRouter.getParam('postId');
    this.subscribe('comments', postId);
  });
});

Template.commentsList.helpers({
  comments() {
    let postId = FlowRouter.getParam('postId');
    return Comments.find({postId: postId}, {sort: {submitted: 1}});
  }
});
