Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    console.log('No users found. Inserting user "test" with password "password"');

    Accounts.createUser({
      username: 'test',
      password: 'password'
    });
  }

  if (Posts.find().count() === 0) {
    console.log('No posts found. Inserting fixture data!');

    let now = new Date().getTime();
    console.log(now);

    let user = Meteor.users.findOne({username: 'test'});

    let googleId = Posts.insert({
      url: 'http://www.google.com',
      description: 'Google\'s homepage',
      owner: user._id,
      upVoters: [user._id],
      downVoters: [],
      votes: 1,
      createdAt: new Date(now - 5 * 3600 * 1000)
    }, { validate: false, getAutoValues: false });

    Comments.insert({
      postId: googleId,
      userId: user._id,
      userName: user.username,
      commentBody: 'Google is excellent!',
      submitted: new Date(now - 3 * 3600 * 1000)
    }, { validate: false, getAutoValues: false });

    Comments.insert({
      postId: googleId,
      userId: user._id,
      userName: user.username,
      commentBody: 'It\'s ok, I guess',
      submitted: new Date(now - 2 * 3600 * 1000)
    }, { validate: false, getAutoValues: false });


    let meteorId = Posts.insert({
      url: 'http://www.meteor.com',
      description: 'Meteor\'s homepage',
      owner: user._id,
      upVoters: [user._id],
      downVoters: [],
      votes: 1,
      createdAt: new Date(now - 10 * 3600 * 1000)
    }, { validate: false, getAutoValues: false });

    Comments.insert({
      postId: meteorId,
      userId: user._id,
      userName: user.username,
      commentBody: 'Meteor is so cool!',
      submitted: new Date(now - 6 * 3600 * 1000)
    }, {validate: false, getAutoValues: false});

    Posts.insert({
      url: 'http://leveluptuts.com/',
      description: 'Level Up Tuts is a great site containing free tutorials on Meteor and other web topics',
      owner: user._id,
      upVoters: [user._id],
      downVoters: [],
      votes: 1,
      createdAt: new Date(now - 9 * 3600 * 1000)
    }, { validate: false, getAutoValues: false });
  }
});
