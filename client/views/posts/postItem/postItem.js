Template.postItem.helpers({
  pathForPost() {
    let params = {
      postId: this._id
    };
    let route = 'postDetail';
    return FlowRouter.path(route, params);
  },
  votes() {
    return this.votes;
  }
});

Template.postItem.events({
  'click .upvote': function() {
    let id = this._id;
    let currentPost = Posts.findOne({_id: id});
    if (_.contains(currentPost.upVoters, Meteor.userId())) {
    } else {
      Posts.update({_id: id}, {
        $inc: { votes: 1 },
        $addToSet: { upVoters: Meteor.userId() },
        $pull: { downVoters: Meteor.userId() }
      });
    }
  },
  'click .downvote': function() {
    let id = this._id;
    let currentPost = Posts.findOne({_id: id});
    if (_.contains(currentPost.downVoters, Meteor.userId())) {
    } else {
      Posts.update({_id: id}, {
        $inc: { votes: -1},
        $addToSet: { downVoters: Meteor.userId() },
        $pull: { upVoters: Meteor.userId() }
      });
    }
  }
});
