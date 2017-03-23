'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax('https://api.github.com/users/lilaivy/repos', {
      method: 'GET',
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then((result) => {
      result.map(function(ele) {
        repos.all.push(ele)
        console.log(repos.all);
        callback();  //you must call the callback here so that data exists to load??
      })
    })
    .catch((err) => {console.error})

  }

  // this is a model method that filters the full collection for repos with a particular attribute..
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);