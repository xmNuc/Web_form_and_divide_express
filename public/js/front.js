const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const numberA = Number(numberAInput);
  const numberB = Number(numberBInput);

  console.log(numberA, numberB);

  const res = fetch('/calc/check', {
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
});
