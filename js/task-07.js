const fontSizeControl = document.getElementById('font-size-control');

const text = document.getElementById('text');

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', onChangeInput);
function onChangeInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
  console.log(text.style.fontSize)
}
