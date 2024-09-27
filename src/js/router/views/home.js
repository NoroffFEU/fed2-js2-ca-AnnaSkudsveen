import { authGuard } from "../../utilities/authGuard";
import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants.js";

const bearerToken = localStorage.getItem("bearerToken");
const postSection = document.querySelector(".postSection");

if (bearerToken) {
  const options = {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "X-Noroff-API-Key": `${API_KEY}`
    }
  };

  const response = await fetch(`${API_SOCIAL_POSTS}`, options);
  const data = await response.json();
  console.log(data);
  showPosts(data.data);
} else {
  authGuard();
}

function showPosts(postData) {
  postData.forEach((post) => {
    postSection.innerHTML += `
      <a class="post-link-card" href="post/index.html?id=${post.id}">
      <section class="blog-post">
      <div>
      <h2>${post.title}</h2>
      </div>
      <button>Read more</button>
      </section>
      </a>
      <a class="post-link-card" href="post/edit/index.html?id=${post.id}">
    <button>Edit</button>
    </a>
    `;
  });

  // const author = localStorage.getItem("author");
  // if (postData._author === author) {
  //   postSection.innerHTML +=

  // }
}
