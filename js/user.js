var apiKey = require('./../.env').apiKey;

User = function() {

  User.prototype.getUserProfile = function(username, displayUserData, userFail) {
    if (apiKey === undefined) {
      $.get('https://api.github.com/users/' + username).then(function(response) {
        displayUserData(response.name, response.location, response.email, response.html_url, response.avatar_url);
      }).fail(function(error) {
        userFail(error.responseJSON.message);
      });
    } else {
      $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
        displayUserData(response.name, response.location, response.email, response.html_url, response.avatar_url);
      }).fail(function(error) {
        userFail(error.responseJSON.message);
      });
    }
  };

  User.prototype.getRepos = function(username, displayRepos, reposFail) {
    if (apiKey === undefined) {
      $.get('https://api.github.com/users/' + username + '/repos').then(function(response) {
        for (i = 0; i < response.length; i++) {
          displayRepos(response[i].name, response[i].language, moment(response[i].created_at).format('ll'), response[i].description, response[i].url);
        }
      }).fail(function(error) {
        reposFail(error.responseJSON.message);
      });
    } else {
      $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
        for (i = 0; i < response.length; i++) {
          displayRepos(response[i].name, response[i].language, moment(response[i].created_at).format('ll'), response[i].description, response[i].url);
        }
      }).fail(function(error) {
        reposFail(error.responseJSON.message);
      });
    }
  };
};

exports.userModule = User;
