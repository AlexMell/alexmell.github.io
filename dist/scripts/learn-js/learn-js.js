'use strict';
/*
 First lesson learn.js.ru (Variables)
 */
var admin, name;
name = 'vasiliy';
admin = name;
/*
 Second lesson learn.js.ru (Variables)
 */
var planet = 'Earth';
var ourPlanetEarth = 'Earth';
var person = 'Petya';
var userName = 'Petya';
/*
 Types dates JS (Sorax)
 */
var obj = {};
obj = 'str';
/*
 Lesson from learn.js.ru (if else)
 */
function less1() {
    var question = prompt('Какое оффициальное название JavaScript?', '');
    question = question === 'EcmaScript' ? console.log('Верно!') : console.log('Не знаешь ? Дебил!');
}
/*
 Lesson from learn.js.ru (if else)
 */
function less2() {
    var numberQuestion = +prompt('Число?', '');
    numberQuestion = numberQuestion > 0 ? console.log('1') : numberQuestion < 0 ? console.log('-1') : numberQuestion === 0 ? console.log('0') : console.log('asd');
}
/*
 Lesson from learn.js.ru (if else)
 */
function less3() {}
// var result,
// result = a + b < 4 ? 'Мало' : 'Много';

/*
 Lesson from learn.js.ru (if else)
 */
function less4() {
    var login = '';
    if (login == 'Вася') {
        message = 'Привет';
    } else if (login == 'Директор') {
        message = 'Здравствуйте';
    } else if (login == '') {
        message = 'Нет логина';
    } else {
        message = '';
    }
}
/*`
 Lesson from learn.js.ru (if else)
 */
function less5() {
    login == 'Вася' ? message = 'Привет' : login == 'Директор' ? message = 'Здравсвувйте' : login == '' ? message = 'Нет логина' : message = '';
    var message = login == 'Вася' ? 'Привет' : login == 'директор' ? 'Здравсуйте' : login == '' ? 'Нет логина' : '';
}
/*
    Lesson from learn.js.ru (Type compare primitive);
 */
// var a = +'123';
// var a = +NaN;
// var a = +'undefined';
// var a = +null;
var a = +true;
console.log(a);
console.log(typeof a);

/*
    Lesson from learn.js.ru (Type compare primitive);
 */

console.log("" - 1 + 0);
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