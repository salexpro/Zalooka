/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.dropdown.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.tabs.min';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.slider.min';
@codekit-prepend quiet '../../node_modules/owl.carousel/dist/owl.carousel.min';
*/

$(document).foundation();

$('#countries').on('hide.zf.dropdown', function() {
    if ($(this).is(':hover') || $('.dropdown-pane--cities.is-open').is(':hover')) {
        $(this).addClass('is-open');
    }
})

if($('.lmenu').length){

    // Left menu scrolling
    $(window).scroll(function() {
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

    $('.lmenu_lvl_two').hover(() => {
        if(!$('.lmenu_lvl_two a[data-menutwo]:hover').length){
            $('.lmenu_lvl_two a').removeClass('hover');
            $('.lmenu_lvl_three, .lmenu_lvl_three .lmenu_content').removeClass('opened');
        }
    }, () => {
        if(!$('.lmenu_lvl_three').is(':hover')){
            $('.lmenu a').removeClass('hover');
            $('.lmenu_lvl_two, .lmenu_lvl_two .menu').removeClass('opened');
        }
    });

    $('.lmenu_lvl_two a[data-menutwo]').hover(function() {
        $('.lmenu_lvl_two a').removeClass('hover');
        $('.lmenu_lvl_three .lmenu_content').removeClass('opened');

        $(this).addClass('hover');
        $('.lmenu_lvl_three').addClass('opened');
        $('#' + $(this).data('menutwo')).addClass('opened');
    }, () => {
        if(!$('.lmenu_lvl_three').is(':hover')){
            $('.lmenu_lvl_two a').removeClass('hover');
            $('.lmenu_lvl_three, .lmenu_lvl_three .lmenu_content').removeClass('opened');
        }
    });

    $('.lmenu_lvl_three').hover(() => {

    }, () => {
        if(!$('.lmenu_lvl_two').is(':hover')){
            $('.lmenu a, .lmenu_lvl_two a').removeClass('hover');
            $('.lmenu_lvl_two, .lmenu_lvl_two .menu, .lmenu_lvl_three, .lmenu_lvl_three .lmenu_content').removeClass('opened');
        }
    });

    $('.lmenu_lvl_three .close-button').click(() => {
        $('.lmenu a, .lmenu_lvl_two a').removeClass('hover');
        $('.lmenu_lvl_two, .lmenu_lvl_two .menu, .lmenu_lvl_three, .lmenu_lvl_three .lmenu_content').removeClass('opened');
    });
}

if ($('.owl-carousel').length) {
    $('.owl-carousel').owlCarousel({
        // margin:110,
        items: 3,
        nav: true,
        navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],
        lazyLoad:true,
        margin: 35
    });
}
