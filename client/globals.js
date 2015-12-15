Template.registerHelper('formatDate', function(date) {
  return moment(date).calendar();
});
