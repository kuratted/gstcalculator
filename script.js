const form = document.getElementById('gst-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const priceInclGST = parseFloat(document.getElementById('amount').value);
  const gstRate = parseFloat(document.getElementById('gst-rate').value);

  const principalAmount = priceInclGST / ((100 + gstRate) / 100);
  const gstAmount = priceInclGST - principalAmount;
  
  result.innerHTML = `Principal Amount: ${principalAmount.toFixed(2)}<br>GST Amount: ${gstAmount.toFixed(2)}`;
});
