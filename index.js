const colorRadios = document.querySelectorAll('input[name="color"]');

colorRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    document.body.style.backgroundColor = radio.value;
  });
});

document.body.style.backgroundColor = document.querySelector(
  'input[name="color"]:checked'
).value;







const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const value = nameInput.value.trim();
  nameOutput.textContent = value === '' ? 'незнайомець' : value;
});

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const requiredLength = Number(validationInput.dataset.length);
  const actualLength = validationInput.value.trim().length;

  if (actualLength === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});










const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");


text.style.fontSize = fontSizeControl.value + "px";

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = fontSizeControl.value + "px";
});