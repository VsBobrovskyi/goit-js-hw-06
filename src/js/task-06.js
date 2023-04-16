// const refInput = document.getElementById('validation-input');
// console.log(refInput);

// refInput.addEventListener('blur', onBlur);

// function onBlur() {
//   console.log('блюр');
//   if(refInput.getAttribute('data-length') === refInput.value.length)
//    {
//     refInput.classList.remove('valid');
//     refInput.classList.add('invalid');
    
//   }
//   else {
//     refInput.classList.remove('invalid');
//     refInput.classList.add('valid');
//   }
// };

// console.log(refInput.getAttribute('data-length'))
// console.log(refInput.value.length)





const input = document.querySelector("#validation-input");

input.addEventListener('blur', () => { 
  const { length } = input.dataset
  let str = input.value.trim()

  if (Number(length) === str.length) {
    input.classList.remove('invalid')
    input.classList.add('valid')
  } else { 
    input.classList.remove('valid')
    input.classList.add('invalid')
  }
})