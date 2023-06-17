import { loadHeaderFooter, getParam } from "./utils.mjs";
import { login } from "./auth.mjs";

loadHeaderFooter();
let redirect = getParam("redirect");

// add click event listener to login button
document.querySelector("#loginBtn").addEventListener("click", () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // call login function
  login({ email, password }, redirect);
});
