// Mushroom canvas

function mushroom() {
    // Create canvas
    var canvas = document.getElementById('mushroom');
    var context = canvas.getContext('2d');

    // Make canvas full width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create gradient rectangle full width
    context.beginPath();
    var grd = context.createLinearGradient(0, canvas.height, canvas.width, 0);

    grd.addColorStop(0, "#3b0539");
    grd.addColorStop(0.5, "#090854");
    grd.addColorStop(1, "#491792");
    context.fillStyle = grd;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.closePath();

    // Create first mushroom
    var HALF_WIDTH = canvas.width / 2;
    var HALF_HEIGHT = canvas.height / 2;
    var FULL_WIDTH = canvas.width
    var FULL_HEIGHT = canvas.height

    context.beginPath();
    context.strokeStyle = "#4DB2B5";
    context.lineWidth = 3;
    context.moveTo(HALF_WIDTH - 400, FULL_HEIGHT);
    context.quadraticCurveTo(HALF_WIDTH - 400, FULL_HEIGHT - 40 , HALF_WIDTH - 380, HALF_HEIGHT);
    context.moveTo(HALF_WIDTH - 400, FULL_HEIGHT - 515);
    context.quadraticCurveTo(HALF_WIDTH, FULL_HEIGHT - 40 , HALF_WIDTH - 380, HALF_HEIGHT);
    context.fillStyle = '#ff';
    context.fill();
    context.stroke();
    context.closePath();


}
mushroom();