const inputEl = document.querySelector('input');
const btnRender = document.querySelector('#controls button[data-action="render"]');
const btnDestroy = document.querySelector('#controls button[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');


function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const divArr = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = randomRgb();
    divEl.style.width = i * 10 + 20 + 'px';;
    divEl.style.height = i * 10 + 20 + 'px';;
    divEl.style.margin = '3px';

    divArr.push(divEl);
  }
  return boxesContainer.append(...divArr);
}

const randomRgb = () => {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();
  return `rgb(${r},${g},${b})`;
};

btnRender.addEventListener('click', onCreatingDiv);
btnDestroy.addEventListener('click', onDeletingDiv);

function onCreatingDiv() {
  createBoxes(inputEl.value);
  console.log(`Создадим ${inputEl.value} div`);
};

function onDeletingDiv() {
  boxesContainer.innerHTML = '';
}
