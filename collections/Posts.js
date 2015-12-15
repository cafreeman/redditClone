Posts = new Mongo.Collection('posts');

Posts.allow({
  insert(userId) {
    return !!userId;
  },
  update(userId) {
    return !!userId;
  }
});

PostSchema = new SimpleSchema({
  url: {
    type: String,
    label: 'URL'
  },
  description: {
    type: String,
    label: 'Description',
    optional: true
  },
  owner: {
    type: String,
    label: 'Owner',
    autoValue: function() {
      return this.userId;
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    }
  },
  upVoters: {
    type: [String],
    label: 'Up Voters',
    defaultValue: [this.userId]
  },
  downVoters: {
    type: [String],
    label: 'Down Voters',
    defaultValue: []
  },
  votes: {
    type: Number,
    label: 'Total Votes',
    defaultValue: 1
  }
});

Posts.attachSchema(PostSchema);
