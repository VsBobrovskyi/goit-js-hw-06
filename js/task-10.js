// Напиши скрипт створення і очищення колекції елементів. Користувач вводить 
// кількість елементів в input і натискає кнопку Створити, після чого рендериться 
// колекція. Натисненням на кнопку Очистити, колекція елементів очищається.


// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй 
// готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
//  всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const numberEl = document.querySelector(`input`);
// console.log(numberEl)
const buttonCreate = document.querySelector(`[data-create]`);
// console.log(buttonCreate)
const buttonDestroy = document.querySelector(`[data-destroy]`);
// console.log(buttonCreate)
const boxes = document.querySelector(`#boxes`);
// console.log(boxes)

let numberBox = [];

numberEl.addEventListener("input", (event) => {
  // boxes.innerHTML = "";
  numberBox.push(event.target.value);
  // console.log(boxes)
  // return numberBox;
});

// const createBoxes = (amount) => {
//   amount = numberBox;
//   amount.map(
//     (item) =>
//       (boxes.innerHTML += `<div style="width: ${
//         +20 + (item *= 10)
//       }px; height: ${
//         +20 + item
//       }px; background-color: ${getRandomHexColor()}"></div>`)
//   );
//   numberBox = [];
//   numberEl.value = "";
// };


//???


// const createBoxes = () => {
//   numberBox.map((item) => boxes.innerHTML += `<div style="width: ${
//             +20 + (item *= 10)
//           }px; height: ${
//             +20 + item
//           }px; background-color: ${getRandomHexColor()}"></div>`)
//           // numberBox = [];
//           numberEl.value = "";
// }

//???

const createBoxes = () => {
  numberBox.map((item) => boxes.innerHTML += `<div style="width: ${
            +20 + (item *= 10)
          }px; height: ${
            +20 + item
          }px; background-color: ${getRandomHexColor()}"></div>`);
          // numberBox = [];
          numberEl.value = "";
}


// ulEl.insertAdjacentHTML('afterbegin', createRows);

buttonCreate.addEventListener("click", createBoxes);

buttonDestroy.addEventListener("click", (event) => {
  boxes.innerHTML = "";
  // document.location.reload();
});

// document.addEventListener("keydown", (event) => {
//   event.returnValue = false;
// });