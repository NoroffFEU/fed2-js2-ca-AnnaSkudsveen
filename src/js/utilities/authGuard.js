export function authGuard() {
  if (!localStorage.bearerToken) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  }
}
