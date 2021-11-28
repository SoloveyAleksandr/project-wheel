$(function () {
   /* $('a[href^="#"], a[data-href^="#"]').on('click', function (e) {
        e.preventDefault();
        var t = 500;
        var d = $(this).attr('data-href') ?
            $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(d).offset().top
        }, t);
    });*/

    
    $('.header__menu_search-btn').click(function(){
        $('.header__menu_search').toggleClass('active');
    });


    $('.gallery__pages_1').click(function(){
        $('.gallery__pages_item').removeClass('active'),
        $('.gallery__pages_1').addClass('active'),
        $('.gallery__pages').removeClass('active__page_1 active__page_2 active__page_3 active__page_4'),
        $('.gallery__pages').addClass('active__page_1'),
        $('.gallery__item').removeClass('active'),
        $('.gallery__item_1').addClass('active');
    });
    $('.gallery__pages_2').click(function(){
        $('.gallery__pages_item').removeClass('active'),
        $('.gallery__pages_2').addClass('active'),
        $('.gallery__pages').removeClass('active__page_1 active__page_2 active__page_3 active__page_4'),
        $('.gallery__pages').addClass('active__page_2'),
        $('.gallery__item').removeClass('active'),
        $('.gallery__item_2').addClass('active');
    });
    $('.gallery__pages_3').click(function(){
        $('.gallery__pages_item').removeClass('active'),
        $('.gallery__pages_3').addClass('active'),
        $('.gallery__pages').removeClass('active__page_1 active__page_2 active__page_3 active__page_4'),
        $('.gallery__pages').addClass('active__page_3'),
        $('.gallery__item').removeClass('active'),
        $('.gallery__item_3').addClass('active');
    });
    $('.gallery__pages_4').click(function(){
        $('.gallery__pages_item').removeClass('active'),
        $('.gallery__pages_4').addClass('active'),
        $('.gallery__pages').removeClass('active__page_1 active__page_2 active__page_3 active__page_4'),
        $('.gallery__pages').addClass('active__page_4'),
        $('.gallery__item').removeClass('active'),
        $('.gallery__item_4').addClass('active');
    });


})