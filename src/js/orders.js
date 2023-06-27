import currentOrders from "./currentOrders.mjs";
import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";
import { checkLogin } from "./auth.mjs";

loadHeaderFooter();

// Render superscript for number of items in our cart
window.onload = function () {
  checkLogin();
  renderCartSuperScript();
};

const token = getLocalStorage("so-token");

currentOrders(".order-list", token);
