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


// slider
(function ($) {
    $(window).on('load', function () {
        var amount = Math.max.apply(Math, $(".wrapper .item").map(function () {
            return $(this).outerWidth(true);
        }).get());

        $(".wrapper").mCustomScrollbar({
            axis: "x",
            theme: "inset",
            advanced: {
                autoExpandHorizontalScroll: true
            },
            scrollButtons: {
                enable: true,
                scrollType: "stepped"
            },
            keyboard: {scrollType: "stepped"},
            snapAmount: amount,
            mouseWheel: {scrollAmount: amount}
        });

    });
})(jQuery);

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
    document.getElementById('mCSB_1_container').positionLeft += 20;
};

