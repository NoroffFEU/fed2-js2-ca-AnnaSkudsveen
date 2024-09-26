import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants.js";

const bearerToken = localStorage.getItem("bearerToken");
const postSection = document.querySelector(".postSection");
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const postId = params.get("id");

console.log(postId);

if (bearerToken) {
  const options = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "X-Noroff-API-Key": `${API_KEY}`
    }
  };

  const response = await fetch(`${API_SOCIAL_POSTS}/${postId}`, options);
  const data = await response.json();
  console.log(`${API_SOCIAL_POSTS}/${postId}`);
  console.log(data);
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
