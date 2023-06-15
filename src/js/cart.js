import { loadHeaderFooter } from "./utils.mjs";
import shoppingCart from "./shoppingCart.mjs";
import { removeCartListeners } from "./shoppingCart.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";

loadHeaderFooter();
window.onload = function () {
  renderCartSuperScript();
  removeCartListeners();
};

// calculate cart total
function cartTotal() {
  const items = shoppingCart();
  let totalPrice = 0.0;
  let p = document.querySelector(".cart-total");

  items.forEach((item) => {
    totalPrice += item.FinalPrice;
  });

  p.insertAdjacentText("beforeend", ` $${totalPrice.toFixed(2)}`);
  if (items.length == 0) {
    document.querySelector("div.cart-footer").style.display = "none";
  }
}

cartTotal();
