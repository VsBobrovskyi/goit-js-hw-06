const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const { length } = input.dataset;
  let str = input.value.trim();

  if (Number(length) === str.length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
