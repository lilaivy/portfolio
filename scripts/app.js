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

//creating a variable for my function that pushes my projects into an array. I'm getting these projects from the results of my AJAX call. It should be an array of objects.
Projects.loadAll = function (project_data) {
  project_data.forEach(function(ele) {
    Projects.all.push(new Projects(ele));
  });

  //gave a name to my function that renders my projects to HTML
  var initIndexPage = function() {
    Projects.all.forEach(function(project){
      $('#render_template').append(project.toHtml());
    });

    mainNavHandler();
  };
};

Projects.fetchAll = function() {
  //This part of the function tells the program what to do if there is anything in LocalStorage.  I do no understand where rawData came from in the lab code. I assumed it was a property on localStorage
    if (localStorage.rawData) {
    //I'm parsing out the stringified JSON data so that it returns to me as an object and storing it on a variable called parsedData.  Again, I assumed that rawData was a property on localStorage, I am not clear about what rawData represents
      var parsedData = JSON.parse(localStorage.rawData);
    //I'm calling the function Projects.loadAll and passing it the paredData
      Projects.loadAll(parsedData);
    // initIndexPage();
    }else{
    //if there is nothing in LocalStorage, I'm making an ajax call to retrieve my source data from the server
      $.ajax({
      //this is the path to the source data.  I'm making the request here.
        url: 'data/source.json',
      //I'm using the GET method to make this request.
        method:'GET',
      //I'm writing a function with the parameter of data
        success: function(data){
        //I'm stringifying data and storing that stringified data on the variable rawDataJSON
          var rawDataJSON = JSON.stringify(data);
        //I'm setting the items on local storage and giving the variable rawData the valie of rawDataJSON
          localStorage.setItem('rawData', rawDataJSON);
        //Should I be calling loadAll here?
          Projects.loadAll(data);
          initIndexPage();

        }, 
        error: function(err){
          console.log('in error handler', err);
        }
      }); 
  };
