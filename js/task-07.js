// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, 
//  перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.getElementById('font-size-control');
console.log(fontSizeControl);

const text = document.getElementById('text');
console.log(text);

fontSizeControl.addEventListener('input', onChangeInput);
function onChangeInput(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}