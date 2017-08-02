'use strict';
/*
 First lesson learn.js.ru (Variables)
 */
function less1() {
    var admin, name;
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
    question = question === 'EcmaScript' ? console.log('Верно!') : console.log('Не знаешь ? Дебил!');
}

/*
 Lesson from learn.js.ru (if else)
 */
function less5() {
    var numberQuestion = +prompt('Число?', '');

    numberQuestion = numberQuestion > 0 ? console.log('1') : numberQuestion < 0 ? console.log('-1') : numberQuestion === 0 ? console.log('0') : console.log('asd');

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

    var message = login == 'Вася' ? 'Привет' : login == 'директор' ? 'Здравсуйте' : login == '' ? 'Нет логина' : '';

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
    var i = 3;
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
    var i = 0;
    while (++i < 5) alert(i);
    // 1,2,3,4,5

    // Постфиксный вариант
    var a = 0;
    while (a++ < 1) alert(a);
    // 0,1,2,3,4
}

/*
    Lesson from learn.js.ru (For and Switch )
    При помощи цикла for выведите числа от 2 до 10.
 */
function less13() {
    for (var i = 2; i <= 10; i++) {
        console.log(i);
    }
}

/*
    Lesson from learn.js.ru (For and Switch ) 
    При помощи цикла for выведите чётные числа от 2 до 10.
 */
function less14() {
    for (var i = 0; i <= 10; i++) {
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
    return age > 18 ? true : prompt('Родители разрешили ?', '');
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
    var c = x;
    for (var i = 1; i < n; i++) {
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
        surname: 'petrov'
    };

    user.name = 'sergey';
    delete user.name;
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
        summ += salaries[key];
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
    goods[goods.length] = 'Компьютерasd';
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
    styles[styles.length - 2] = "Классика";
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
    };
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

        return classes;
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

    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    console.log(result);
}

/*
    Напишите counter
*/
function less36() {

    function needCounter() {
        var thisCount = 1;
        return function () {
            return thisCount++;
        };
    }

    var fromCounter = needCounter();
    console.log(fromCounter());
    console.log(fromCounter());
    console.log(fromCounter());
    console.log(fromCounter());
}

/*
    Напишите counter
*/