// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

document.addEventListener('DOMContentLoaded', () => {
    if ($(window).width() > 768) {

        Stickyfill.forceSticky()
        Stickyfill.add(document.querySelectorAll('[data-sticky]'));
    };

    AOS.init({
        duration: 1200,
    });


})
