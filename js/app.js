// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

document.addEventListener('DOMContentLoaded', () => {

    if ($(window).width() > 768) {

        Stickyfill.forceSticky()
        Stickyfill.add(document.querySelectorAll('[data-sticky]'));
    };


    let wHeight = $(window).height();

    if ($(window).width() < 768) {
        function scroll() {
            $('.container__clicker').click(function () {

                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top + 65
                }, 600);

                return false;
            });
        }

        scroll();
    } else  {
        //
    }
    
    AOS.init({
        duration: 1200,
    });

    function scroll() {
        $('.container__clicker').click(function () {

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 600);

            return false;
        });
    }

    scroll();

    $(".left svg").hover(
        function () {
            $(".left p").css("opacity", "1");
            $(".left h4").css("opacity", "1");
        }, function () {
            $(".left p").css("opacity", "0");
            $(".left h4").css("opacity", "0");
        });
})
