import { API_AUTH_LOGIN } from "../constants.js";

export async function login(email, password) {
  try {
    fetch(`${API_AUTH_LOGIN}`, {
      method: "POST",
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`
      }),

      // header taken from: https://mollify.noroff.dev/content/feu1/javascript-1/module-5/api-methods/http-post-request-method?nav=programme
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data: ", data);
        if (data.data && data.data.accessToken) {
          localStorage.setItem("author", data.data.name),
            localStorage.setItem("bearerToken", data.data.accessToken);
          window.location.href = "/index.html";
        } else {
          console.error("Not able to log you in, try again");
        }
      });
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow the error to handle it in `onRegister`
  }
}
