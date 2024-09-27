import { API_SOCIAL_POSTS, API_KEY } from "../constants.js";

const bearerToken = localStorage.getItem("bearerToken");

export async function deletePost(id) {
  try {
    fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        id: `${id}`
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${bearerToken}`,
        "X-Noroff-API-Key": `${API_KEY}`
      }
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          alert("Error during deleting, post was not deleted");
        }
        window.location.href = "/index.html";
      })
      .then((data) => {
        window.location.href = "/index.html";
      });
  } catch (error) {
    console.error("Error during deleting:", error);
    throw error;
  }
}
