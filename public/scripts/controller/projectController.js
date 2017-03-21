'use strict';
Projects.fetchAll();

(function(module){
    const projectController = {};

    projectController.showWorkContent = function(){
        $('.container').hide();
        $('#work').fadeIn('slow');
         $('#render_template').fadeIn('slow');
    }
    module.projectController = projectController;
})(window);