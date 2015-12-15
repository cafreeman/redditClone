Template.commentSubmit.events({
  'submit #submit-comment-form': function(e, t) {
    e.preventDefault();
    let comment = e.target.commentBody.value;
    if (comment) {
      Comments.insert({
        postId: FlowRouter.getParam('postId'),
        commentBody: comment
      });
    } else {
      alert("You must type an actual comment!");
    }
  }
});
