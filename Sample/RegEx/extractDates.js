function extractDates() {
  const text = document.getElementById("dateText").value;
  const dateRegex = /\b\d{2}-[A-Za-z]{3}-\d{4}\b/g;
  const dates = text.match(dateRegex);
  document.getElementById("dateResult").textContent = dates
    ? dates.join(", ")
    : "No dates found in the given text.";
}
