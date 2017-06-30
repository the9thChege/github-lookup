var apiKey = require('./../.env').apiKey;

User = function(){
};

User.prototype.getUserProfile = function(username, displayUserData, userFail) {
  if (apiKey === undefined) {
    $.get('https://api.github.com/users/' + username).then(function(response){
      displayUserData(response.name, response.location, response.email, response.html_url);
    }).fail(function(error){
      userFail(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      displayUserData(response.name, response.location, response.email, response.html_url);
    }).fail(function(error){
      userFail(error.responseJSON.message);
    });
  }
};


User.prototype.getRepos = function(username, displayRepos, reposFail) {
  if (apiKey === undefined) {
    $.get('https://api.github.com/users/' + username + '/repos').then(function(response){
      for(i=0; i<response.length; i++) {
        displayRepos(response[i].name, response[i].language, moment(response[i].created_at).format('ll'), response[i].description, response[i].url);
      }
    }).fail(function(error){
      reposFail(error.responseJSON.message);
    });
  } else {
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
      for(i=0; i<response.length; i++) {
        displayRepos(response[i].name, response[i].language, moment(response[i].created_at).format('ll'), response[i].description, response[i].url);
      }
    }).fail(function(error){
      reposFail(error.responseJSON.message);
    });
  }
};

// var userData = [name, location, email, htmlUrl];
// function notNull() {
//   for (var i=0; i < userData.length; i++) {
//     if (userData[i] === null) {
//       userData[i] = "Not Found";
//       userData.splice([i], 1, userData[i]);
//     }
//   }
//   return userData;
// };
// console.log(notNull(userData));

exports.userModule = User;
