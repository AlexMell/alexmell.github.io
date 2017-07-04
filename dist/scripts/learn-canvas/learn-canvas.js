'use strict';

function introduceCanvas() {
    var example = document.getElementById("intro"),
        ctx = example.getContext('2d');
    example.height = 480;
    example.width = 640;
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(10, 30);
    ctx.bezierCurveTo(150, 90, 159, 30, 200, 30);
    ctx.lineTo(250, 90);
    ctx.lineTo(20, 90);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#000';
    ctx.stroke();
}
introduceCanvas();

//    Завершающий шаг это вызовом метода stroke или fill. Собственно первый обводит фигуру линиями, а второй заливает фигуру сплошным цветом.

function example1() {
    var canvas = document.getElementById('example1');
    var c = canvas.getContext('2d');
    c.fillStyle = '#fc9';

    //beginPath используется что бы «начать» серию действий описывающих отрисовку фигуры. Каждый новый вызов этого метода сбрасывает все действия предыдущего и начинает «рисовать» занова.
    c.beginPath();

    //moveTo(x, y) // перемещает "курсор" в позицию x, y и делает её текущей
    c.moveTo(100, 50);

    //lineTo(x, y) // ведёт линию из текущей позиции в указанную, и делает в последствии указанную текущей
    c.lineTo(190, 10);
    c.lineTo(150, 80);

    //closePath является не обязательным действием и по сути оно пытается завершить рисование проведя линию от текущей позиции к позиции с которой начали рисовать.
    c.closePath();

    //fillStyle = color   // определяет цвет заливки
    c.fill();

    //strokeStyle = color // цвет линий цвет задается точно так же как и css, на примере все четыре способа задания цвета
    c.strokeStyle = 'rgb(0,128,0)';
    c.lineWidth = 10;

    //arc(x, y, radius, startAngle, endAngle, anticlockwise) // рисование дуги, где x и y центр окружности, далее начальный и конечный угол, последний параметр указывает направление

    // clearRect(x, y, ширина, высота)  // Очищает область на холсте размер с прямоугольник заданного размера

    // fillRect(x, y, ширина, высота)   // Рисует закрашенный прямоугольник

    // strokeRect(x, y, ширина, высота) // Рисует прямоугольник
    c.stroke();
}
example1();

// Гистограмма
function example2() {
    var canvas = document.getElementById('example2');
    var c = canvas.getContext('2d');
    var data = [16, 68, 20, 30, 54, 20, 16, 68, 20, 30, 54, 20];

    c.fillStyle = "white";
    c.fillRect(0, 0, 500, 500);
    var gradCol = c.createRadialGradient(0, 0, 1, 100, 100, 300);
    gradCol.addColorStop(0, '#000');
    gradCol.addColorStop(1, '#f00');
    c.fillStyle = gradCol;
    for (var i = 0; i < data.length; i++) {
        var dp = data[i];
        c.fillRect(31 + i * 40, 460 - dp * 5, 20, dp * 5);
    }

    c.fillStyle = "black";
    c.lineWidth = 3.0;
    c.beginPath();

    c.moveTo(30, 10);
    c.lineTo(30, 460);
    c.lineTo(490, 460);
    c.stroke();

    c.fillStyle = "black";
    for (var i = 0; i < 6; i++) {
        c.fillText((5 - i) * 20 + "", 4, i * 80 + 60);
        c.beginPath();
        c.moveTo(25, i * 80 + 60);
        c.lineTo(30, i * 80 + 60);
        c.stroke();
    }

    var labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];

    for (var i = 0; i < labels.length; i++) {
        c.fillText(labels[i], 31 + i * 40, 475);
    }
}
example2();

// Круговая диаграмма
function example3() {
    var canvas = document.getElementById("example3");
    var c = canvas.getContext("2d");
    var data = [16, 68, 20, 30, 54];

    c.fillStyle = "white";
    c.fillRect(0, 0, 500, 500);

    var colors = ["orange", "green", "blue", "yellow", "teal"];

    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data[i];
    }

    // Рисование настоящих секторов кажется сложным, но на самом деле это довольно легко. Каждый сектор начинается в центре круга (250,250), затем рисуется дуга от предыдущего угла до нового угла. Угол представляет собой данные конвертированные в радианы. Предыдущая угол — это угол от предыдущей итерации цикла (начиная с 0). Дуга с центром в 250,250 имеет радиус 100. Затем проводим линию обратно в центр, заливаем и обводим фигуру.

    var prevAngle = 0;
    for (var i = 0; i < data.length; i++) {
        // дoля, предстваленная сегементом
        var fraction = data[i] / total;
        // высисляем начальный угол
        var angle = prevAngle + fraction * Math.PI * 2;
        // Рисуем сегмент
        c.fillStyle = colors[i];

        // заливаем радиальным градиентом
        var grad = c.createRadialGradient(250, 250, 10, 250, 250, 100);
        grad.addColorStop(0, "white");
        grad.addColorStop(1, colors[i]);
        c.fillStyle = grad;

        // Создаем контур
        c.beginPath();
        c.moveTo(250, 250);
        c.arc(250, 250, 100, prevAngle, angle, false);
        // заливаем
        c.lineTo(250, 250);
        c.fill();
        // Обдводим
        c.strokeStyle = "black";
        c.stroke();
        // Обновляем для следующей итерации цикла
        prevAngle = angle;
    }

    c.fillStyle = "black";
    c.font = "25px sans-serif";
    var text = "Sales Data from 2025";
    var metrics = c.measureText(text);
    c.fillText(text, 250 - metrics.width / 2, 400);
}
example3();

// Opacity
function example4() {
    var canvas = document.getElementById("example4");
    var c = canvas.getContext("2d");

    c.fillStyle = "red";
    // делим на 100 чтоьы получтиь дроь мжеду 0 и 1

    c.globalAlpha = 50 / 100;
    c.fillRect(0, 0, 50, 50);
    c.globalAlpha = 30 / 100;
    c.fillRect(10, 10, 50, 50);
    c.globalAlpha = 1.0;
}
example4();

// Translate test
function example5() {
    var canvas = document.getElementById("example5");
    var c = canvas.getContext("2d");

    c.fillStyle = "red";
    c.translate(50, 50);

    var rads = 30 * Math.PI * 2.0 / 360.0;
    c.rotate(rads);
    c.fillRect(0, 0, 100, 100);
}
example5();

// Triangle mask
function example6() {
    var canvas = document.getElementById("example6");
    var c = canvas.getContext("2d");

    // Прямоугольник
    c.fillStyle = "red";
    c.fillRect(0, 0, 400, 100);

    // Создаем треугольник
    c.beginPath();
    c.moveTo(200, 30);
    c.lineTo(300, 300);
    c.lineTo(0, 0);
    c.closePath();

    // Обводим треугольник, чтобы его увидеть
    c.lineWidth = 5;
    c.stroke();
    // Используем треугольник как маску
    c.clip();
    // ЗАливаем прямугольник желтым цветом
    c.fillStyle = 'yellow';
    c.fillRect(0, 0, 400, 100);
}
example6();

// first test
function firstCanvas() {
    var canvas = document.getElementById("first-canvas");
    var c = canvas.getContext("2d");

    c.fillStyle = "#fc9";
    c.fillRect(0, 0, 100, 100);
    c.strokeRect = 2;

    c.beginPath();

    c.fillStyle = "#f00";
    c.moveTo(0, 0);
    c.lineTo(500, 500);
    c.lineTo(0, 500);
    c.lineTo(0, 0);
    c.lineWidth = 3;
    c.stroke();

    c.beginPath();
}
firstCanvas();

// Animation test

// requestAnimationFrame становится стандартом, но большинство браузеров поддерживает только свои собственные версии с префиксом. Например, Chrome использует webkitRequestAnimationFrame, а Mozilla поддерживает mozRequestAnimationFrame. Чтобы исправить это, мы воспользуемся скриптом Пола Ириша. Он просто соединяет разные варианты в новой функции: requestAnimFrame.
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

function example7() {

    var x = 0;

    function drawIt() {
        window.requestAnimFrame(drawIt);
        var canvas = document.getElementById('example7');
        var c = canvas.getContext('2d');
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = "red";
        c.fillRect(x, 100, 200, 100);
        x += 5;
    }

    window.requestAnimFrame(drawIt);
}
// example7();

// test snow
function example8() {
    var canvas = document.getElementById("example8"),
        particles = [];

    function loop() {
        window.requestAnimationFrame(loop);
        createParticles();
        updateParticles();
        killParticles();
        drawParticles();
    }
    window.requestAnimationFrame(loop);

    function createParticles() {
        if (particles.length < 100) {
            particles.push({
                x: Math.random() * canvas.width, // между 0 и шириной хослта
                y: 0,
                speed: 2 + Math.random() * 3, // Между 2 и 5
                radius: 5 + Math.random() * 5, // между 5 и 10
                color: "#FC9"
            });
        }
    }

    function updateParticles() {
        for (var i in particles) {
            var part = particles[i];
            part.y += part.speed;
        }
    }

    function killParticles() {
        for (var i in particles) {
            var part = particles[i];
            if (part.y > canvas.height) {
                part.y = 0;
            }
        }
    }

    function drawParticles() {
        var c = canvas.getContext('2d');
        c.fillStyle = "black";
        c.fillRect(0, 0, canvas.width, canvas.height);
        for (var i in particles) {
            var part = particles[i];
            c.beginPath();
            c.arc(part.x, part.y, part.radius, 0, Math.PI * 2);
            c.arc(part.x + 10, part.y, part.radius, 0, Math.PI * 2);
            c.closePath();
            c.fillStyle = part.color;
            c.fill();

            c.beginPath();
            c.fillRect(part.x, part.y - part.radius - 29, part.radius, 30);
            c.fillStyle = part.color;
            c.closePath();
        }
    }
}
example8();

// test draw triangle
function secondCanvas() {
    var canvas = document.getElementById('second-canvas');
    var c = canvas.getContext('2d');

    c.beginPath();
    c.moveTo(75, 50);
    c.lineTo(100, 75);
    c.lineTo(100, 25);
    c.fill();
}
secondCanvas();

// test draw smile
function thirdCanvas() {
    var canvas = document.getElementById('third-canvas');
    var c = canvas.getContext('2d');

    c.arc(100, 100, 100, 0, Math.PI * 2, true); // Внешний круг
    c.moveTo(180, 100);
    c.arc(100, 100, 80, 0, Math.PI, false); // Рот ( по часовой стрекле )
    c.moveTo(80, 80);
    c.arc(60, 73, 20, 0, Math.PI * 2, true); // Левый глаз
    c.moveTo(160, 75);
    c.arc(140, 73, 20, 0, Math.PI * 2, true); // Правый глаз
    c.moveTo(150, 75);
    c.arc(140, 73, 10, 0, Math.PI * 2, true); // Правый зрачок
    c.moveTo(73, 60);
    c.arc(60, 73, 10, 0, Math.PI * 2, true); // Правый зрачок
    c.stroke();
}
thirdCanvas();

// Different filled and stroke triangel also differenetn lineTo and moveTo
function fourthCanvas() {
    var canvas = document.getElementById('fourth-canvas');
    var c = canvas.getContext('2d');

    // Filled triange
    c.moveTo(25, 25);
    c.lineTo(105, 25);
    c.lineTo(25, 105);
    c.fill();

    // Stroke triangle
    c.beginPath();

    c.moveTo(125, 125);
    c.lineTo(125, 45);
    c.lineTo(45, 125);
    c.closePath();
    c.stroke();
}
fourthCanvas();

// Test buzier
function fifthCanvas() {
    var canvas = document.getElementById('fifth-canvas');
    var c = canvas.getContext('2d');

    // c.beginPath();
    // c.moveTo(75,25);
    // c.quadraticCurveTo(25,25,25,62,5);
    // c.quadraticCurveTo(25,100,50, 100);
    // c.quadraticCurveTo(50,120,30,125);
    // c.quadraticCurveTo(60,120,65,100);
    // c.quadraticCurveTo(125,100,125,62.5);
    // c.quadraticCurveTo(125,25,75,25);
    // c.stroke();

    c.beginPath();
    c.moveTo(75, 40);
    c.bezierCurveTo(75, 37, 70, 25, 50, 25);
    c.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    c.bezierCurveTo(20, 80, 40, 102, 75, 120);
    c.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    c.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    c.bezierCurveTo(85, 25, 75, 37, 75, 40);
    c.fill();
}
fifthCanvas();

// example colors
function example9() {
    var ctx = document.getElementById('example9').getContext('2d');
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ')';
            ctx.beginPath();
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    }
}
example9();

// test canvas photos black\white
function sixCanvas() {
    var canvas = document.getElementById('six-canvas');
    var c = canvas.getContext('2d');

    var img = new Image();
    img.onload = function () {
        // Рисуем иозображение на холсте
        c.drawImage(img, 0, 0);
        // Получаем данные холста
        var data = c.getImageData(0, 0, canvas.width, canvas.height);
        // Инвертируем каждый пиксель
        for (var n = 0; n < data.width * data.height; n++) {
            var index = n * 4;
            data.data[index] = 255 - data.data[index];
            data.data[index + 1] = 255 - data.data[index + 1];
            data.data[index + 2] = 255 - data.data[index + 2];
            // Не трогайте альфу
        }
        // Воазвращем данные обратно
        c.putImageData(data, 0, 0);
    };
    img.src = '../../images/dima.jpg';
    console.log(img);
}
sixCanvas();