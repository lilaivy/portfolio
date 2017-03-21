'use strict';

(function(module){
    const aboutController = {};

    aboutController.showAboutContent = function(){
        $('.container').hide();
         $('#render_template').hide();
        $('#about').fadeIn('slow');
    }
    module.aboutController = aboutController;
})(window);