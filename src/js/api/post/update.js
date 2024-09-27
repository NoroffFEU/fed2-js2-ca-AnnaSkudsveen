import { API_SOCIAL_POSTS, API_KEY } from "../../api/constants.js";

const bearerToken = localStorage.getItem("bearerToken");

export async function updatePost(id, title, body) {
  try {
    fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: `${id}`,
        title: `${title}`,
        body: `${body}`
        // media: `${media}`
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${bearerToken}`,
        "X-Noroff-API-Key": `${API_KEY}`
      }
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("post data: ", data);
        window.location.href = "/index.html";
      });
  } catch (error) {
    console.error("Error during editing:", error);
    throw error; // Rethrow the error to handle it in `onRegister`
  }
}
