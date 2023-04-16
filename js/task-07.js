const fontSizeControl = document.getElementById('font-size-control');

const text = document.getElementById('text');

fontSizeControl.addEventListener('input', onChangeInput);
function onChangeInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
