$(document).ready(function () {
    const mMenuBtn = $('.m-menu-btn');
    const mMenu = $('.m-menu');
    const tab = $('.tab');

    mMenuBtn.on('click', function() {
        mMenu.toggleClass('active');
        $('.menu-line').toggleClass('menu-line-active');
        $('body').toggleClass('no-scroll');
    });

    tab.on('click', function() {
        tab.removeClass('cast-active');
        $(this).toggleClass('cast-active');
        let tabsAttribute = $(this).attr('data-target');
        $('.tabs-content').removeClass('visible');
        $(tabsAttribute).toggleClass('visible');
    });

    const mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 4
            },
            576: {
                slidesPerView:2
            },
            320: {
                slidesPerView: 1,
                slidesOffsetAfter: 50,
                navigation: {
                    nextEl: ".button-next",
                }
            }
        }
      })
});