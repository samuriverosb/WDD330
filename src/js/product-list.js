import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";
import { checkLogin } from "./auth.mjs";

loadHeaderFooter();
const category = getParam("category");
productList(".product-list", category);

// Render superscript for number of items in our cart
window.onload = function () {
  renderCartSuperScript();
  checkLogin();
};
