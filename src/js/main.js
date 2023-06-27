import { loadHeaderFooter } from "./utils.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";
import { checkLogin } from "./auth.mjs";

loadHeaderFooter();
// Render superscript for number of items in our cart
window.onload = function () {
  checkLogin();
  renderCartSuperScript();
};
