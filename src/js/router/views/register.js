import { onRegister } from "../../ui/auth/register.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", onRegister);
