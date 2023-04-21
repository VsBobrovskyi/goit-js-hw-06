const inputEl = document.getElementById('name-input');

const valueEl = document.getElementById('name-output');

inputEl.addEventListener('input', InputChange);

function InputChange(event) {
  valueEl.textContent = event.currentTarget.value;
  if (valueEl.textContent.trim() === '') {
    valueEl.textContent = 'Anonymous';
  }
}
