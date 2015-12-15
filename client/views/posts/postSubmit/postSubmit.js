Template.postSubmit.events({
  'submit #submit-post-form': function(e) {
    e.preventDefault();
    let post = e.target;
    if (Posts.findOne({url: post.postUrl.value})) {
      alert('This link has already been posted!');
    } else {
      Meteor.callPromise('getPromise', post.postUrl.value)
        .then(result => $(result).filter('title').text())
        .then(title => {
          let newPostId = Posts.insert({
            url: post.postUrl.value,
            description: title
          });
          FlowRouter.go('postDetail', { postId: newPostId });
        });
    }
  }
});
