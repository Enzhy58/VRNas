$(function () {

    $('.menu__open').on('click', function () {
        $('.menu__inner').toggleClass('menu__inner--active');
    });

    $('.menu__open').on('click', function () {
        $('.wrapper').toggleClass('wrapper__fixed');
    });
    
    $('.accordion__header').on('click', function (e) {
        e.preventDefault();
        $('.accordion__header').removeClass('accordion__header--active');
        $(this).addClass('accordion__header--active');

        $('.accordion__body').removeClass('accordion__body--active');
        $($(this).attr('href')).addClass('accordion__body--active');
    });

    $('.articles__popular-list').slick({
        dots: true,
        arrows: false
    });

});
