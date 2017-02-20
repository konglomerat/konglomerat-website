$(document).ready(function(){
    $('.main-menu-toggle').click(function () {
        $('body').toggleClass('application--main-menu-is-open');
    });

    $('.main-menu-close').click(function () {
        $('body').removeClass('application--main-menu-is-open');
    });

    $('.main-menu__backdrop').click(function () {
        $('body').removeClass('application--main-menu-is-open');
    });

});