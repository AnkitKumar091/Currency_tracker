async function fetchRates() {
  const res = await fetch('/api/rates');
  const data = await res.json();

  const ratesDiv = document.getElementById('rates');
  ratesDiv.innerHTML = '';

  for (let currency in data.rates) {
    const div = document.createElement('div');
    div.textContent = `${currency}: ${data.rates[currency].toFixed(2)}`;
    ratesDiv.appendChild(div);
  }
}

fetchRates();
