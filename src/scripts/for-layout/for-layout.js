$('.js-accordion-button').on('click', function () {
    $(this).find('.js-accordion-descr').toggleClass('is-active');
    $(this).siblings().find('.js-accordion-descr').removeClass('is-active');
});