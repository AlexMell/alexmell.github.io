'use strict';

$('.js-accordion-button').on('click', function () {
    $(this).find('.js-accordion-descr').toggleClass('is-active');
    $(this).siblings().find('.js-accordion-descr').removeClass('is-active');
});

function followType() {

    var $head = $('.js-bear-head');
    var $input = $('.js-follow-input');

    $input.on('keyup keypress change blur keydown', function () {

        var maxLength = $input.attr('maxlength');

        var value = $(this).val();
        var valueLength = value.length;
        var setRotate = maxLength - valueLength * 2.2;

        valueLength >= maxLength ? false : $head.css('transform', 'rotate(' + setRotate + 'deg)');
    });
}
followType();