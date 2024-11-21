const hoverButton = document.getElementById('hover-button');
const hoverMessage = document.getElementById('hover-message');

hoverButton.addEventListener('mouseenter', () => {
  hoverMessage.textContent = 'Mouse is hovering!';
});
hoverButton.addEventListener('mouseleave', () => {
  hoverMessage.textContent = 'Mouse has left.';
});

const keyInput = document.getElementById('key-input');
const keyMessage = document.getElementById('key-message');

keyInput.addEventListener('keydown', (e) => {
  keyMessage.textContent = `Last key pressed: ${e.key}`;
});

const form = document.getElementById('sample-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = 'Form submitted successfully!';
});

const focusInput = document.getElementById('focus-input');
const focusMessage = document.getElementById('focus-message');

focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'Input is focused!';
});
focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'Input lost focus.';
});

const buttonContainer = document.getElementById('button-container');
const delegationMessage = document.getElementById('delegation-message');

buttonContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    delegationMessage.textContent = `${e.target.textContent} clicked!`;
  }
});
