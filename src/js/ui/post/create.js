import { createPost } from "../../api/post/create.js";

export async function onCreatePost(event) {
  event.preventDefault();
  const form = document.forms.createPost;
  console.log(form);
  const title = form.title.value;
  const body = form.body.value;
  //   const media = form.media.value;

  console.log(`title: ${title}, body ${body}`);

  createPost(title, body);
}
