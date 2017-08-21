'use strict';

window.onload = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById('sphere');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var ball = {
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0
    };

    var gui = new dat.GUI();
    gui.add(ball, 'positionX').min(-5).max(5).step(0.1);
    gui.add(ball, 'positionY').min(-5).max(5).step(0.1);
    gui.add(ball, 'positionZ').min(-5).max(5).step(0.1);
    gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.0001);
    gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.0001);
    gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.0001);

    var render = new THREE.WebGLRenderer({ canvas: canvas });
    render.setClearColor(0x000000);

    // Сцена
    var scene = new THREE.Scene();

    // Камера угол обзора, width/height (стандарт),
    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    // Камера на плоскости х и у и 1000 обзор
    camera.position.set(0, 0, 1000);

    // Рассеяный свет
    var light = new THREE.AmbientLight(0xffffff);

    // Добавляем на сцену
    scene.add(light);

    // Сектора на плоскости, 300 на 300 высота и ширина
    var geometry = new THREE.SphereGeometry(200, 12, 12);

    // wireframe - это пустотелый
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors });

    for (var i = 0; i < geometry.faces.length; i++) {
        geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
    }
    // Mesh
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Рекурсия, постоянно обновляем сцену
    function loop() {
        mesh.position.x += ball.positionY;
        mesh.position.y += ball.positionY;
        mesh.position.z += ball.positionZ;
        mesh.rotation.x += ball.rotationX;
        mesh.rotation.y += ball.rotationY;
        mesh.rotation.z += ball.rotationZ;

        // Выводим
        render.render(scene, camera);
        requestAnimationFrame(function () {
            loop();
        });
    }
    loop();
};