// import { register } from "../../api/auth/register";

export async function onRegister(event) {
  //   console.log(register);
  console.log("hello");
  localStorage.setItem("name", `{form.name}`);
}
