'use strict';
Projects.fetchAll();

(function(module){
    const projectController = {};

    projectController.showWorkContent = function(){
        $('.container').hide();
        $('#work').fadeIn('slow');
         $('#render_template').fadeIn('slow');

//this is the callback function. we pass a view function into it so that the view will render after the data from Github is loaded.
    repos.requestRepos(repoView.index); 
    };
    module.projectController = projectController;
})(window);