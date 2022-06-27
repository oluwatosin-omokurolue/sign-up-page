let nameError = document.getElementById("student-id");
let passError = document.getElementById("password");
let submitError = document.getElementById("buttonE");

function validateName() {
  let name = document.getElementById("contact").value;

  if (name.length == 0) {
    nameError.innerHTML =
      'Teacher/Student id is required <i class="fas fa-exclamation-circle"></i>';
    return false;
  }

  nameError.innerHTML = '<i class="green fas fa-check-circle"></i>';
  return true;
}

function validatePin() {
  let pass = document.getElementById("pin").value;

  if (pass.length < 8) {
    passError.innerHTML =
      'Password must be up to 8 characters <i class="fas fa-exclamation-circle"></i>';
    return false;
  }

  passError.innerHTML = '<i class="green fas fa-check-circle"></i>';

  return true;
}

function validateForm() {
  if (!validateName() || !validatePin()) {
    submitError.innerHTML = "Please fill form";
    return true;
  }

}
