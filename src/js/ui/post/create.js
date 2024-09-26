import { createPost } from "../../api/post/create.js";

export async function onCreatePost(event) {
  event.preventDefault();
  const form = document.forms.createPost;
  console.log(form);
  const name = form.name.value;
  const body = form.body.value;
  //   const media = form.media.value;

  console.log(`name: ${name}, body ${body}`);

  createPost(name, body);
}
