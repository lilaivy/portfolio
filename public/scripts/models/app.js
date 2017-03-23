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

Projects.prototype.toHtml =function() {  //move into repo view or do I make a 2nd template?
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

Projects.loadAll = function (project_data) {
  project_data.map(function(ele) {
    Projects.all.push(new Projects(ele));
  });

 
  Projects.all.map(function(p){
    $('#render_template').append(p.toHtml());
  });
  
};

Projects.fetchAll = function() {
  if (localStorage.rawData) {    //should I ditch this local storage code now?
    var parsedData = JSON.parse(localStorage.rawData);
    Projects.loadAll(parsedData);
  }else{
    $.ajax({
      url: 'data/source.json',
      method:'GET',
      success: function(data){
        localStorage.setItem('rawData', JSON.stringify(data));
        Projects.loadAll(data);
      }, 
      error: function(err){
        console.log('in error handler', err);
      }
    }); 
  }

};

   
