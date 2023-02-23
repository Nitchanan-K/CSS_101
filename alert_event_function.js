const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  if (nameValue === '' || emailValue === '') {
    alert('Please fill in all fields!');
  } else{
    alert('Form submitted!');
  }
});