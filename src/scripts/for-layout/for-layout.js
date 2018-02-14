'use strict';

function accordion() {

    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
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
    }

    var accordion = new Accordion($('#accordion'), false);

}
accordion();


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