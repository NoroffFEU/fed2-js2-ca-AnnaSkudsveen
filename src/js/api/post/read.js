import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants.js";

export async function readPost(id) {
  const bearerToken = localStorage.getItem("bearerToken");
  const postSection = document.querySelector(".postSection");

  if (bearerToken) {
    const options = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "X-Noroff-API-Key": `${API_KEY}`
      }
    };

    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, options);
    const data = await response.json();
    console.log(`${API_SOCIAL_POSTS}/${id}`);
    showPost(data.data);
  } else {
    authGuard();
  }

  function showPost(postData) {
    postSection.innerHTML += `
      <section class="blog-post">
      <div>
      <h2>${postData.title}</h2>
      <p>${postData.body}</p>
      </div>
      <button>Read more</button>
      </section>
        `;
  }
}

export async function readPosts(limit = 12, page = 1, tag) {}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
