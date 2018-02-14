'use strict';

var test = new TimelineMax();

window.onload = function () {

    test.fromTo('.header__author', 1, { y: -200, opacity: 0 }, { y: 0, opacity: 1 }).fromTo('.soc-net__mail-link', 1, { y: 10, opacity: 0 }, { y: 0, opacity: 1 }, 0.2).staggerFromTo('.soc-net__item', 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 0.1).staggerFromTo('.pages__division', 0.5, { opacity: 0, x: -200 }, { opacity: 1, x: 0 }, 0.1);
};