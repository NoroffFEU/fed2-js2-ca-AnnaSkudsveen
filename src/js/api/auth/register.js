import { API_AUTH_REGISTER } from "../constants.js";

export async function register(name, email, password) {
  try {
    fetch(`${API_AUTH_REGISTER}`, {
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
        if (!response.ok) {
          return response.json().then((errorData) => {
            console.error("Error:", errorData);
            alert("Error: try again");
            throw new Error("Registration failed");
          });
        }

        return response.json();
      })
      .then((data) => {
        console.log("data: " + data);
        // window.location.replace("/auth/login/index.html");
      });
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}
