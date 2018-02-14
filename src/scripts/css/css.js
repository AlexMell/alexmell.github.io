// Burger menu
$('.js-burger').on('click', function () {
    $(this).toggleClass('is__open');
});

// Arrow
$('.js-arrow').on('click', function () {
    $(this).toggleClass('is__active');
});

// Dropdown-arrow
$('.js-arrow-dropdown').on('click', function () {
    $(this).toggleClass('is-active');
});

function initMoveInnerBtn() {
    if ($(".js-btn-moving").length) {
        let mouseX = 0,
            mouseY = 0,
            limitX = $('.btn-prev').width() - 20,
            limitY = $('.btn-prev').height() - 20;
        $(window).mousemove(function(e){
            let offset = $('.btn-prev').offset();
            mouseX = Math.min(e.pageX - offset.left, limitX);
            mouseY = Math.min(e.pageY - offset.top, limitY);
            if (mouseX < 0) mouseX = 0;
            if (mouseY < 0) mouseY = 0;
        });

        // cache the selector
        let follower = $(".js-btn-moving");
        let xp = 0, yp = 0;
        let loop = setInterval(function(){
            // change 12 to alter damping higher is slower
            xp += (mouseX - xp) / 12;
            yp += (mouseY - yp) / 12;
            follower.css({left:xp, top:yp});
        }, 30);
    }
}
initMoveInnerBtn();


