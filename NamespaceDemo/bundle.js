// Task 14. Using Namespaces
// 1.	Создайте папку для нового проекта NamespaceDemo
// 2.	Создайте файл utility-functions.ts
// 3.	Создайте пространство имен Utility
// 4.	Создайте вложенное пространство имен Fees
// 5.	Создайте и экспортируйте функцию CalculateLateFee() во вложенном пространстве имен, которая принимает числовой параметр daysLate и возвращает fee, вычисленное как daysLate * .25;
// 6.	Создайте и экспортируйте функцию MaxBooksAllowed() в пространстве имен Utility, которая принимает один числовой параметр age. Если age< 12, то возвращает 3 иначе 10.
// 7.	Создайте функцию privateFunc(), которая выводит в консоль сообщение «This is private»
// 8.	Создайте файл app.ts. Добавьте ссылку на файл utility-functions.ts
// 9.	Напишите фрагмент кода, который использует функции и пространства имен.
// 10.	Используйте ключевое слово import и объявите алиас util для вложенного пространства имен. import util = Utility.Fees;
// 11.	Запустите компилятор и скомпилируйте только app.ts, указав опцию --target ES5. Создайте index.html и подключите скомпилированные файлы, так чтобы приложение было последним.
// 12.	Запустите еще раз компилятор и укажите опцию --outFile bundle.js app.ts
// 13.	Запустите полученный файл с помощью команды node bundle.js
var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is private');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var util = Utility.Fees;
console.log(util.calculateLateFee(10));
console.log(Utility.maxBooksAllowed(3));
