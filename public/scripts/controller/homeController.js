'use strict';

(function(module){
    const homeController = {};

    homeController.showHomeContent = function(){
        $('.container').hide();
         $('#render_template').hide();
        $('#home').fadeIn('slow');
    }
    module.homeController = homeController;
})(window);