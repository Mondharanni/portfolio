$(function(){
    //WOW plugin init
    new WOW().init();

    //parallax effect for banner
    (function() {
        var posY;
        var image = document.getElementById('parallax');;
        function paralax() {
            posY = window.pageYOffset;
            image.style.top = posY * 0.9 + 'px';
        }
        window.addEventListener('scroll', paralax);
    })();
});



          $(document).ready(function() {
            var passed_service = false;
            var passed_clients = false;
            $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(event){
                if($(window).scrollTop() >= ($("#skills").height()*4)){
                    if(!passed_service){

        /* animate skill bars */
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
              width:jQuery(this).attr('data-percent')
            },2500);
          });


                    }
                }
            });
        });