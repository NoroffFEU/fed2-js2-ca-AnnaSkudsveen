import { readPost } from "../../api/post/read.js";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const postId = params.get("id");

readPost(postId);

console.log(postId);
