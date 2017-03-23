'use strict';

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE


  function render(repo) {
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    return template(repo);
  }

  repoView.index = function() {
   

    
    $('#render_repo_template').append(
      repos.with('name').map(render) // here I can replace 'name' to filter by a different property 
    );
  };

  module.repoView = repoView;
})(window);