'use strict';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        message2: 'Hi guys',
        someBlock: '<div>Some block is here</div>'
    },
    methods: {
        sayHello: function sayHello() {
            this.message2 = "Hi Guys!";
        },
        changeTitle: function changeTitle(event) {
            this.message = event.target.value;
        }
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вот когда вы выгрузили страничку' + new Date()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{ text: "Text 1" }, { text: "Text 2" }, { text: "Text 3" }]
    }
});
app4.todos.push({ text: 'Text 4 Добавлен' });

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue js !',
        link: 'https://alexmell.github.io/'
    },
    methods: {
        reverseMessage: function reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'hellow vue'
    }
});

var exercise = new Vue({
    el: '#exercise',
    data: {
        name: 'Alex',
        age: 24,
        imgLink: 'http://demandware.edgesuite.net/aalw_prd/on/demandware.static/-/Sites-ConverseMaster/default/dw978c25da/images/hi-res/M9166C_standard.jpg'
    },
    methods: {
        multiplyAge: function multiplyAge() {
            return this.age * 3;
        },
        randomAge: function randomAge() {
            return Math.random(1);
        },
        changeName: function changeName(event) {
            this.name = event.target.value;
        }
    }
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function increase(step) {
            this.counter += step;
        },
        updateCoordinates: function updateCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function alertMe() {
            alert('Alert!');
        }
    }
});

var exercise2 = new Vue({
    el: '#exercise-2',
    data: {
        value: 'String'
    },
    methods: {
        showAlert: function showAlert() {
            alert('Alert is showing!');
        },
        storeValue: function storeValue(event) {
            this.value = event.target.value;
        }
    }
});