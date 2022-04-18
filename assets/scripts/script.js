let password_inputs = document.querySelectorAll('input[type=password]');

for(let i = 0; i < password_inputs.length; i++) {
  let input = password_inputs[i];
  let other = document.getElementById(input.id == 'password' ? 'p-confirmation' : 'password');

  input.addEventListener("input", () => {
    if (input.value != other.value) {
      input.classList.add('error');
      other.classList.add('error');
    } else {
      input.classList.remove('error');
      other.classList.remove('error');
    }
  });
}
