// Burger menu
'use strict';

$('.js-burger').on('click', function () {
    $(this).toggleClass('is__open');
});

// Arrow
$('.js-arrow').on('click', function () {
    $(this).toggleClass('is__active');
});