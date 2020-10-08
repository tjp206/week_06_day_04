document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

const handleButtonClick = function () {
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'That button has been clicked.'
} 

const button = document.querySelector('#button');
button.addEventListener('click', handleButtonClick);

const handleInput = function (event) {
  const result = document.querySelector('#input-result');
  result.textContent = `You typed: ${event.target.value}`;
}

const textInput = document.querySelector('#input');
textInput.addEventListener('input', handleInput)

const handleSelect = function (event) {
  const result = document.querySelector('#select-result');
  result.textContent = `You selected: ${event.target.value}`
}

const select = document.querySelector('#select');
select.addEventListener('change', handleSelect);

const handleFormSubmit = function (event) {
  event.preventDefault();
  const result = document.querySelector('#form-result');
  result.textContent = `It's going to be: ${event.target.first_name.value} ${event.target.last_name.value}`;
  event.target.first_name.value = '';
  event.target.last_name.value = '';
}

const form = document.querySelector('#form');
form.addEventListener('submit', handleFormSubmit)





});
