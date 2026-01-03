const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const repeat_password = document.getElementById("repeat-password");
const errormessage = document.getElementById("error-meassage");
form.addEventListener("submit", (e) => {
  // e.preventDefault()

  let errors = [];
  if (firstname_input) {
    errors = getsignupform(
      firstname_input.value,
      email_input.value,
      password_input.value,
      repeat_password.value
    );
  } else {
    errors = getloginformerrors(email_input.value, password_input.value);
  }
  if (errors.length > 0) {
    e.preventDefault();
    errormessage.innerText = errors.join(". ");
  }
});

function getsignupform(firstname, email, password, repeatpassword) {
  let errors = [];

  if (firstname === "" || firstname === null) {
    errors.push("Firstname is required");
    firstname_input.parentElement.classList.add("incorrect");
  }
  if (email === "" || email === null) {
    errors.push("Email is required");
    email_input.parentElement.classList.add("incorrect");
  }
  if (password === "" || password === null) {
    errors.push("Password is required");
    password_input.parentElement.classList.add("incorrect");
  }
  if (password.length < 8) {
    errors.push("Password must have at least 8 charcters");
    password_input.parentElement.classList.add("incorrect");
  }
  if (password !== repeat_password) {
    errors.push("Password does not match repeated password");
    repeat_password.parentElement.classList.add("incorrect");
    password_input.parentElement.classList.add("incorrect");
  }
  return errors;
}

const allinputs = [
  firstname_input,
  email_input,
  password_input,
  repeat_password,
].filter(input=>input!==null);
allinputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      errormessage.innerText = "";
    }
  });
});

function getloginformerrors(email, password) {
  let errors = [];

  if (email === "" || email === null) {
    errors.push("Email is required");
    email_input.parentElement.classList.add("incorrect");
  }

  if (password === "" || password === null) {
    errors.push("Firstname is required");
    password_input.parentElement.classList.add("incorrect");
  }
  return errors;
}
