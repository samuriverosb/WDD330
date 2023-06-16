import { getParam, loadHeaderFooter } from "../js/utils.mjs";
import { checkLogin, login } from "./auth.mjs";

loadHeaderFooter();
// const category = getParam("category");
// const category = getParam("redirect");

// Optional Way to Manage the LoginForm
// document.getElementById("loginForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent form submission
//
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
// });

document.getElementById("loginButton").addEventListener("click", async function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await login({email, password});
})


