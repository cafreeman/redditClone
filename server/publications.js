Meteor.publish('posts', function() {
  // return Posts.find({'owner': this.userId});
  return Posts.find({});
});

Meteor.publish('postDetail', function(postId) {
  return Posts.find({
    '_id': postId
  });
});

Meteor.publish('comments', function(postId) {
  return Comments.find({'postId': postId});
});
