// let a = 10;
// let b = 3;

// console.log(a + b); // додавання → 13
// console.log(a - b); // віднімання → 7
// console.log(a * b); // множення → 30
// console.log(a / b); // ділення → 3.333...
// console.log(a % b); // остача від ділення → 1
// console.log(a ** b); // піднесення до степеня → 1000

// console.log(5 > 3); // true
// console.log(5 < 3); // false
// console.log(5 >= 5); // true
// console.log(5 == "5"); // true (нестроге порівняння)
// console.log(5 === "5"); // false (строге порівняння)
// console.log(5 != 4); // true

// i = 5;
// b = i++ - 2;
// console.log(b, i);
// a = 5;
// b = 7;
// c = a++ - b--;
// console.log(c, a, b); // c = -2, a = 6, b = 6

// let x = true;
// let y = false;

// console.log(x && y); // AND → false
// console.log(x || y); // OR → true
// console.log(!x); // NOT → false

// let number = parseInt(prompt("Введіть ваш вік:"));
// let mainContent = document.getElementById("main-content");
// let mainNoContent = document.getElementById("main-no-content");
// let mainnumber = /^\d+$/;
// if (number < 18) {
//   mainContent.style.display = "none";
//   mainNoContent.style.display = "block";
// } else {
//   mainContent.style.display = "block";
//   mainNoContent.style.display = "none";
// }

// =================================================================================
// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
function compareCandies() {
  let child1 = document.getElementById("child1").value;
  let child2 = document.getElementById("child2").value;
  let candies1 = Number(document.getElementById("candies1").value);
  let candies2 = Number(document.getElementById("candies2").value);

  let resultText;

  if (candies1 > candies2) {
    resultText = child1 + " має більше цукерок.";
  } else if (candies1 < candies2) {
    resultText = child2 + " має більше цукерок.";
  } else {
    resultText = "Кількість цукерок однакова.";
  }

  document.getElementById("res2").innerText = resultText;
}

// =================================================================================

// const number = parseInt(prompt("Введіть ваш вік:"));
// const minnumber = 32;
// const maxnumber = 45;

// if (number >= minnumber && number <= maxnumber) {
//   console.log(`ok`);
// } else {
//   console.log(`no`);
// }

// =================================================================================

// Користувач вводить два числа і вибирає операцію (+, -, *, /). Вивести результат.

// const n1 = parseInt(prompt("Введіть перше число:"));
// const n2 = parseInt(prompt("Введіть друге число:"));
// const n3 = prompt("Виберіть операцію (+, -, *, /):");
// let result;
// if (n3 === "+") {
//   result = n1 + n2;
// } else if (n3 === "-") {
//   result = n1 - n2;
// } else if (n3 === "*") {
//   result = n1 * n2;
// } else if (n3 === "/") {
//   if (n2 !== 0) {
//     result = n1 / n2;
//   } else {
//     result = "Ділення на нуль неможливе!";
//   }
// }

// console.log(`Результат: ${result}`);

// =================================================================================
// document.getElementById("calcBtn").addEventListener("click", function () {
//   let price = Number(document.getElementById("price").value);
//   let quantity = Number(document.getElementById("quantity").value);

//   let total = price * quantity; // арифметика
//   let delivery = 100;

//   // логіка з умовами
//   if (total >= 1000) {
//     delivery = 0; // безкоштовна доставка
//   }

//   document.getElementById("total").textContent = `Сума: ${total} грн`;
//   document.getElementById("delivery").textContent =
//     delivery === 0
//       ? "🚚 Доставка безкоштовна!"
//       : `🚚 Доставка: ${delivery} грн`;
// });
// // =================================================================================
document.getElementById("calcBtn").addEventListener("click", function () {
  let price = Number(document.getElementById("price").value);
  let quantity = Number(document.getElementById("quantity").value);
  let deliveryType = document.getElementById("deliveryType").value;

  let total = price * quantity;
  let number;

  // Використання switch
  switch (deliveryType) {
    case "nova":
      number = 70;
      break;
    case "ukr":
      number = 50;
      break;
    case "courier":
      number = 120;
      break;
    case "pickup":
      number = 0;
      break;
    default:
      number = 0;
  }

  // бонус: якщо замовлення ≥ 1000 грн → доставка безкоштовна
  if (total >= 1000) {
    number = 0;
  }

  document.getElementById("total").textContent = `Сума: ${total} грн`;
  document.getElementById("delivery").textContent =
    number === 0
      ? "🚚 Доставка безкоштовна!"
      : `🚚 Вартість доставки: ${number} грн`;
});
// =================================================================================
//З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
// let price = parseFloat(prompt("Введіть ціну товару:"));
// let money = parseFloat(prompt("Введіть кількість грошей:"));

// if (money < price) {
//   alert("Вибачте, у вас недостатньо грошей для покупки.");
// } else {
//   alert("Покупка успішна!");

//   let lotteryCost = 4;
//   if (money - price >= lotteryCost) {
//     alert("Ви можете купити лотерею за 4 грн!");
//   } else {
//     alert("На лотерею не вистачає грошей.");
//   }
// }
// =================================================================================
// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// let number = parseFloat(print(`ведіть число`));

// if (number === randomNumber) {
//   console.log("Вітаємо! Ви вгадали число!");
// } else {
//   console.log("Невірно! Спробуйте ще раз.");
//   number = parseFloat(prompt(`Введіть число ще раз`));
//   if (number === randomNumber) {
//     console.log("Вітаємо! Ви вгадали число з другої спроби!");
//   } else {
//     console.log(`На жаль, ви не вгадали. Загадане число було: ${randomNumber}`);
//   }
// }

// let randomNumber = 1 + Math.floor(Math.random() * 5);
// let number = parseInt(prompt(`ведіть число`));

// if (number === randomNumber) {
//   alert("Вітаємо! Ви вгадали число!");
// } else {
//   number = parseInt(prompt(`Не вгадав, спробуйте ще`));
//   if (number === randomNumber) alert("Вітаємо! Ви вгадали число!");
//   else alert(`Не вгадав, число було: ${randomNumber}`);
// }

// =================================================================================
// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
// const number = parseInt(prompt("Введіть ваш вік:"));
// let result;

// switch (true) {
//   case isNaN(number) || number < 0:
//     result = "некоректний вік";
//     break;
//   case number >= 3 && number <= 6:
//     result = "Дитина у садочку";
//     break;
//   case number >= 7 && number <= 17:
//     result = "школяр";
//     break;
//   case number >= 18 && number <= 23:
//     result = "студент";
//     break;
//   case number >= 24 && number <= 59:
//     result = "працівник";
//     break;
//   case number >= 60:
//     result = "пенсіонером";
//     break;
//   default:
//     result = "некоректний вік";
//     break;
// }
// alert(`Ви є: ${result}`);

// const userAge = parseInt(prompt(`Ведіть вік`));
// let userStatus;

// if (userAge < 7) userStatus = " у садочку";
// else if (userAge <= 17) userStatus = " у школі";
// else if (userAge >= 17 && userAge <= 22) userStatus = " студент";
// else if (userAge >= 23 && userAge <= 64) userStatus = " працівник";
// else if (userAge >= 65) userStatus = "  пенсіонером";

// alert(`має статус: ${userStatus}`);

// =================================================================================
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.

// const driverCategories = prompt(
//   `Ведіть назву категорії водія, A B C`
// ).toUpperCase();

// let Categories;

// if (driverCategories === `A`) Categories = `А-мотоцикл`;
// else if (driverCategories === `B`) Categories = `В-легковий автомобіль`;
// else if (driverCategories === `C`) Categories = ` С-вантажний автомобіль`;
// else if ((driverCategories != `A`, `B`, `C`))
//   Categories = `Некоректне значиння`;
// alert(`має статус: ${Categories}`);
// =================================================================================
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

// const dayNumber = parseInt(prompt(`Ведіть номер дня тижня`));
// let statusDey;
// switch (dayNumber) {
//   case 1:
//     statusDey = `Понеділок`;
//     break;
//   case 2:
//     statusDey = `Вівторок`;
//     break;
//   case 3:
//     statusDey = `Середа`;
//     break;
//   case 4:
//     statusDey = `Четвер`;
//     break;
//   case 5:
//     statusDey = `П'ятниця`;
//     break;
//   case 6:
//     statusDey = `Вихідний Субота `;
//     break;
//   case 7:
//     statusDey = `Вихідний Неділя `;
//     break;

//   default:
//     statusDey = `Некоректний деть `;
//     break;
// }

// alert(`Сьогодні ${statusDey}`);
// =================================================================================
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
// Весна: Березень, Квітень, Травень.
// Літо: Червень, Липень, Серпень.
// Осінь: Вересень, Жовтень, Листопад.
// Зима: Грудень, Січень, Лютий.

// const monthNumber = parseInt(prompt(`ведіть номер місяця`));

// let statusMonth;
// switch (monthNumber) {
//   case 1:
//   case 2:
//   case 12:
//     statusMonth = "Зима";
//     break;
//   case 3:
//   case 4:
//   case 5:
//     statusMonth = "Весна";
//     break;
//   case 6:
//   case 7:
//   case 8:
//     statusMonth = "Літо";
//     break;
//   case 9:
//   case 10:
//   case 11:
//     statusMonth = "Осінь";
//     break;
//   default:
//     statusMonth = "Некоректне ведення";
//     break;
// }

// alert(`Зараз ${statusMonth}`);
// =================================================================================
// const n1 = parseFloat(prompt(`num1`));
// const n2 = parseFloat(prompt(`num2`));
// let BigNum;

// if (n1 > n2) {
//   BigNum = n1;
// } else {
//   BigNum = n2;
// }

// alert(`білше число ${BigNum}`);

// let num1 = parseFloat(prompt(`num1`));
// let num2 = parseFloat(prompt(`num2`));
// let MaxNum;
// if (num1 === num2) alert(`не зайбуй`);
// else if (num1 > num2) {
//   num1 = 0;
// } else {
//   num2 = 0;
//   alert(`число#1 ---${num1}---
// 	число#2 ---${num2}---`);
// }

// let num1 = parseFloat(prompt(`num1`));
// let num2 = parseFloat(prompt(`num2`));
// let num3 = parseFloat(prompt(`num3`));
// const average = (num1 + num2 + num3) / 3;
// if (num1 > average) num1 = 0;
// if (num2 > average) num2 = 0;
// if (num3 > average) num3 = 0;
// alert(`${num1} ${num2} ${num3}`);

// =================================================================================
