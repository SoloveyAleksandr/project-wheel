$(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false
                }
            }
        ]
    });


})