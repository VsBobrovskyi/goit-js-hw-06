const btnEl = document.querySelector('.change-color');

const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', getRandomHexColor);

btnEl.addEventListener('click', changeColor);

function changeColor() {
  colorEl.textContent = `${getRandomHexColor()}`;

  document.body.style.backgroundColor = `${colorEl.textContent}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
