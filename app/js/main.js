$(function () {

    $('.menu__burger').on('click', function () {
        $('.menu__inner').toggleClass('menu__inner--active');
    });

    $('.menu__burger').on('click', function () {
        $('.wrapper').toggleClass('wrapper__fixed');
    });

    $(window).scroll(function () {
        var target = $(this).scrollTop();
        if (target == 0) {
          $('.menu').removeClass('menu--scroll');
        } else {
          $('.menu').addClass('menu--scroll');
        }
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
