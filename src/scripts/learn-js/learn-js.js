'use strict';

/*
 First lesson learn.js.ru (Variables)
 */
function less1() {
    var admin,
        name;
    name = 'vasiliy';
    admin = name;
    console.log('name');
    console.log(admin);
}

/*
 Second lesson learn.js.ru (Variables)
 */
function less2() {
    var planet = 'Earth',
        ourPlanetEarth = 'Earth',
        person = 'Petya',
        userName = 'Petya';
    console.log(planet);
    console.log(ourPlanetEarth);
    console.log(person);
    console.log(userName);
}

/*
 Types dates JS (Sorax)
 */
function less3() {
    var obj = {};
    console.log(obj);
}

/*
 Lesson from learn.js.ru (if else)
 */
function less4() {
    var question = prompt('Какое оффициальное название JavaScript?', '');
    question = (question === 'EcmaScript') ? console.log('Верно!') : console.log('Не знаешь ? Дебил!');
}

/*
 Lesson from learn.js.ru (if else)
 */
function less5() {
    var numberQuestion = +prompt('Число?', '');
    numberQuestion = (numberQuestion > 0) ? console.log('1') :
        numberQuestion < 0 ? console.log('-1') :
            numberQuestion === 0 ? console.log('0') : console.log('asd');
    console.log(numberQuestion);
}

/*
 Lesson from learn.js.ru (if else)
 */
function less6() {
    var result = a + b < 4 ? 'Мало' : 'Много';
    console.log(result);
}

/*
 Lesson from learn.js.ru (if else)
 */
function less7() {
    var login = 'Вася';
    if (login == 'Вася') {
        less7 = 'Привет';
    } else if (login == 'Директор') {
        less7 = 'Здравствуйте';
    } else if (login == '') {
        less7 = 'Нет логина';
    } else {
        less7 = '';
    }
    console.log(less7);
}

/*
 Lesson from learn.js.ru (if else)
 */
function less8() {
    var login = 'директор';
    var message =
        (login == 'Вася') ? 'Привет' :
            (login == 'директор') ? 'Здравсуйте' :
                (login == '') ? 'Нет логина' : '';
    console.log(message);
}

/*
 Lesson from learn.js.ru (Type compare primitive);
 */
function less9() {
    var a1 = +'123';
    var a2 = +NaN;
    var a3 = +'undefined';
    var a4 = +null;
    var a5 = +true;
    console.log(a1, typeof a1);
    console.log(a2, typeof a2);
    console.log(a3, typeof a3);
    console.log(a4, typeof a4);
    console.log(a5, typeof a5);
}

/*
 Lesson from learn.js.ru (Type compare primitive);
 */
function less10() {
    console.log("" - 1);
    console.log("" + 1 + 0);
    console.log("2" * "3");
    console.log(4 + 5 + "px");
    console.log(6 / "3");
    console.log("$" + 4 + 5);
    console.log(true + false);
    console.log("4" - 2);
    console.log("4px" - 2);
    console.log(7 / 0);
    console.log("  -9\n" + 5);
    console.log("  -9\n" - 5);
    console.log(5 && 2);
    console.log(2 && 5);
    console.log(5 || 0);
    console.log(0 || 5);
    console.log(null + 1);
    console.log(undefined + 1);
    console.log(null == "\n0\n");
    console.log(+null == +"\n0\n");
}

/*
    Lesson from learn.js.ru (For and Switch )
     Какое последнее значение выведет этот код? Почему?
     var i = 3;
         while (i) {
         alert( i-- );
     }
*/
function less11() {
    let i = 3;
    while (i) {
        alert(i--);
    }
}

/*
     Lesson from learn.js.ru (For and Switch )
     Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
*/
function less12() {
    // Префиксный вариант
    let i = 0;
    while (++i < 5) alert(i);
    // 1,2,3,4,5
    // Постфиксный вариант
    let a = 0;
    while (a++ < 1) alert(a);
    // 0,1,2,3,4
}

/*
    Lesson from learn.js.ru (For and Switch )
    При помощи цикла for выведите числа от 2 до 10.
 */
function less13() {
    for (let i = 2; i <= 10; i++) {
        console.log(i);
    }
}

/*
    Lesson from learn.js.ru (For and Switch ) 
    При помощи цикла for выведите чётные числа от 2 до 10.
 */
function less14() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

/*
 Lesson from learn.js.ru ( Function )
 Parametres
 */
function less15(text1, text2) {
    console.log(text1 + " " + text2);
}

//less15('Hello', 'World');
/*
 Lesson from learn.js.ru ( Function )
 Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
 */
//    function checkAge(age) {
//        if (age > 18) {
//            return true;
//        } else {
//            return confirm('Родители разрешили?');
//        }
//    }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:
//Используя оператор '?'
//Используя оператор ||
function less16(age) {
    return (age > 18) ? true : prompt('Родители разрешили ?', '');
    //    return (age > 18) || prompt('Родители разрешили?', '');
}

/*
 Lesson from learn.js.ru ( Function )
 Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
 */
function less17(a, b) {
    if (a < b) {
        return console.log(a);
    } else {
        return console.log(b);
    }
}

/*
 Lesson from learn.js.ru ( Function )
 Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
 */
function less18(x, n) {
    let c = x;
    for (let i = 1; i < n; i++) {
        c *= x;
    }
    return console.log(c);
}

/*
 Lesson from learn.js.ru ( number )
 Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:
 */
function less19(num) {
    console.log(Math.round(num));
}

// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом, например:
function less20(str) {
    var newStr = str[0].toUpperCase() + str.slice(1);
    console.log(newStr);
}

/*
 Lesson from learn.js.ru ( number )
 Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
 */
function less21(str) {
    var tolowercase = str.toLowerCase();
}

/*
 Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
 */
function less22(str, maxlength) {
    if (str.length >= maxlength) {
        console.log(str.slice(0, maxlength) + '...');
    } else {
        console.log('suka');
    }
}

/*
    // Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.
    // Создайте пустой объект user.
    // Добавьте свойство name со значением Вася.
    // Добавьте свойство surname со значением Петров.
    // Поменяйте значение name на Сергей.
    // Удалите свойство name из объекта.
*/
function less23() {
    var user = {
        name: 'vasya',
        surname: 'petrov',
    }
    user.name = 'sergey'
    delete user.name
    console.log(user);
}

// less23();
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
function less24() {
    function isEmpty(obj) {
        var counter = 0;
        for (var key in obj) {
            counter++;
        }
        var keyLength = counter;
        console.log(keyLength >= 1 ? 'ne pustoy' : 'pustoy');
    }

    var schedule = {
        name: 'vasya',
        surname: 'pupkin'
    };
    isEmpty(schedule);
}

// Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0.
function less25() {
    var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };
    var summ = 0;
    for (var key in salaries) {
        summ += salaries[key]
    }
    console.log('Cумма', summ);
    var max = 0;
    var maxName = '';
    for (var key in salaries) {
        if (max < salaries[key]) {
            max = salaries[key];
            maxName = key;
        }
    }
    console.log(maxName);
}

/*
    Как получить последний элемент из произвольного массива?
    У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
    Напишите код для получения последнего элемента goods.
*/
function less26() {
    var goods = ["s1", "s2", "s3"];
    console.log(goods.length);
    console.log(goods[goods.length - 1]);
}

/*
    Как добавить элемент в конец произвольного массива?
    У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
*/
function less27() {
    var goods = ["s1", "s2", "s3"];
    goods.push('Компютер');
    goods[goods.length] = 'Компьютерasd'
    console.log(goods);
}

/*
    Задача из 5 шагов-строк:

    Создайте массив styles с элементами «Джаз», «Блюз».
    Добавьте в конец значение «Рок-н-Ролл»
    Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
    Удалите первое значение массива и выведите его alert.
    Добавьте в начало значения «Рэп» и «Регги».
    Массив в результате каждого шага:

    Джаз, Блюз
    Джаз, Блюз, Рок-н-Ролл
    Джаз, Классика, Рок-н-Ролл
    Классика, Рок-н-Ролл
    Рэп, Регги, Классика, Рок-н-Ролл
*/
function less28() {
    var styles = ['Джаз', 'Блюз'];
    styles.push('Рок-н-ролл');
    styles[styles.length - 2] = "Классика"
    console.log(styles.shift());
    styles.unshift('Рэп', 'Регги');
    console.log(styles);
}

/*
    Напишите код для вывода alert случайного значения из массива:
    var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    P.S. Код для генерации случайного целого от min to max включительно:
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
*/
function less29() {
    var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    console.log(arr[rand]);
}

/*
    В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:
    var obj = {
        className: 'open menu'
    }
    Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет: 
    addClass(obj, 'new'); // obj.className='open menu new'
    addClass(obj, 'open'); // без изменений (класс уже существует)
    addClass(obj, 'me'); // obj.className='open menu new me'
    alert( obj.className ); // "open menu new me"
    P.S  Ваша функция не должна добавлять лишних пробелов.
*/
function less30() {
    function addClass(obj, cls) {
        var classes = obj.className ? obj.className.split(' ') : [];
        for (var i = 0; i < classes.length; i++) {
            if (classes[i] == cls) {
                return console.log(obj.className);
            }
        }
        classes.push(cls);
        console.log(classes);
    }

    var obj = {
        className: 'open menu'
    }
    addClass(obj, 'open');
}

/*
    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

    То есть, дефисы удаляются, а все слова после них получают заглавную букву.

    Например:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    Такая функция полезна при работе с CSS.

    P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/
function less31() {
    function camelize(str) {
        var arr = str.split('-');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join('');
    }

    console.log(camelize('my-short-string'));
}

/*
    У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

    var obj = {
    className: 'open menu'
    };
    Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

    removeClass(obj, 'open'); // obj.className='menu'
    removeClass(obj, 'blabla'); // без изменений (нет такого класса)
    P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

    obj = {
    className: 'my menu menu'
    };
    removeClass(obj, 'menu');
    alert( obj.className ); // 'my'
    Лишних пробелов после функции образовываться не должно.
*/
function less32() {
    function removeClass(obj, cls) {
        var classes = obj.className ? obj.className.split(' ') : [];
        for (var i = 0; i < classes.length; i++) {
            if (classes[i] === cls) {
                classes.splice(i, 1); // удалить класс
            }
        }
        obj.className = classes.join(' ');
        return classes
    }

    var obj = {
        className: 'open open suka menu'
    };
    console.log(removeClass(obj, 'open'));
    // Решение заключается в том, чтобы разбить className в массив классов, а затем пройтись по нему циклом. Если класс есть – удаляем его splice, заново объединяем массив в строку и присваиваем объекту.
    // function removeClass(obj, cls) {
    // var classes = obj.className.split(' ');
    // for (var i = 0; i < classes.length; i++) {
    //     if (classes[i] == cls) {
    //     classes.splice(i, 1); // удалить класс
    //     i--; // (*)
    //     }
    // }
    // obj.className = classes.join(' ');
    // }
    // var obj = {
    // className: 'open menu menu'
    // }
    // removeClass(obj, 'blabla');
    // removeClass(obj, 'menu')
    // alert(obj.className) // open
    // В примере выше есть тонкий момент. Элементы массива проверяются один за другим. При вызове splice удаляется текущий, i-й элемент, и те элементы, которые идут дальше, сдвигаются на его место.
    // Таким образом, на месте i оказывается новый, непроверенный элемент.
    // Чтобы это учесть, строчка (*) уменьшает i, чтобы следующая итерация цикла заново проверила элемент с номером i. Без нее функция будет работать с ошибками.
}

/*
    Как в функции отличить отсутствующий аргумент от undefined?

    function f(x) {
      // выведите 1, если первый аргумент есть, и 0 - если нет
    }

    f(undefined); // 1
    f(); // 0
*/
function less34() {
    function f(x) {
        if (arguments.length) {
            console.log('1');
        } else {
            console.log('0');
        }
    }

    f(undefined);
    f();
}

/*
    Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
*/
function less35() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
}

/*
    Напишите counter
*/
function less36() {
    function needCounter() {
        let thisCount = 1;
        return function () {
            return thisCount++;
        };
    }

    let fromCounter = needCounter();
    console.log(fromCounter());
    console.log(fromCounter());
    console.log(fromCounter());
    console.log(fromCounter());
}

/*
    Напишите counter cо свойствами (остановка, сохранить, обновить)
*/
function less37() {
    function makeCounter() {
        let initialCount = 1;
        return {
            continue: function () {
                return initialCount++;
            },
            reset: function () {
                return initialCount = 1;
            },
            set: function (value) {
                initialCount = value
            }
        }
    }
    let firstCount = makeCounter();
    console.log(firstCount.continue());
    console.log(firstCount.continue());
    console.log(firstCount.continue());
    console.log(firstCount.continue());
    console.log(firstCount.reset());
    console.log(firstCount.continue());
    console.log(firstCount.set(24));
    console.log(firstCount.continue());
    console.log(firstCount.continue());
}

/*
    Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

    Да, именно так, через двойные скобки (это не опечатка). Например:

    sum(1)(2) = 3
    sum(5)(-1) = 4
*/
function less38() {
    function first(a) {
        return function(b) {
            return a + b;
        }
    }
    console.log(first(5)(-1));
}

/*
    В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:

    Добавить значение в буфер.
    Получить текущее содержимое.
    Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

    Создание объекта: var buffer = makeBuffer();.
    Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.

    Вот пример работы:

    function makeBuffer() { Ваш Код}

    var buffer = makeBuffer();

    // добавить значения к буферу
    buffer('Замыкания');
    buffer(' Использовать');
    buffer(' Нужно!');

    // получить текущее значение
    alert( buffer() ); // Замыкания Использовать Нужно!
    Буфер должен преобразовывать все данные к строковому типу:

        var buffer = makeBuffer();
    buffer(0);
    buffer(1);
    buffer(0);

    alert( buffer() ); // '010'
    Решение не должно использовать глобальные переменные.
*/
function less39() {
    function makeBuffer() {
        let initValue = '';
        return function (word) {
            return initValue += word
        }
    }
    let buffer = makeBuffer();
    buffer('raz');
    buffer('dva');
    buffer('tri');
    console.log(buffer());
}

/*
    Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:
    function makeBuffer() {
      ...ваш код...
    }

    var buffer = makeBuffer();

    buffer("Тест");
    buffer(" тебя не съест ");
    alert( buffer() ); // Тест тебя не съест

    buffer.clear();

    alert( buffer() ); // ""
*/
function less40() {
    function makeBuffer() {
        let initValue = "";

        function buffer(word) {
            if (arguments.length === 0) {
                return initValue;
            }
            initValue += word;
        };

        buffer.clearValue = function() {
            initValue = "";
        }

        return buffer;
    }

    let buffer = makeBuffer();
    buffer("Test");
    buffer(" тебя не съест ");
    console.log(buffer());
    buffer.clearValue();
    console.log(buffer());
}

/*
    У нас есть массив объектов:

    Обычно сортировка по нужному полю происходит так:

    // по полю name (Вася, Маша, Петя)
    users.sort(function(a, b) {
      return a.name > b.name ? 1 : -1;
    });

    // по полю age  (Маша, Вася, Петя)
    users.sort(function(a, b) {
      return a.age > b.age ? 1 : -1;
    });

    Мы хотели бы упростить синтаксис до одной строки, вот так:

    users.sort(byField('name'));
    users.forEach(function(user) {
      alert( user.name );
    }); // Вася, Маша, Петя

    users.sort(byField('age'));
    users.forEach(function(user) {
      alert( user.name );
    }); // Маша, Вася, Петя

*/
function less41() {
    let users = [{
        name: "Вася",
        surname: 'Иванов',
        age: 20
    }, {
        name: "Петя",
        surname: 'Чапаев',
        age: 25
    }, {
        name: "Маша",
        surname: 'Медведева',
        age: 18
    }];

    function byField(field) {
        return function(a, b) {
            return a[field] > b[field] ? 1 : -1;
        }
    }

    users.sort(byField('name'));
    users.forEach(function(user) {
        console.log(( user.name ));
    });
}

/*
    Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
    Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
    filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
    filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.

*/
function less42() {

    let arr = [1, 2, 3, 4, 5, 6, 7];

    function filter(arr, func) {

    }

    function inBetween(a,b) {
    }

    console.log( filter(arr, inBetween(3, 6)) );

}

function introduceCanvas() {
    let example = document.getElementById("intro"),
        ctx = example.getContext('2d');
    example.height = 100;
    example.width = 300;
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
    ctx.stroke()
}
introduceCanvas();

// Завершающий шаг это вызовом метода stroke или fill.
function example1() {
    let canvas = document.getElementById('example1');
    let c = canvas.getContext('2d');
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
    let canvas = document.getElementById('example2');
    let c = canvas.getContext('2d');
    let data = [16, 68, 20, 30, 54, 20, 16, 68, 20, 30, 54, 20];
    c.fillStyle = "transparent";
    c.fillRect(0, 0, 500, 500)
    let gradCol = c.createRadialGradient(0, 0, 1, 100, 100, 300);
    gradCol.addColorStop(0, '#000');
    gradCol.addColorStop(1, '#f00');
    c.fillStyle = gradCol
    for (let i = 0; i < data.length; i++) {
        let dp = data[i];
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
    for (let i = 0; i < 6; i++) {
        c.fillText((5 - i) * 20 + "", 4, i * 80 + 60);
        c.beginPath();
        c.moveTo(25, i * 80 + 60);
        c.lineTo(30, i * 80 + 60);
        c.stroke();
    }
    let labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];
    for (let i = 0; i < labels.length; i++) {
        c.fillText(labels[i], 31 + i * 40, 475);
    }
}
example2();

// Круговая диаграмма
function example3() {
    let canvas = document.getElementById("example3");
    let c = canvas.getContext("2d");
    let data = [16, 68, 20, 30, 54];
    c.fillStyle = "transparent";
    c.fillRect(0, 0, 500, 500);
    let colors = ["orange", "green", "blue", "yellow", "teal"];
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i];
    }
    // Рисование настоящих секторов кажется сложным, но на самом деле это довольно легко. Каждый сектор начинается в центре круга (250,250), затем рисуется дуга от предыдущего угла до нового угла. Угол представляет собой данные конвертированные в радианы. Предыдущая угол — это угол от предыдущей итерации цикла (начиная с 0). Дуга с центром в 250,250 имеет радиус 100. Затем проводим линию обратно в центр, заливаем и обводим фигуру.
    let prevAngle = 0;
    for (let i = 0; i < data.length; i++) {
        // дoля, предстваленная сегементом
        let fraction = data[i] / total;
        // высисляем начальный угол
        let angle = prevAngle + fraction * Math.PI * 2;
        // Рисуем сегмент
        c.fillStyle = colors[i];
        // заливаем радиальным градиентом
        let grad = c.createRadialGradient(250, 250, 10, 250, 250, 100);
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
    let text = "Sales Data from 2025";
    let metrics = c.measureText(text);
    c.fillText(text, 250 - metrics.width / 2, 400);
}
example3();

// Opacity
function example4() {
    let canvas = document.getElementById("example4");
    let c = canvas.getContext("2d");
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
    let canvas = document.getElementById("example5");
    let c = canvas.getContext("2d");
    c.fillStyle = "red";
    c.translate(50, 50);
    let rads = 30 * Math.PI * 2.0 / 360.0;
    c.rotate(rads)
    c.fillRect(0, 0, 100, 100);
}
example5();

// Triangle mask
function example6() {
    let canvas = document.getElementById("example6");
    let c = canvas.getContext("2d");
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
    let canvas = document.getElementById("first-canvas");
    let c = canvas.getContext("2d");
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

// test snow
function example8() {
    let canvas = document.getElementById("example8"),
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
                color: "#FC9",
            });
        }
    }

    function updateParticles() {
        for (let i in particles) {
            let part = particles[i];
            part.y += part.speed;
        }
    }

    function killParticles() {
        for (let i in particles) {
            let part = particles[i];
            if (part.y > canvas.height) {
                part.y = 0;
            }
        }
    }

    function drawParticles() {
        let c = canvas.getContext('2d');
        c.fillStyle = "black";
        c.fillRect(0, 0, canvas.width, canvas.height);
        for (let i in particles) {
            let part = particles[i];
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
//example8();

// test draw triangle
function secondCanvas() {
    let canvas = document.getElementById('second-canvas');
    let c = canvas.getContext('2d');
    c.beginPath();
    c.moveTo(75, 50);
    c.lineTo(100, 75);
    c.lineTo(100, 25);
    c.fill();
}
secondCanvas();

// test draw smile
function thirdCanvas() {
    let canvas = document.getElementById('third-canvas');
    let c = canvas.getContext('2d');
    c.arc(100, 100, 100, 0, Math.PI * 2, true); // Внешний круг
    c.moveTo(180, 100);
    c.arc(100, 100, 80, 0, Math.PI, false) // Рот ( по часовой стрекле )
    c.moveTo(80, 80);
    c.arc(60, 73, 20, 0, Math.PI * 2, true) // Левый глаз
    c.moveTo(160, 75);
    c.arc(140, 73, 20, 0, Math.PI * 2, true) // Правый глаз
    c.moveTo(150, 75);
    c.arc(140, 73, 10, 0, Math.PI * 2, true) // Правый зрачок
    c.moveTo(73, 60);
    c.arc(60, 73, 10, 0, Math.PI * 2, true); // Правый зрачок
    c.stroke();
}
thirdCanvas();

// Different filled and stroke triangel also differenetn lineTo and moveTo
function fourthCanvas() {
    let canvas = document.getElementById('fourth-canvas');
    let c = canvas.getContext('2d');
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
    let canvas = document.getElementById('fifth-canvas');
    let c = canvas.getContext('2d');
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
    let ctx = document.getElementById('example9').getContext('2d');
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
                Math.floor(255 - 42.5 * j) + ')';
            ctx.beginPath();
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    }
}
example9();

// test canvas photos black\white
function sixCanvas() {
    let canvas = document.getElementById('six-canvas');
    let c = canvas.getContext('2d');
    let img = new Image();
    img.onload = function () {
        // Рисуем иозображение на холсте
        c.drawImage(img, 0, 0);
        // Получаем данные холста
        let data = c.getImageData(0, 0, canvas.width, canvas.height);
        // Инвертируем каждый пиксель
        for (let n = 0; n < data.width * data.height; n++) {
            let index = n * 4;
            data.data[index] = 255 - data.data[index];
            data.data[index + 1] = 255 - data.data[index + 1];
            data.data[index + 2] = 255 - data.data[index + 2];
            // Не трогайте альфу
        }
        // Воазвращем данные обратно
        c.putImageData(data, 0, 0);
    }
    img.src = '../../images/02.jpg';
    console.log(img);
}
sixCanvas();

/*
    Создайте объект calculator с тремя методами:

    read() запрашивает prompt два значения и сохраняет их как свойства объекта
    sum() возвращает сумму этих двух значений
    mul() возвращает произведение этих двух значений

    var calculator = {
      ...ваш код...
    }

    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );

*/
function less43() {

    let calculator = {
        a: 0,
        b: 0,
        c: 0,
        read: function () {
            this.a = +prompt('a?', '');
            this.b = +prompt('b?', '');
        },
        sum: function () {
            this.c = (this.a + this.b);
            alert(this.c);
        },
        mul: function () {
            alert(this.c * this.c);
        }
    }

    calculator.read();
    calculator.sum();
    calculator.mul();

}

/*
    Создать Calculator при помощи конструктора

    Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

    Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
    Метод sum() возвращает сумму запомненных свойств.
    Метод mul() возвращает произведение запомненных свойств.
    Пример использования:

    var calculator = new Calculator();
    calculator.read();

    alert( "Сумма=" + calculator.sum() );
    alert( "Произведение=" + calculator.mul() );
*/
function less44() {
    function Calculator() {
        this.read = function () {
            this.a = +prompt('a?','');
            this.b = +prompt('b?','');
        };
        this.summ = function () {
            return this.a + this.b;
        };
        this.mul = function () {
            return this.a * this.b
        }
    }

    let calculator = new Calculator();
    calculator.read();
    alert(calculator.summ());
    alert(calculator.mul());
}

/*
    Создайте калькулятор

    Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

    Эта задача состоит из двух частей, которые можно решать одна за другой.

    Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

    Пример использования:

    var calc = new Calculator;
    alert( calc.calculate("3 + 7") ); // 10

    Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

    Например, добавим операции умножить *, поделить / и возвести в степень **:

    var powerCalc = new Calculator;
    powerCalc.addMethod("*", function(a, b) {
      return a * b;
    });
    powerCalc.addMethod("/", function(a, b) {
      return a / b;
    });
    powerCalc.addMethod("**", function(a, b) {
      return Math.pow(a, b);
    });

    var result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8
    Поддержка скобок и сложных математических выражений в этой задаче не требуется.
    Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
    Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
*/

function less45() {
    function Calculator() { // создаем конструктор

        let methods = { // создаем объект, у него есть два метода: "-" и "+"
            "-": function(a, b) {
                return a - b; // этот метод возвращает разницу чисел
            },
            "+": function(a, b) {
                return a + b; // этот метод возвращает сумму чисел
            }
        };

        this.calculate = function(str) { // создаем метод конструктора

            let split = str.split(' '), // разбиваем нашу строку на массив, с разделителем " "
                a = +split[0], // в итоге у нас получится 3 элемента массива
                op = split[1], // это у нас будут свойства(их имена), в данной строке у нас op примет значение "+" или "-" в зависимости от начальной строки
                b = +split[2]

            if (!methods[op] || isNaN(a) || isNaN(b)) { // проверка на ошибки при разбивке строки на массив
                return NaN;
            }

            return methods[op](+a, +b); // наш метод конструктора возвращает результат вызова метода, созданного нами объекта methods,
            //т.е. methods[op] примет значение methods."-" или methods."+", а мы знаем что делает этот метод, т.к. сами написали что ему делать(см. выше)
        }

        this.addMethod = function(name, func) { // добавляем расширяемый метод для конструктора
            methods[name] = func; // methods[name] - это имя нашей операции, если в name мы впишем "*", то наш func сделает то, что написано в условии: return a * b;
        };
    }
}

/*
    Добавить get/set-свойства

    Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

    function User(fullName) {
      this.fullName = fullName;
    }

    var vasya = new User("Василий Попкин");
    Имя и фамилия всегда разделяются пробелом.

    Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

    var vasya = new User("Василий Попкин");

    // чтение firstName/lastName
    alert( vasya.firstName ); // Василий
    alert( vasya.lastName ); // Попкин

    // запись в lastName
    vasya.lastName = 'Сидоров';

    alert( vasya.fullName ); // Василий Сидоров
    Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. Лишнее дублирование здесь ни к чему.
*/

function less46() {
    function User(fullName) {
        this.fullName = fullName;

//        Object.defineProperty(this, "firstName", {
//            get: function() {
//                let spliting = fullName.split(" ");
//                return spliting[0];
//            }
//        });
//
//        Object.defineProperty(this, "lastName", {
//            get: function() {
//                let spliting = fullName.split(" ");
//                return spliting[1];
//            },
//            set: function() {
//                let spliting = fullName.split(" ");
//                return this.fullName = spliting[0] + spliting[1];
//            }
//        });

        Object.defineProperties(this, {

            firstName: {
                get: function() {
                    return this.fullName.split(' ')[0];
                },
                set: function(newFirstName) {
                    this.fullName = newFirstName + ' ' + this.lastName;
                }
            },

            lastName: {
                get: function() {
                    return this.fullName.split(' ')[1];
                },
                set: function(newLastName) {
                    this.fullName = this.firstName + ' ' + newLastName;
                }
            }
        });

    }
    
    let vasya = new User('Василий Попкин');

    console.log(vasya);
    console.log(vasya.firstName);
    console.log(vasya.lastName);
    vasya.lastName = 'Сидоров';
    console.log(vasya.fullName);
    
}
less46();