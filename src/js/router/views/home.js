import { authGuard } from "../../utilities/authGuard";
import { API_KEY, API_SOCIAL_POSTS } from "../../api/constants.js";
console.log("hellooo");

const bearerToken = localStorage.getItem("bearerToken");
console.log(bearerToken);

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
} else {
  authGuard();
}
