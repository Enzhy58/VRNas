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
          $('.header__wrapper').removeClass('header__wrapper--scroll');
        } else {
          $('.header__wrapper').addClass('header__wrapper--scroll');
        }
    });

    $('.accordion__header').on('click', function (e) {
        e.preventDefault();
        $('.accordion__header').removeClass('accordion__header--active');
        $(this).addClass('accordion__header--active');
    
        $('.accordion__body').removeClass('accordion__body--active');
        $($(this).attr('href')).addClass('accordion__body--active');
      });

});
  

$(window).on('load', function() {

    AOS.init({
        offset: 0,
        duration: 500,
        easing: 'ease-in-quad',
        delay: 100,
        once: 'true'
    });

    $('.articles__popular-list').slick({
        dots: true,
        arrows: false
    });

    
    AOS.refresh();

});

document.querySelectorAll('.accordion__header').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;

        if(content.style.maxHeight) {
            document.querySelectorAll('.accordion__body').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.accordion__body').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})

