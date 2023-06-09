import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";
import { checkLogin } from "./auth.mjs";

loadHeaderFooter();

checkoutProcess.init("so-cart", ".order-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  checkoutProcess.checkout(e.target);
});

// Render superscript for number of items in our cart
window.onload = function () {
  checkLogin();
  renderCartSuperScript();
};
