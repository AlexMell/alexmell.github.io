// Mushroom canvas

    // Create canvas
    var canvas = document.getElementById('mushroom'),
        context = canvas.getContext('2d');

    // Make canvas full width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create gradient rectangle full width
    // context.beginPath();

    // var grd = context.createLinearGradient(0, canvas.height, canvas.width, 0);
    // grd.addColorStop(0, "#3b0539");
    // grd.addColorStop(0.5, "#090854");
    // grd.addColorStop(1, "#491792");

    // context.fillStyle = grd;
    // context.fillRect(0, 0, canvas.width, canvas.height);
    // context.closePath();

    // Create first mushroom
    var HALF_WIDTH = canvas.width / 2;
    var HALF_HEIGHT = canvas.height / 2;
    var FULL_WIDTH = canvas.width
    var FULL_HEIGHT = canvas.height

    var $range = $("#range");
    var $range2 = $("#range2");

    $range.ionRangeSlider({
        type: "single",
        min: 0,
        max: 1000,
        from: 50
    });
    
    $range2.ionRangeSlider({
        type: "single",
        min: 0,
        max: 1000,
        from: 50
    });
    
    $range.on("change", function () {
        var $this = $(this),
            value = $this.prop("value");
            
    });

    $range2.on("change", function () {
        var $this = $(this),
            value = $this.prop("value");
    });


    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.strokeStyle = "#4DB2B5";
    context.lineWidth = 20;
    context.moveTo(HALF_WIDTH - 450, FULL_HEIGHT);
    context.bezierCurveTo(HALF_WIDTH, FULL_HEIGHT - range1, HALF_WIDTH, range2, 200, HALF_HEIGHT);
    context.closePath();
    context.stroke();
