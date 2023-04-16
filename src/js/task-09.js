

// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку на button.change-color і виводить значення кольору в 
// span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
// console.log(getRandomHexColor);
const btnEl = document.querySelector('.change-color');


let colorEl = document.querySelector('.color');
console.log(colorEl);

btnEl.addEventListener('click', getRandomHexColor);


function getRandomHexColor() {
  colorEl.textContent =  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
};



// btnEl.addEventListener('click', changeColor);
// function changeColor() {
//   colorEl.textContent = `${getRandomHexColor()}`;
//   document.body.style.backgroundColor = `${getRandomHexColor()}`
// }

