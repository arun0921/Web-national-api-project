
// functioning script

const form = document.querySelector('form');
const input = document.querySelector('input');
const titleFilter = document.querySelector('#title');
const typeFilter = document.querySelector('#type');
const yearFilter = document.querySelector('#year');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = input.value;
  const title = titleFilter.value;
  const type = typeFilter.value;
  const year = yearFilter.value;

  const url = `https://api.nationalize.io/?name=${name}&title=${title}&type=${type}&year=${year}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const country1 = data.country[0].country_id;
    const probability1 = data.country[0].probability;
    const country2 = data.country[1].country_id;
    const probability2 = data.country[1].probability;

    // Display the results in the HTML page
    const result = document.querySelector('#result');
    result.innerHTML = `
      <p>Top two countries: ${country1} (${probability1}), ${country2} (${probability2})</p>`;
  } catch (error) {
    console.error(error);
  }
});

  
