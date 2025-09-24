function convert() {
  var usd = document.getElementById("usd").value;

  if (usd === "" || isNaN(usd)) {
    alert("Please enter a valid number in USD field");
    return;
  }

  var rate = 0.85; 
  var EUR = (usd * rate).toFixed(2);

  document.getElementById("EUR").value = EUR;
}