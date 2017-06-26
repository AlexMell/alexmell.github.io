var test = new TimelineMax();

test
    .fromTo('.header__author', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1});
