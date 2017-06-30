var User = require('./../js/user.js').userModule;

var displayUserData = function(name, location, email, htmlUrl) {
  $('#profile-results').append('<div class="col-sm-4">Name: ' + name + '</div><div class="col-sm-4">Location: ' + location + '</div><div class="col-sm-4">Email: ' + email + '</div><br>' + htmlUrl + '<hr>');
  $('#profile-results').append('<div class="col-sm-4">' + name + '</div><div class="col-sm-4">' + location + '</div><div class="col-sm-4">' + email + '</div><br>' + htmlUrl + '<hr>');
};
//<<<<<<< HEAD
//=======
//>>>>>>> 880b25a77fe254ea233b284d8cca71018b986987;

var displayRepos = function(name, language, created, description, url) {
  $('#repo-results').append('<li><span id="name">' + name + ' | ' + language + '</span><br> Created ' + created + '<br>' + description + '<br>' + url + '</li>');
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
