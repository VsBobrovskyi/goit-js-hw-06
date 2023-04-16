let counterValue = 0;

const rezult = document.getElementById('value');
const btnIncrement = document.querySelector('[data-action="increment"]');

const btnDecrement = document.querySelector('[data-action="decrement"]');

const plusOne = () => {
  counterValue += 1;
  return (rezult.textContent = counterValue);
};

const minusOne = () => {
  counterValue -= 1;
  return (rezult.textContent = counterValue);
};

btnIncrement.addEventListener('click', plusOne);
btnDecrement.addEventListener('click', minusOne);
