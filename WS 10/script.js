function validateName() {
  const name = document.getElementById("name");
  const error = document.getElementById("nameError");
  const regex = /^[A-Za-z\s]+$/;
  if (name.value.trim() === "") {
    error.textContent = "Name cannot be empty.";
  } else if (!regex.test(name.value)) {
    error.textContent = "Name must contain only alphabets.";
  } else {
    error.innerHTML = "<span class='success'>✔</span>";
    return true;
  }
  return false;
}

function validateEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("emailError");
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|edu|in)$/;
  if (!regex.test(email.value)) {
    error.textContent = "Enter a valid email ending with .com, .edu, or .in.";
  } else {
    error.innerHTML = "<span class='success'>✔</span>";
    return true;
  }
  return false;
}

function validatePassword() {
  const pass = document.getElementById("password");
  const error = document.getElementById("passwordError");
  const regex = /^(?=.*\d).{6,}$/;
  if (!regex.test(pass.value)) {
    error.textContent = "Min 6 chars and at least one number required.";
  } else {
    error.innerHTML = "<span class='success'>✔</span>";
    return true;
  }
  return false;
}

function validateMobile() {
  const mobile = document.getElementById("mobile");
  const error = document.getElementById("mobileError");
  const regex = /^[0-9]{10}$/;
  if (!regex.test(mobile.value)) {
    error.textContent = "Enter exactly 10 digits.";
  } else {
    error.innerHTML = "<span class='success'>✔</span>";
    return true;
  }
  return false;
}

function validateDOB() {
  const dob = document.getElementById("dob");
  const error = document.getElementById("dobError");
  if (dob.value === "") {
    error.textContent = "Please select a date.";
  } else {
    error.innerHTML = "<span class='success'>✔</span>";
    return true;
  }
  return false;
}

function displayData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const dob = document.getElementById("dob").value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value || "Not selected";
  
  const interests = Array.from(document.querySelectorAll('.interests input:checked'))
                        .map(cb => cb.value)
                        .join(", ") || "None";

  alert(
    `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nDOB: ${dob}\nRating: ${rating}\nInterests: ${interests}`
  );
}

function resetForm() {
  document.querySelectorAll(".error").forEach(err => err.textContent = "");
}

function submitForm() {
  if (validateName() && validateEmail() && validatePassword() && validateMobile() && validateDOB()) {
    // Store data for the next page
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value || "Not rated";
    const interests = Array.from(document.querySelectorAll('.interests input:checked'))
                          .map(cb => cb.value)
                          .join(", ") || "None";
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("rating", rating);
    sessionStorage.setItem("interests", interests);
    window.location.href = "success.html";
  } else {
    alert("Please correct all errors before submitting.");
  }
}
