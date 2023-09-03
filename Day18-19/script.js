function validateForm() {
  const email = document.getElementById("email");
  const country = document.getElementById("country");
  const zipCode = document.getElementById("zip-code");
  const pwd = document.getElementById("pwd");
  const pwdConfirm = document.getElementById("pwd-confirm");

  email.required = true;
  country.required = true;
  zipCode.required = true;
  pwd.required = true;
  pwdConfirm.required = true;

  pwd.pattern = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$";

  // Event Listeners
  zipCode.addEventListener("focusout", validateZipCode);
  pwd.addEventListener("focusout", validatePwd);
  pwd.addEventListener("input", validatePwdRegex);
  pwdConfirm.addEventListener("focusout", validateConfirmPwd);
}

function validateZipCode() {
  const country = document.getElementById("country");
  const zipCode = document.getElementById("zip-code");
  const zipCodeText = document.getElementById("zip-code-text");
  const zipCodeRegex = [
    "(\\d{5}([\\-]\\d{4})?)",
    "[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}",
    "[0-9]{4}",
    "[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]",
    "\\d{3}-\\d{4}",
  ];
  let countryValue = country.value;
  let regex;

  zipCode.required = true;

  if (countryValue === "OTHER") {
    zipCode.removeAttribute("pattern");
    zipCode.required = false;
    zipCodeText.innerText = "";
  } else if (countryValue === "USA") {
    regex = zipCodeRegex[0];
  } else if (countryValue === "UK") {
    regex = zipCodeRegex[1];
  } else if (countryValue === "AUS") {
    regex = zipCodeRegex[2];
  } else if (countryValue === "CAN") {
    regex = zipCodeRegex[3];
  } else if (countryValue === "JP") {
    regex = zipCodeRegex[4];
  }

  if (regex !== undefined) {
    zipCode.pattern = regex;
  }

  if (zipCode.validity.patternMismatch) {
    zipCodeText.innerText = `* Not a valid ${
      country.options[country.selectedIndex].text
    } zip code.`;
  } else {
    zipCodeText.innerText = "";
  }
}

function validatePwd() {
  const pwd = document.getElementById("pwd");
  const pwdText = document.getElementById("pwd-text");

  if (!pwd.validity.valid) {
    pwdText.textContent = "* Please enter your password.";
  } else {
    pwdText.textContent = "";
  }
}

function validatePwdRegex() {
  const pwd = document.getElementById("pwd");
  const pwdText = document.getElementById("pwd-text");

  if (!pwd.validity.valid) {
    // Clears the pwdText and adds each pattern requirement as necessary
    pwdText.textContent = "";
    // Testing the regex
    if (!/(?=.*[A-Z])/.test(pwd.value)) {
      pwdText.innerText += "* One uppercase letter.\n";
    }
    if (!/(?=.*[a-z])/.test(pwd.value)) {
      pwdText.innerText += "* One lowercase letter.\n";
    }
    if (!/(?=.*\d)/.test(pwd.value)) {
      pwdText.innerText += "* One number.";
    }
  } else {
    pwdText.innerText = "";
  }
}

function validateConfirmPwd() {
  const pwd = document.getElementById("pwd");
  const pwdConfirm = document.getElementById("pwd-confirm");
  const pwdConfirmText = document.getElementById("pwd-confirm-text");

  if (pwd.value !== pwdConfirm.value) {
    pwdConfirmText.innerText = "* Passwords do not match.";
    pwdConfirm.setCustomValidity("Passwords do not match.");
  } else {
    pwdConfirmText.innerText = "";
    pwdConfirm.setCustomValidity("");
  }
}

// Handles the form
function formHandler() {
  console.log("Information was submitted!");
}

validateForm();
