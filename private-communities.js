const ageCheck = document.querySelector('#age-check');
const countrySelect = document.querySelector('#country-select');
const revealButton = document.querySelector('#private-reveal');
const status = document.querySelector('#private-status');
const result = document.querySelector('#matrix-result');
const eligibleCountries = new Set(['Canada', 'Switzerland', 'Russia', 'Iran', 'Somalia', 'Turkmenistan']);

revealButton?.addEventListener('click', () => {
  result.hidden = true;
  if (!ageCheck.checked) {
    status.textContent = 'Please confirm that you are 18 or older.';
    return;
  }
  if (!eligibleCountries.has(countrySelect.value)) {
    status.textContent = 'Access is limited to the listed eligible countries.';
    return;
  }
  status.textContent = 'Eligibility confirmed. The private link is now available.';
  result.hidden = false;
});
