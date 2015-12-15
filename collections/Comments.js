Comments = new Mongo.Collection('comments');

Comments.allow({
  insert(userId) {
    return !!userId;
  }
});

CommentSchema = new SimpleSchema({
  postId: {
    type: String,
    label: 'Post ID'
  },
  userId: {
    type: String,
    label: 'User Id',
    autoValue: function() {
      return this.userId;
    }
  },
  userName: {
    type: String,
    label: 'Author',
    autoValue: function() {
      return Meteor.user().username;
    }
  },
  commentBody: {
    type: String,
    label: 'Comment Body'
  },
  submitted: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    }
  }
});

Comments.attachSchema(CommentSchema);
