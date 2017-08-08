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

    let jCanvas = $('#mushroom');

    // Canvas full width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let HALF_WIDTH = canvas.width / 2;
    let HALF_HEIGHT = canvas.height / 2;
    let FULL_WIDTH = canvas.width;
    let FULL_HEIGHT = canvas.height;

    let canvasOffset = jCanvas.offset();
    let offsetX = canvasOffset.left;
    let offsetY = canvasOffset.top;
    let mouseIsDown = false;
    let lastX = 0;
    let lastY = 0;

    let mouseX
    let mouseY

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
        let $rangeEndX = $("#range-end-x");
        let $rangeEndY = $("#range-end-y");

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
            let $this = $(this);
            lineOne.cp1.x = $this.prop("value");
            drawLeg();
            drawCap();
//            gradient();
        });
        
        $range2.on("change", function () {
            let $this = $(this);
            lineOne.cp1.y = $this.prop("value");
            drawLeg();
            drawCap();
//            gradient();
        });

        $range3.on("change", function () {
            let $this = $(this);
            lineOne.cp2.x = $this.prop("value");
            drawLeg();
            drawCap();
//            gradient();
        });

        $range4.on("change", function () {
            let $this = $(this);
            lineOne.cp2.y = $this.prop("value");
            drawLeg();
            drawCap();
//            gradient();
        });

        $rangeEndX.on("change", function () {
            let $this = $(this);
            lineOne.end.x = $this.prop("value");
            drawLeg();
            drawCap();
//            gradient();
        });

        $rangeEndY.on("change", function () {
            let $this = $(this);
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
    function drawLeg () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.strokeStyle = '#0AB5B6';
        context.lineWidth = 20;
        context.moveTo(lineOne.start.x, lineOne.start.y);
        context.bezierCurveTo(lineOne.cp1.x, lineOne.cp1.y, lineOne.cp2.x, lineOne.cp2.y, lineOne.end.x, lineOne.end.y);
        context.stroke();
    }

    // init draw function for change points into lineOne variable
    function drawCap () {
        let centerX = lineOne.end.x;
        let centerY = lineOne.end.y;
        let radius = 80;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = '#0AB5B6';
        context.fill();
    }

    function handleMouseDown(e) {
        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);

        // mousedown stuff here
        lastX = mouseX;
        lastY = mouseY;
        mouseIsDown = true;
    }

    function handleMouseUp(e) {
        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);

        // mouseup stuff here
        mouseIsDown = false;
    }

    function handleMouseMove(e) {
        if (!mouseIsDown) {
            return;
        }

        mouseX = parseInt(e.clientX - offsetX);
        mouseY = parseInt(e.clientY - offsetY);

        let x = e.pageX - canvas.getBoundingClientRect().left;
        let y = e.pageY - canvas.getBoundingClientRect().top;

        let dx = x - lineOne.end.x,
            dy = y - lineOne.end.y,
            dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
            // mousemove stuff here
            lineOne.end.x = mouseX;
            lineOne.end.y = mouseY;
            $('body').css('cursor', 'pointer');
        }

        let dragCp1 = x - lineOne.cp1.x,
            dragCp2 = y - lineOne.cp1.y,
            dragCp1Dest = Math.sqrt(dragCp1 * dragCp2 + dragCp2 * dragCp2);

        if (dragCp1Dest < 30) {
            lineOne.cp1.x = mouseX;
            lineOne.cp1.y = mouseY;
        }

        let dragCpp1 = x - lineOne.cp2.x,
            dragCpp2 = y - lineOne.cp2.y,
            dragCpp2Dest = Math.sqrt(dragCpp1 * dragCpp2 + dragCpp2 * dragCpp2);

        if (dragCpp2Dest < 30) {
            lineOne.cp2.x = mouseX;
            lineOne.cp2.y = mouseY;
        }

    }

    jCanvas.mousedown(function (e) {
        handleMouseDown(e);
        drawLeg();
        drawCap();
    });
    jCanvas.mousemove(function (e) {
        handleMouseMove(e);
        drawLeg();
        drawCap();
    });
    jCanvas.mouseup(function (e) {
        handleMouseUp(e);
        drawLeg();
        drawCap();
    });

    // init gradient intro leg mushroom
    function gradient() {

        let PI = Math.PI;
        let points = [];

        // cubic helper formula at T distance
        function CubicN(T, a, b, c, d) {
            let t2 = T * T;
            let t3 = t2 * T;
            return a + (-a * 3 + T * (3 * a - a * T)) * T + (3 * b + T * (-6 * b + b * 3 * T)) * T + (c * 3 - c * 3 * T) * t2 + d * t3;
        }

        function getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, T) {
            let x = CubicN(T, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
            let y = CubicN(T, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
            return ({
                x: x,
                y: y
            });
        }

        function bezierTangent(a, b, c, d, t) {
            return (3 * t * t * (-a + 3 * b - 3 * c + d) + 6 * t * (a - 2 * b + c) + 3 * (-a + b));
        }

        for (let t = 0; t <= 100; t += 0.25) {

            let T = t / 100;

            // plot a point on the curve
            let pos = getCubicBezierXYatT(lineOne.start, lineOne.cp1, lineOne.cp2, lineOne.end, T);

            // calculate the tangent angle of the curve at that point
            let tx = bezierTangent(lineOne.start.x, lineOne.cp1.x, lineOne.cp2.x, lineOne.end.x, T);
            let ty = bezierTangent(lineOne.start.y, lineOne.cp1.y, lineOne.cp2.y, lineOne.end.y, T);
            let a = Math.atan2(ty, tx) - PI / 2;

            // save the x/y position of the point and the tangent angle
            // in the points array
            points.push({
                x: pos.x,
                y: pos.y,
                angle: a
            });

        }
        // draw a gradient-stroked line tangent to each point on the curve
        for (let i = 0; i < points.length; i++) {

            // calc the topside and bottomside points of the tangent line
            let offX1 = points[i].x + 10 * Math.cos(points[i].angle);
            let offY1 = points[i].y + 10 * Math.sin(points[i].angle);
            let offX2 = points[i].x + 10 * Math.cos(points[i].angle - PI);
            let offY2 = points[i].y + 10 * Math.sin(points[i].angle - PI);

            // create a gradient stretching between
            // the calculated top & bottom points
            let gradient = context.createLinearGradient(offX1, offY1, offX2, offY2);
            gradient.addColorStop(0, '#0A7AAA');
            gradient.addColorStop(1, '#190643');

            // draw the gradient-stroked line at this point
            context.strokeStyle = gradient;
            context.beginPath();
            context.moveTo(offX1, offY1);
            context.lineTo(offX2, offY2);
            context.stroke();
        }
    }

    init();
}