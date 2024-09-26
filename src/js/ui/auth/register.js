import { register } from "../../api/auth/register.js";

export async function onRegister(event) {
  const form = document.getElementById("registerForm");

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  console.log(form);
  event.preventDefault();
  console.log("onRegister function");

  register(name, email, password);
  console.log(name, email, password);
  // console.log(form.name.value + form.password.value);
}
