$(document).ready(function () {

    let gnb = $('.header_bottom >.gnb > ul > li > a'); // 메인메뉴

    $(fa - times).click(function () {
        
        $(this).next().slideToggle();

        $(this).find('i').toggleClass('act');

        $(this).toggleClass('act01');
    });

});

