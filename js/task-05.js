const inputEl = document.getElementById('name-input');
console.log(inputEl);

const valueEl = document.getElementById('name-output');
console.log(valueEl);

  inputEl.addEventListener('input', InputChange);

  function InputChange(event) {
   
    valueEl.textContent = event.currentTarget.value;
    if (valueEl.textContent === "") {
      valueEl.textContent = 'Anonymous'
    }
  }


//   inputEl.addEventListener("input", (event) => {
//     event.currentTarget.value === "" 
//     ? spanEl.textContent = "Anonymous" 
//     : spanEl.textContent = event.currentTarget.value
// });