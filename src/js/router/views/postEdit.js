import { authGuard } from "../../utilities/authGuard.js";
import { onUpdatePost } from "../../ui/post/update.js";
import { onDeletePost } from "../../ui/post/delete.js";
import { API_SOCIAL_POSTS, API_KEY } from "../../api/constants.js";

authGuard();
const bearerToken = localStorage.getItem("bearerToken");
const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const postId = params.get("id");
const form = document.forms.updatePost;
const deleteBtn = document.querySelector(".deleteBtn");

async function getPost() {
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
    console.log(data.data);

    form.title.value = `${data.data.title}`;
    form.body.value = `${data.data.body}`;
    // form.media.value = `${data.data.media.url}`;
  } else {
    authGuard();
  }
}
getPost();

form.addEventListener("submit", onUpdatePost);
deleteBtn.addEventListener("click", onDeletePost);
