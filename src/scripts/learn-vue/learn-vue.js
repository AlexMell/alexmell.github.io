'use strict';

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        message2: 'Hi guys',
        someBlock: '<div>Some block is here</div>'
    },
    methods: {
        sayHello: function() {
            this.message2 = "Hi Guys!";
        },
        changeTitle: function(event) {
            this.message = event.target.value;
        }
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вот когда вы выгрузили страничку' + new Date()
    }
});

let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

let app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
                text: "Text 1"
            },
            {
                text: "Text 2"
            },
            {
                text: "Text 3"
            }
        ]
    }
});
app4.todos.push({
    text: 'Text 4 Добавлен'
});

let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue js !',
        link: 'https://alexmell.github.io/'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

let app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'hellow vue'
    }
});

let exercise = new Vue({
    el: '#exercise',
    data: {
        name: 'Alex',
        age: 24,
        imgLink: 'http://demandware.edgesuite.net/aalw_prd/on/demandware.static/-/Sites-ConverseMaster/default/dw978c25da/images/hi-res/M9166C_standard.jpg'
    },
    methods: {
        multiplyAge: function() {
            return this.age * 3
        },
        randomAge: function() {
            return (Math.random(1));
        },
        changeName: function(event) {
            this.name = event.target.value
        }
    }
});

let app7 = new Vue({
    el: '#app-7',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(step) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function() {
            alert('Alert!');
        },
    }
});

let exercise1 = new Vue({
    el: '#exercise-1',
    data: {
        message: 'Hi guys',
        show: false
    }
});

let exercise2 = new Vue({
    el: '#exercise-2',
    data: {
        value: 'String'
    },
    methods: {
        showAlert: function() {
            alert('Alert is showing!');
        },
        storeValue: function(event) {
            this.value = event.target.value
        }
    }
});

let exercise3 = new Vue({
    el: '#exercise-3',
    data: {
        value: 0
    },
    computed: {
        output: function() {
            return this.value >= 35 ? 'done!' : 'not there yet'
        },
    },
    methods: {
        result: function() {
            return this.value >= 35 ? 'done!' : 'not there yet'
        }
    },
    watch: {
        value: function(value) {
            let vm = this;
            setTimeout(function() {
                vm.value = 0
            }, 5000)
        },
    },
});

let app8 = new Vue({
    el: '#app-8',
    data: {
        attachRed: false,
        color: 'green'
    },
    divClass: function() {
        return {
            red: this.attachRed,
            blue: !this.attachRed
        }
    }
});

let app9 = new Vue({
    el: '#app-9',
    data: {
        color: 'gray',
        width: 100
    },
    computed: {
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            };
        }
    }
});

let exercise4 = new Vue({
    el: '#exercise-4',
    data: {
        users: [{
                name: 'Vasya',
                age: 15
            },
            {
                name: 'Masha',
                age: 3
            },
            {
                name: 'Katya',
                age: 1
            },
            {
                name: 'Misha',
                age: 4
            }
        ],
    },
    computed: {
        filteredUsers: function() {
            return this.users.filter(function(user) {
                return user.name.indexOf(this.search) !== -1
            }.bind(this))
        }
    },
});