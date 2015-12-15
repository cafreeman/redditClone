function checkUrl(url) {
  let prefixes = ['http://', 'https://'];
  let prefixMatch = _.filter(prefixes, (prefix) => {
    return url.substr(0, prefix.length) === prefix;
  });
  return prefixMatch.length > 0 ? url : 'https://' + url;
}

Meteor.methods({
  getPromise(url) {
    let response = HTTP.get(checkUrl(url));
    return response.content;
  }
});
