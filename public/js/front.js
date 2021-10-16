const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('#form');
const result = document.querySelector('#result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // console.log(numberAInput, numberBInput);
  const numberA = Number(numberAInput.value);
  const numberB = Number(numberBInput.value);

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

  const data = await res.json();

  console.log(data);

  if (data.divider) {
    result.innerText = 'Number B is divider of Number A';
  } else {
    result.innerText = 'Number B is NOT divider of Number A';
  }
});
