function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberEl = document.querySelector(`input`);

const buttonCreate = document.querySelector(`[data-create]`);

const buttonDestroy = document.querySelector(`[data-destroy]`);

const boxes = document.querySelector(`#boxes`);

let numberBox = [];

numberEl.addEventListener('input', event => {
  boxes.innerHTML = '';
  numberBox.push(event.target.value);
});

const createBoxes = () => {
  numberBox.map(
    item =>
      (boxes.innerHTML += `<div style="width: ${
        +20 + (item *= 10)
      }px; height: ${
        +20 + item
      }px; background-color: ${getRandomHexColor()}"></div>`)
  );
  numberBox = [];
  numberEl.value = '';
};

buttonCreate.addEventListener('click', createBoxes);

buttonDestroy.addEventListener('click', event => {
  boxes.innerHTML = '';
});
