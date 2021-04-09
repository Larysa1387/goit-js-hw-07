const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
}

const btnDecrement = document.querySelector('#counter button[data-action="decrement"]');
const btnIncrement = document.querySelector('#counter button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const decrementFunc = () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
  console.log(counterValue);
};

const incrementFunc = () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
  console.log(counterValue);
};

btnDecrement.addEventListener('click', decrementFunc);
btnIncrement.addEventListener('click', incrementFunc);
