$('.js-accordion-button').on('click', function () {
    $(this).find('.js-accordion-descr').toggleClass('is-active');
    $(this).siblings().find('.js-accordion-descr').removeClass('is-active');
});

function followType () {

    let $head = $('.js-bear-head');
    let $input = $('.js-follow-input');

    $input.on('keyup keypress change blur keydown', function () {

        const maxLength = $input.attr('maxlength');

        let value = $(this).val();
        let valueLength = value.length;
        let setRotate = maxLength - valueLength*2.2;

        valueLength >= maxLength ? false : $head.css('transform','rotate('+ setRotate +'deg)');

    });
}
followType();