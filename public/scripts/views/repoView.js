'use strict';

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $work = $('#work'); // Best practice: Cache the DOM query if it's used more than once.

    $work.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE TODO: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
  function render(repo) {
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);

    return template(repo);
  }

  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about ul').append(
      repos.with('name').map(render) // here I can replace 'name' to filter by a different property 
    );
  };

  module.repoView = repoView;
})(window);