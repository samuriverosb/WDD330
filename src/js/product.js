import { getParam } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";
import { checkLogin } from "./auth.mjs";

loadHeaderFooter();

const productId = getParam("product");
productDetails(productId);

// Render superscript for number of items in our cart
window.onload = function () {
  checkLogin();
  renderCartSuperScript();
};
