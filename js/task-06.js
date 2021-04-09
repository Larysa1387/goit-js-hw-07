const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  console.log(input.value.length);
  console.log(input.getAttribute('data-length'));
  console.log(input.value);
  if (input.value.length !== Number(input.getAttribute('data-length'))) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
};
