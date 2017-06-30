var User = require('./../js/user.js').userModule;

var displayUserData = function(name, location, email, htmlUrl, avatar_url) {
  var img = document.createElement("img");
  img.src = avatar_url;
  $('#profile-results').append('<div class="col-sm-2">Name: ' + name + '</div><div class="col-sm-2">Location: ' + location + '</div><div class="col-sm-3">Email: ' + email + ': ' + htmlUrl + '</div>');
  $('#profile-results').append(img);
};

var displayRepos = function(name, language, created, description, url) {
  $('#repo-results').append('<hr><ul><span id="name">' + name + ' | ' + language + '</span><br><span id="creation"> Created: ' + created + '</span><br> Description: <span id="descriptive">' + description + '</span><br><span id="linker">' + url + '</span></ul><hr>');
};

var userFail = function(message) {
  $('#profile-results').append('Sorry! User ' + message);
};

var reposFail = function(message) {
  $('#repo-results').append('Hmm, looks like are no repos here.');
};

$(document).ready(function() {
  $('#user-search-form').submit(function(event){
    event.preventDefault();
    $("#profile-results").html("");
    $("#repo-results").html("");
    var username = $('#username').val();
    var newUser = new User();
    newUser.getUserProfile(username, displayUserData, userFail);
    newUser.getRepos(username, displayRepos, reposFail);
  });
});
