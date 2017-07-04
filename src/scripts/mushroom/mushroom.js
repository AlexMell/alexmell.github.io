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
    context.beginPath();
    context.fillStyle='#000';
    context.moveTo(canvas.width/2,canvas.height);
    context.quadraticCurveTo(25,25,25,62,5);
    context.quadraticCurveTo(25,100,50, 100);
    context.quadraticCurveTo(50,120,30,125);
    context.quadraticCurveTo(60,120,65,100);
    context.quadraticCurveTo(125,100,125,62.5);
    context.quadraticCurveTo(125,25,75,25);
    context.stroke();
    context.closePath();

}
mushroom();