'use strict';

$(window).on("load", function () {

    var anim = new TimelineMax();

    $(document).ready(function () {

        var body = $('body');
        body.removeClass('page-load');
    });

    anim.fromTo('.main-page', 0.5, { opacity: 0 }, { opacity: 1 }).fromTo('.header__author', 0.5, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).fromTo('.soc-net__mail-link', 0.5, { y: 10, opacity: 0 }, { y: 0, opacity: 1 }, 0.1).staggerFromTo('.soc-net__item', 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 0.1).staggerFromTo('.pages__division', 0.5, { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, 0.1);
});