'use strict';

function Projects (ivy_projects) {
  this.title = ivy_projects.title;
  this.date = ivy_projects.date;
  this.screenshot = ivy_projects.screenshot;
  this.link = ivy_projects.link;
  this.goal = ivy_projects.goal;
  this.type = ivy_projects.type;
  this.technology = ivy_projects.technology;
};

Projects.all = [];

Projects.prototype.toHtml =function() {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

function mainNavHandler() {
  $('.main-nav').on('click', '.tab', function() {
    $('.container').hide();
    var clickedId = $(this).attr('data-tab-content');
    $('#' + clickedId).fadeIn(2000);
  });
  $('.main-nav .tab:first').click();
}

// Push my projects into an array
// Projects.All.loadAll = function () {
 data.forEach(function(ele) {
    Projects.all.push(new Projects(ele));
  });

  var initIndexPage = function() {
    Projects.all.forEach(function(project){
      $('#render_template').append(project.toHtml());
    });

    mainNavHandler();
  };
};

Projects.fetchAll = function() {
  if (localStorage.rawData) {
    var parsedData = JSON.parse(localStorage.rawData);
    Projects.loadAll(parsedData);
    // initIndexPage();
  } 
  else{
    $.ajax({
      url: 'data/source.json',
      method:'GET',
      success: function(data){
        var rawDataJSON = JSON.stringify(data);
        localStorage.setItem('rawData', rawDataJSON);
        Projects.fetchAll();
      }, 
      error: function(err){
        console.log('in error handler', err);
      }
    });
  }
};