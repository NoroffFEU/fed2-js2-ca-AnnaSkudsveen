import { deletePost } from "../../api/post/delete.js";

export async function onDeletePost(event) {
  event.preventDefault();

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const postId = params.get("id");

  deletePost(postId);
}
