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

}
mushroom();