function validateForm() {
  const email = document.getElementById("email");
  const country = document.getElementById("country");
  const zipCode = document.getElementById("zip-code");
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("password-confirm");
  const submitBtn = document.getElementById("submit-btn");

  email.required = true;
  country.required = true;
  zipCode.required = true;
  password.required = true;
  passwordConfirm.required = true;

  zipCode.pattern = "(d{5}([-]d{4})?)";
  password.pattern = "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).*$";
}

validateForm();
