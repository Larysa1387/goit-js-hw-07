const input = document.querySelector('#name-input');
const nameFromInput = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (input.value === '') {
    return nameFromInput.textContent = 'незнакомец';
  };

  nameFromInput.textContent = event.currentTarget.value;
}
