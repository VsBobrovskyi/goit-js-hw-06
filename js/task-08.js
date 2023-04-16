const loginFormEl = document.querySelector('.login-form');

const emailEl = loginFormEl.elements.email.value;
loginFormEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const email = loginFormEl.elements.email.value;
  const password = loginFormEl.elements.password.value;
  const formData = { email, password };

  if (email === '' || password === '') {
    alert('поля повинні бути заповнені');
  } else {
    console.log(formData);
    loginFormEl.reset();
  }
}
