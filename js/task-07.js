const sliderEl = document.getElementById('font-size-control');
const textToChange = document.getElementById('text');

sliderEl.addEventListener('input', changeFontSize);

function changeFontSize() {
  const fontSize = sliderEl.value;
  textToChange.style.fontSize = fontSize + "px";
}
