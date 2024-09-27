import { updatePost } from "../../api/post/update.js";
export async function onUpdatePost(event) {
  event.preventDefault();

  const form = document.forms.updatePost;
  const title = form.title.value;
  const body = form.body.value;
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const postId = params.get("id");
  console.log(form);

  if (
    form.title.value === "" ||
    form.body.value === ""
    // imageInput.value === "" ||
    // imageText.value === ""
  ) {
    alert("Do not leave the form empty");
  } else {
    updatePost(postId, title, body);
  }
}
