/*Задание: Работа с массивами в JavaScript
Задание 1: Найти сумму всех элементов массива
Напишите функцию sumArray , которая принимает массив чисел и возвращает сумму всех
элементов. Реализуйте это с помощью цикла for .*/
let numbers = [1, 2, 3, 4, 5]; // Пример массива
// Напишите функцию здесь
function sumArray(arr) {
    let sum = 0;
    // Реализация через цикл for
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumArray(numbers)); // Пример вывода: 15


/*Задание 2: Найти максимальный элемент массива
Напишите функцию findMax , которая принимает массив чисел и возвращает максимальный
элемент. Используйте цикл for .*/
let numbersMax = [3, 1, 4, 1, 5, 9]; // Пример массива
// Напишите функцию здесь
function findMax(arr) {
    let max = arr[0]; // берем первый элемент массива
    // Реализация через цикл for
    for (let i = 0; i < numbersMax.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < numbersMax[i]) max = numbersMax[i];
    }
    // возвращаем максимальное значение
    return max;
}

console.log(findMax(numbersMax)); // Пример вывода: 9


/*Задание 3: Фильтрация массива по условию
Создайте функцию filterArray , которая принимает массив чисел и возвращает новый
массив, содержащий только четные числа. Реализуйте это с использованием цикла for .*/
let numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Пример массива
// Напишите функцию здесь
function filterArray(arr) {
    // Реализация через цикл for
    let even = [];
    for (let i = 0; i < numbersFilter.length; i++) {
        if (numbersFilter[i] % 2 === 0) even.push(numbersFilter[i]);
    }
    return even;
}

console.log(filterArray(numbersFilter)); // Пример вывода: [2, 4, 6, 8]


/*Задание 4: Реализация метода массива "map" через цикл
Напишите функцию mapArray , которая принимает массив и функцию-преобразователь. Эта
функция должна возвращать новый массив, где каждый элемент является результатом
применения функции-преобразователя к каждому элементу исходного массива. Реализуйте
это с использованием цикла.*/
let numbersMap = [1, 2, 3, 4, 5]; // Пример массива
// Пример функции-преобразователя:
function multiplyByTwo(num) {
    return num * 2;
}
// Напишите функцию здесь
function mapArray(arr, callback) {
// Реализация через цикл for
let resultMap = [];
for (let i = 0; i < arr.length; i++) {
    resultMap.push(callback(arr[i], i, arr));
}
return resultMap;
}

console.log(mapArray(numbersMap, multiplyByTwo)); // Пример вывода: [2, 4, 6, 8, 10]

/*
Задание 5: Реализация метода массива "forEach" через цикл
Создайте функцию forEachArray , которая принимает массив и функцию, и применяет эту
функцию к каждому элементу массива. Реализуйте это с использованием цикла for .*/
let numbersEach = [1, 2, 3, 4, 5]; // Пример массива
// Пример функции для вывода:
function printElement(element) {
console.log(element);
}
// Напишите функцию здесь
function forEachArray(arr, callback) {
// Реализация через цикл for
for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
}
}
forEachArray(numbersEach, printElement); // Пример вывода: 1 2 3 4 5 (по одному числу на строку)


/*Задание 6: Развернуть массив
Напишите функцию reverseArray , которая принимает массив и возвращает его развернутую
версию. Реализуйте это без использования встроенного метода reverse , используя цикл
for .*/
let numbersReverse = [1, 2, 3, 4, 5]; // Пример массива
// Напишите функцию здесь
function reverseArray(arr) {
// Реализация через цикл for
let reverseArr = [];
for (let i = numbersReverse.length - 1; i >= 0; i--) {
    reverseArr.push(numbersReverse[i]);
}
return reverseArr;
}
console.log(reverseArray(numbersReverse)); // Пример вывода: [5, 4, 3, 2, 1 ]*/