const output = document.querySelector('#name-output');
const nameInput = document.querySelector('#name-input');
nameInput.addEventListener('input', handleInput);

function handleInput(event) {
  const trimmedInput = event.target.value.trim();
  if (trimmedInput === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = trimmedInput;
  }
}
