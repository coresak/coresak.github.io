$(document).ready((function(){AOS.init({duration:300,offset:120,delay:100,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top top"}),$(".counter").counterUp({delay:30,time:1500}),$(".nav__dots-btn").click((function(){$(this).toggleClass("open"),$(".header__list").toggleClass("open")})),$(".footer__socials").socialLikes()}));