// 🏠 Домашнє завдання: Лінійні алгоритми
// Задача 1. Середнє арифметичне
// Користувач вводить два числа. Знайди та виведи їх середнє арифметичне.
// Формула: (a + b) / 2

// a = prompt("Введіть перше число:");
// b = prompt("Введіть друге число:");

// sun = (a + b) / 2;
// console.log("Середнє арифметичне:", sun);

// ============================================================================================================================

// Задача 2. Периметр квадрата
// Користувач вводить довжину сторони квадрата. Обчисли периметр.
// Формула: P = 4 * a

// a = prompt("Введіть довжину сторони квадрата:");
// p = 4 * a;
// console.log("Периметр квадрата:", p);

// ============================================================================================================================

// Задача 3. Конвертер часу
// Користувач вводить кількість хвилин. Вивести, скільки це годин і хвилин.
// Наприклад: 125 хв = 2 год 5 хв

// const minuts = prompt("Введіть кількість хвилин:");
// const hours = Math.floor(minuts / 60);
// console.log("Години:", hours);

// =========================================================================================================================

// Задача 4. Вартість поїздки
// Користувач вводить:
// кількість кілометрів,
// витрату пального на 100 км,
// ціну за 1 літр бензину.
// Обчисли вартість поїздки.
// Формула: вартість = (кілометри / 100) * витрата * ціна

// const kilometers = prompt("Введіть кількість кілометрів:");
// const fuelConsumption = prompt("Введіть витрату пального на 100 км:");
// const fuelPrice = prompt("Введіть ціну за 1 літр бензину:");
// const cost = (kilometers / 100) * fuelConsumption * fuelPrice;
// console.log("Вартість поїздки:", cost, "грн");

// ==========================================================================================================================

// Задача 5. Швидкість руху
// Користувач вводить відстань (км) і час (год). Вивести швидкість.
// Формула: v = s / t

// const distance = prompt("Введіть відстань (км):");
// const time = prompt("Введіть час (год):");
// const speed = distance / time;
// console.log("Швидкість руху:", speed, "км/год");

// ==========================================================================================================================

// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці

// const num1 = parseFloat(prompt("Введіть перше дійсне число:"));
// const num2 = parseFloat(prompt("Введіть друге дійсне число:"));
// const sum = num1 + num2;

// const product = num1 * num2;
// const quotient = num1 / num2;
// console.log("Результати обчислень:");
// console.log("Сума:", sum);
// console.log("Добуток:", product);
// console.log("Частка:", quotient);
// ===========================================================================================================================

// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

// const birthYear = parseInt(prompt("Введіть рік народження (1 січня):"));
// const currentYear = parseInt(prompt("Введіть поточний рік:"));
// const age = currentYear - birthYear;
// console.log("Вам", age, "років.");
// ===========================================================================================================================

// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

// let unitPrise = parseFloat(prompt("Введіть вартість одиниці товару:"));
// let quantity = parseInt(prompt("Введіть кількість товару:"));
// let totalCost = unitPrise * quantity;
// let vat = totalCost * 5;
// console.log("Загальна вартість:", totalCost, "грн");
// ==========================================================================================================================

// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

// let lengthInCm = parseFloat(prompt("Введіть довжину у сантиметрах:"));
// let meters = lengthInCm / 100;
// let kilometers = lengthInCm / 100000;

// console.log(meters, "метрів");
// console.log(kilometers, "кілометрів");
function avgMark() {
  let m1 = Number(document.getElementById("mark1").value);
  let m2 = Number(document.getElementById("mark2").value);
  let avg = (m1 + m2) / 2;
  document.getElementById("res1").innerText = "Середня оцінка: " + avg;
}

function perimeter() {
  let s = Number(document.getElementById("side").value);
  let p = 4 * s;
  document.getElementById("res2").innerText = "Периметр: " + p + " м";
}

function convertTime() {
  let min = Number(document.getElementById("minutes").value);
  let h = Math.floor(min / 60);
  let m = min % 60;
  document.getElementById("res3").innerText =
    min + " хв = " + h + " год " + m + " хв";
}

function tripCost() {
  let d = Number(document.getElementById("distance").value);
  let f = Number(document.getElementById("fuel").value);
  let p = Number(document.getElementById("price").value);
  let cost = (d / 100) * f * p;
  document.getElementById("res4").innerText =
    "Вартість: " + cost.toFixed(2) + " грн";
}

function avgSpeed() {
  let d = Number(document.getElementById("dist").value);
  let t = Number(document.getElementById("time").value);
  let v = d / t;
  document.getElementById("res5").innerText =
    "Середня швидкість: " + v.toFixed(2) + " км/год";
}
