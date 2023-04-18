function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  inpNum: document.querySelector('input'),
  placeDiv: document.getElementById('boxes'),
};

refs.btnCreate.addEventListener('click', onCreate);
refs.btnDestroy.addEventListener('click', onDestroy);

function onCreate() {
  let amount = refs.inpNum.value;
  if (!amount || amount === '0') {
    alert('Please input a value!');
    return;
  }
  if (amount > 100) {
    amount = 100;
  }
  refs.placeDiv.innerHTML = '';
  const divTree = createBoxes(amount);
  refs.placeDiv.insertAdjacentHTML('beforeend', [...divTree].join(''));
}

function createBoxes(amount) {
  let markup = [];
  for (let i = 0; i < amount; i +=1 ) {
    markup.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${
        10 * i + 30
      }px; height: ${10 * i + 30}px"></div>`
    );
  }
  return markup;
}

function onDestroy() {
  if (refs.placeDiv.innerHTML) {
    refs.placeDiv.innerHTML = '';
    refs.inpNum.value = '';
  }
}
