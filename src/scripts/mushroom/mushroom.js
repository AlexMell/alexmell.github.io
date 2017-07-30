// Create first mushroom
'use strict';

window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function canvasApp() {

    // Create canvas
    let canvas = document.getElementById('mushroom'),
        context = canvas.getContext('2d');

    // Canvas full width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let HALF_WIDTH = canvas.width / 2;
    let HALF_HEIGHT = canvas.height / 2;
    let FULL_WIDTH = canvas.width;
    let FULL_HEIGHT = canvas.height;

    // Create default points
    let lineOne = {
        start: {
            x: 500,
            y: FULL_HEIGHT + 20,
        },
        cp1: {
            x: 825,
            y: 589
        },
        cp2: {
            x: 316,
            y: 919
        },
        end: {
            x: 550,
            y: 450,
        }
    };

    // Init range sliders with default points
    function init() {

        let $range = $("#range");
        let $range2 = $("#range2");
        let $range3 = $("#range3");
        let $range4 = $("#range4");

        $range.ionRangeSlider({
            type: "single",
            min: 0,
            max: 1000,
            hide_min_max: true,
            from: lineOne.cp1.x
        });
        
        $range2.ionRangeSlider({
            type: "single",
            min: 0,
            max: 1000,
            hide_min_max: true,
            from: lineOne.cp1.y
        });
        
        $range3.ionRangeSlider({
            type: "single",
            min: 0,
            max: 1000,
            hide_min_max: true,
            from: lineOne.cp2.x
        });

        $range4.ionRangeSlider({
            type: "single",
            min: 0,
            max: 1000,
            hide_min_max: true,
            from: lineOne.cp2.y
        });

        $range.on("change", function () {
            let $this = $(this);
            lineOne.cp1.x = $this.prop("value");
            draw();
        });
        
        $range2.on("change", function () {
            let $this = $(this);
            lineOne.cp1.y = $this.prop("value");
            draw();
        });

        $range3.on("change", function () {
            let $this = $(this);
            lineOne.cp2.x = $this.prop("value");
            draw();
        });

        $range4.on("change", function () {
            let $this = $(this);
            lineOne.cp2.y = $this.prop("value");
            draw();
        });

        draw();
    }

    // init draw function for change points into lineOne variable
    function draw () {

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.strokeStyle = '#0985B3';
        context.lineWidth = 20;
        context.moveTo(lineOne.start.x, lineOne.start.y);
        context.bezierCurveTo(lineOne.cp1.x, lineOne.cp1.y, lineOne.cp2.x, lineOne.cp2.y, lineOne.end.x, lineOne.end.y);
        context.stroke();

    }

    init();
}