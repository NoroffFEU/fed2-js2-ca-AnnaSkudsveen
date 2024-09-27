import { login } from "../../api/auth/login.js";

export async function onLogin(event) {
  event.preventDefault();

  const form = document.forms.login;

  console.log(form);

  const email = form.email.value;
  const password = form.password.value;

  login(email, password);
}
