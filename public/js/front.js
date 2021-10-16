const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('#form');
const result = document.querySelector('#result');

function setResult(text, color) {
  result.innerText = text;
  result.style.border = `2px solid ${color}`;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // console.log(numberAInput, numberBInput);
  const numberA = Number(numberAInput.value);
  const numberB = Number(numberBInput.value);

  setResult('Loading...', 'transparent');

  // console.log(numberA, numberB);

  const res = await fetch('/calc/check', {
    method: 'POST',

    body: JSON.stringify({
      numberA,
      numberB,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { divider } = await res.json();

  setResult(
    divider
      ? 'Number B is divider of Number A'
      : 'Number B is NOT divider of Number A',
    divider ? 'green' : 'red'
  );
});
