// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with

// Получаем ваши шорты - это тренировка массива!
// ## Array Cardio День 1
// Некоторые данные, с которыми мы можем работать

'use strict';

var inventors = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

console.log(inventors);
console.log(people);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// 1. Отфильтровать список изобретателей для тех, кто родился в 1500-х годах
//var filterInvetors = inventors.filter(function () {
//    return inventors.year
//    return array
//        .filter(function(values, item){
//            return (item.key === search)
//        })
//});
//console.log(filterInvetors);
function getYear(array, search) {
    return array.filter(function (values, item) {
        return item.key === search;
    });
}
console.log(getYear(inventors, 1571));

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// 2. Дайте нам массив имен и фамилий изобретателей

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// 3. Сортируйте изобретателей по дате рождения, от старейших до самых молодых

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// 4. Сколько лет жили все изобретатели?

// 5. Sort the inventors by years lived
// 5. Сортировка изобретателей по годам

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// 6. Создаем список бульваров в Париже, которые содержат 'de' в любом месте названия
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// 7. Сортировка Упражнение
// Sort the people alphabetically by last name
// Сортировка людей по алфавиту по фамилии

// 8. Reduce Exercise
// 8. Сокращение упражнений
// Sum up the instances of each of these
// Объединяем экземпляры каждого из этих

var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];