Template.postsList.onCreated(function() {
  this.autorun(() => {
    this.subscribe('posts');
  });
});

Template.postsList.helpers({
  posts() {
    return Posts.find({}, {sort: { votes: -1 }});
  }
});
