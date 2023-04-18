function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');

const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();

  colorEl.textContent = color;
  document.body.style.backgroundColor = color;
}
