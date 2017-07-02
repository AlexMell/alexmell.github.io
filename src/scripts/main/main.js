var test = new TimelineMax();

test
    .fromTo('.header__author', 1, {x: -200, opacity: 0}, {x: 0, opacity: 1})
    .fromTo('.soc-net__mail-link', 1, {x: 300}, {x: 0}, 0.2)
    .staggerFromTo('.soc-net__item', 0.5, {opacity: 0, y: 10}, {opacity: 1, y:0}, 0.1)
    .staggerFromTo('.pages__division', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0}, 0.1);
