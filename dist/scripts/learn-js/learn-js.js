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