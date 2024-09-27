export function onLogout() {
  localStorage.removeItem("bearerToken");
  window.location.href = "/auth/login/index.html";
}
