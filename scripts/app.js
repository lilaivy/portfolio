'use strict';
var projects = [];

function Projects (ivy_projects) {
  this.title = ivy_projects.title;
  this.date = ivy_projects.date;
  this.screenshot = ivy_projects.screenshot;
  this.link = ivy_projects.link;
  this.goal = ivy_projects.goal;
  this.type = ivy_projects.type;
  this.technology = ivy_projects.technology;
};

Projects.prototype.toHtml =function(){
  var $newProject = $('div.total_presentation').clone;
  $newProject.find('.project_date').text(this.date);
  $newProject.find('h2.project_title').text(this.title);
  $newProject.removeClass('total_presentation'); 
  return $newProject;
};

// Push my projects into an array
ivy_projects.forEach(function(ele) {
  projects.push(new Projects(ele));
});

projects.forEach(function(project){
  $('#project_intro').append(project.toHtml());
});