import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";

loadHeaderFooter();

checkoutProcess.init("so-cart", ".order-summary");
//console.log(checkoutProcess);

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
window.onload = renderCartSuperScript;
