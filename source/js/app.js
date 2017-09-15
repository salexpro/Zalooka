/* 
@codekit-prepend '../../bower_components/jquery/dist/jquery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.core.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.box.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.keyboard.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.triggers.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.util.motion.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.dropdown.min.js';
@codekit-prepend '../../bower_components/foundation-sites/dist/js/plugins/foundation.reveal.min.js';
*/

$(document).foundation();

if($('.lmenu').length){

    // Left menu scrolling
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            $('.lmenu').addClass('fixed');
        } else {
            $('.lmenu').removeClass('fixed');
        }
    });

    // Left menu levels
    $('.lmenu a[data-menu]').hover(function(){
        $(this).addClass('hover');
        $('.lmenu_lvl_two').addClass('opened');
        $('#' + $(this).data('menu')).addClass('opened');
    }, function(){
        if(!$('.lmenu_lvl_two').is(':hover')){
            $('.lmenu a').removeClass('hover');
            $('.lmenu_lvl_two, .lmenu_lvl_two .menu').removeClass('opened');
        }
    });

    $('.lmenu_lvl_two').hover(function(){
        if(!$('.lmenu_lvl_two a[data-menutwo]:hover').length){
            $('.lmenu_lvl_two a').removeClass('hover');
            $('.lmenu_lvl_three, .lmenu_lvl_three .lmenu_content').removeClass('opened');
        }
    }, function(){
        if(!$('.lmenu_lvl_three').is(':hover')){
            $('.lmenu a').removeClass('hover');
            $('.lmenu_lvl_two, .lmenu_lvl_two .menu').removeClass('opened');
        }
    });

    $('.lmenu_lvl_two a[data-menutwo]').hover(function(){
        $('.lmenu_lvl_two a').removeClass('hover');
        $('.lmenu_lvl_three .lmenu_content').removeClass('opened');

        $(this).addClass('hover');
        $('.lmenu_lvl_three').addClass('opened');
        $('#' + $(this).data('menutwo')).addClass('opened');
    }, function(){
        if(!$('.lmenu_lvl_three').is(':hover')){
            $('.lmenu_lvl_two a').removeClass('hover');
            $('.lmenu_lvl_three, .lmenu_lvl_three .lmenu_content').removeClass('opened');
        }
    });

    $('.lmenu_lvl_three').hover(function(){

    }, function(){
        if(!$('.lmenu_lvl_two').is(':hover')){
            $('.lmenu a, .lmenu_lvl_two a').removeClass('hover');
            $('.lmenu_lvl_two, .lmenu_lvl_two .menu, .lmenu_lvl_three, .lmenu_lvl_three .lmenu_content').removeClass('opened');
        }
    });

    $('.lmenu_lvl_three .close-button').click(function(){
        $('.lmenu a, .lmenu_lvl_two a').removeClass('hover');
        $('.lmenu_lvl_two, .lmenu_lvl_two .menu, .lmenu_lvl_three, .lmenu_lvl_three .lmenu_content').removeClass('opened');
    });
}