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