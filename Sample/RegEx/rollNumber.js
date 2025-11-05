function validateRollNumber() {
  const roll = document.getElementById("rollInput").value.trim();
  const rollRegex = /^25MX(10[1-9]|11[0-9]|12[0-9]|20[1-9]|21[0-9]|22[0-9]|23[0])$/;
  const result = rollRegex.test(roll)
    ? `${roll} is a valid roll number.`
    : `${roll} is NOT a valid roll number.`;
  document.getElementById("rollResult").textContent = result;
}
