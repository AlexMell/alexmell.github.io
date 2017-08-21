// Create first mushroom
'use strict';

window.addEventListener('load', eventWindowLoaded, false);

function eventWindowLoaded() {
    canvasApp();
}

function canvasApp() {

    // Create canvas
    var canvas = document.getElementById('mushroom'),
        context = canvas.getContext('2d');

    var jCanvas = $('#mushroom');

    // Canvas full width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var HALF_WIDTH = canvas.width / 2;
    var HALF_HEIGHT = canvas.height / 2;
    var FULL_WIDTH = canvas.width;
    var FULL_HEIGHT = canvas.height;

    var canvasOffset = jCanvas.offset();
    var offsetX = canvasOffset.left;
    var offsetY = canvasOffset.top;
    var mouseIsDown = false;
    var lastX = 0;
    var lastY = 0;

    var mouseX = undefined;
    var mouseY = undefined;

    // Create default points
    var lineOne = {
        start: {
            x: 500,
            y: FULL_HEIGHT + 20
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
            y: 450
        }
    };

    // Init range sliders with default points
    function init() {

        var $range = $("#range");
        var $range2 = $("#range2");
        var $range3 = $("#range3");
        var $range4 = $("#range4");
        var $rangeEndX = $("#range-end-x");
        var $rangeEndY = $("#range-end-y");

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

        $rangeEndX.ionRangeSlider({
            type: "single",
            min: 0,
            max: 1000,
            hide_min_max: true,
            from: lineOne.end.x
        });

        $rangeEndY.ionRangeSlider({
            type: "single",
            min: 0,
            max: 1000,
            hide_min_max: true,
            from: lineOne.end.y
        });

        $range.on("change", function () {
            var $this = $(this);
            lineOne.cp1.x = $this.prop("value");
            drawLeg();
            drawCap();
            //            gradient();
        });

        $range2.on("change", function () {
            var $this = $(this);
            lineOne.cp1.y = $this.prop("value");
            drawLeg();
            drawCap();
            //            gradient();
        });

        $range3.on("change", function () {
            var $this = $(this);
            lineOne.cp2.x = $this.prop("value");
            drawLeg();
            drawCap();
            //            gradient();
        });

        $range4.on("change", function () {
            var $this = $(this);
            lineOne.cp2.y = $this.prop("value");
            drawLeg();
            drawCap();
            //            gradient();
        });

        $rangeEndX.on("change", function () {
            var $this = $(this);
            lineOne.end.x = $this.prop("value");
            drawLeg();
            drawCap();
            //            gradient();
        });

        $rangeEndY.on("change", function () {
            var $this = $(this);
            lineOne.end.y = $this.prop("value");
            drawLeg();
            drawCap();
            //            gradient();
        });

        drawLeg();
        drawCap();
        //        drag();
        //        gradient();
    }

    // init drawLeg function for change points into lineOne variable
    function drawLeg() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.strokeStyle = '#0AB5B6';
        context.lineWidth = 20;
        context.moveTo(lineOne.start.x, lineOne.start.y);
        context.bezierCurveTo(lineOne.cp1.x, lineOne.cp1.y, lineOne.cp2.x, lineOne.cp2.y, lineOne.end.x, lineOne.end.y);
        context.stroke();
    }

    // init draw function for change points into lineOne variable
    function drawCap() {
        var centerX = lineOne.end.x;
        var centerY = lineOne.end.y;
        var radius = 80;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = '#0AB5B6';
        context.fill();
    }
    // init gradient intro leg mushroom
    function gradient() {

        var PI = Math.PI;
        var points = [];

        // cubic helper formula at T distance
        function CubicN(T, a, b, c, d) {
            var t2 = T * T;
            var t3 = t2 * T;
            return a + (-a * 3 + T * (3 * a - a * T)) * T + (3 * b + T * (-6 * b + b * 3 * T)) * T + (c * 3 - c * 3 * T) * t2 + d * t3;
        }

        function getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, T) {
            var x = CubicN(T, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
            var y = CubicN(T, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
            return {
                x: x,
                y: y
            };
        }

        function bezierTangent(a, b, c, d, t) {
            return 3 * t * t * (-a + 3 * b - 3 * c + d) + 6 * t * (a - 2 * b + c) + 3 * (-a + b);
        }

        for (var t = 0; t <= 100; t += 0.25) {

            var T = t / 100;

            // plot a point on the curve
            var pos = getCubicBezierXYatT(lineOne.start, lineOne.cp1, lineOne.cp2, lineOne.end, T);

            // calculate the tangent angle of the curve at that point
            var tx = bezierTangent(lineOne.start.x, lineOne.cp1.x, lineOne.cp2.x, lineOne.end.x, T);
            var ty = bezierTangent(lineOne.start.y, lineOne.cp1.y, lineOne.cp2.y, lineOne.end.y, T);
            var a = Math.atan2(ty, tx) - PI / 2;

            // save the x/y position of the point and the tangent angle
            // in the points array
            points.push({
                x: pos.x,
                y: pos.y,
                angle: a
            });
        }
        // draw a gradient-stroked line tangent to each point on the curve
        for (var i = 0; i < points.length; i++) {

            // calc the topside and bottomside points of the tangent line
            var offX1 = points[i].x + 10 * Math.cos(points[i].angle);
            var offY1 = points[i].y + 10 * Math.sin(points[i].angle);
            var offX2 = points[i].x + 10 * Math.cos(points[i].angle - PI);
            var offY2 = points[i].y + 10 * Math.sin(points[i].angle - PI);

            // create a gradient stretching between
            // the calculated top & bottom points
            var _gradient = context.createLinearGradient(offX1, offY1, offX2, offY2);
            _gradient.addColorStop(0, '#0A7AAA');
            _gradient.addColorStop(1, '#190643');

            // draw the gradient-stroked line at this point
            context.strokeStyle = _gradient;
            context.beginPath();
            context.moveTo(offX1, offY1);
            context.lineTo(offX2, offY2);
            context.stroke();
        }
    }

    init();
}