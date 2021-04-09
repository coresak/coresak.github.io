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

$('nav ul li:nth-child(4)').on('click', function () {
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