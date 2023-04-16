
// 1. Обробка відправлення форми form.login-form повинна відбуватися
//  відповідно до події submit.

// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.

// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
// що всі поля повинні бути заповнені.

// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів 
// в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - 
// значенням властивості. Для доступу до елементів форми використовуй властивість
//  elements.

//  5. Виведи об'єкт із введеними даними в консоль і очисти значення полів 
//  форми методом reset.


// const inputsEl = document.querySelectorAll('input');


const loginFormEl = document.querySelector('.login-form');
console.log(loginFormEl);
const emailEl = loginFormEl.elements.email.value;
loginFormEl.addEventListener ('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();
  const email = loginFormEl.elements.email.value;
const password = loginFormEl.elements.password.value;
const formData = {email, password};

if (email === '' || password === '') {
  alert ('поля повинні бути заповнені')
}
 else {
  console.log(formData);
}
loginFormEl.reset();
  
  // console.log('це сабміт форми');

// !! FormData дозволяє зібрати всі елементи форми, вона заміняє 30-33 строки

// const formData = new FormData(event.carrentTarget);
// console.log(formData);
}

// const btnEl = document.querySelector('button');


// console.log(btnEl);
console.dir(loginFormEl.elements);
console.dir(loginFormEl.elements.email);
console.dir(loginFormEl.elements.password);
// console.log(inputsEl);


