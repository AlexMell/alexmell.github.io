'use strict';

function accordion() {

    var Accordion = function Accordion(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');
        $this.find('.js-arrow-dropdown').toggleClass('is-active');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
            $el.find('.submenu').not($next).slideUp().parent().find('.js-arrow-dropdown.is-active').removeClass('is-active');
        };
    };

    var accordion = new Accordion($('#accordion'), false);
}
accordion();

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

function customPopup() {

    var $btnShowPopup = $('.js-open-popup');
    var $btnClosePopup = $('.js-close-popup');
    var $popup = $('.js-custom-popup');

    $btnShowPopup.on('click', function () {

        var targetPopup = $(this).attr('data-target');
        $("[data-popup=" + targetPopup + "]").addClass('is-active');
    });

    $btnClosePopup.on('click', function () {
        $(this).parents('.is-active').removeClass('is-active');
    });

    $popup.on('click', function (event) {
        if (!$(event.target).closest('.js-custom-popup-holder').length && !$(event.target).is('js-custom-popup')) {
            if ($popup.hasClass('is-active')) {
                $popup.removeClass('is-active');
            }
        }
    });
}
customPopup();