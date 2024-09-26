import { API_AUTH_LOGIN, API_AUTH_REGISTER } from "../constants.js";

export async function register(name, email, password) {
  console.log(API_AUTH_REGISTER);
  console.log(`name: ${name}, email: ${email}, password: ${password}`);
  try {
    fetch(`https://v2.api.noroff.dev/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`
      }),

      // header taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=programme
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        response.json();
        console.log(response);
        if (!response.ok) {
          alert("Error: try again");
        } else {
          alert("New user created");
          window.location.replace("/auth/login/index.html");
        }
      })
      .then((data) => {
        console.log("data: " + data);
      });
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; // Rethrow the error to handle it in `onRegister`
  }
}
