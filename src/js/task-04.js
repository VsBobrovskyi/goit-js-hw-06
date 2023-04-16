let counterValue = 0;

const rezult = document.getElementById('value')
const btnIncrement = document.querySelector('[data-action="increment"]');
console.log(btnIncrement);
const btnDecrement = document.querySelector('[data-action="decrement"]');
console.log(btnDecrement);

const plusOne = () => {
  counterValue += 1;
  return rezult.textContent = counterValue;
}

const minusOne = () => {
  counterValue -= 1;
  return rezult.textContent = counterValue;
}

console.log(counterValue);
console.log(rezult);

btnIncrement.addEventListener('click', plusOne);
btnDecrement.addEventListener('click', minusOne);