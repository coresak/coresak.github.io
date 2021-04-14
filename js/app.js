// document ready functions
$(document).ready(function () {
    $("body").children().each(function () {
        $(this).html($(this).html().replace(/&#8232;/g, " "));
    });

    $('.burger--button').on('click', function () {
        $('.burger').addClass('show');
    });

    $('.burger svg').on('click', function () {
        $('.burger').removeClass('show');
    });

    // slider
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper('.swiper-mobile', {
        slidesPerView: 'auto',
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
    });

    // mousein - hover
    $('.left').on({
        'mouseenter': () => {
            $('.left').next('.container--content_buttons-item-card').addClass('show');
        },

        'mouseleave': () => {
            $('.left').next('.container--content_buttons-item-card').removeClass('show');
        }
    });

    $('.right').on({
        'mouseenter': () => {
            $('.right').next('.container--content_buttons-item-card').addClass('show');
        },

        'mouseleave': () => {
            $('.right').next('.container--content_buttons-item-card').removeClass('show');
        }
    });

    $('.burger--button').on('click', function () {
        $('.burger').addClass('show');
    });

    $('.burger svg').on('click', function () {
        $('.burger').removeClass('show');
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $('nav').addClass('scroll');
    } else {
        $('nav').removeClass('scroll');
    }
})