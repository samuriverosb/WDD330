import { loadHeaderFooter } from "./utils.mjs";
import shoppingCart from "./shoppingCart.mjs";

loadHeaderFooter();
const items = shoppingCart();

function cartTotal() {
  let totalPrice = 0.0;
  let p = document.querySelector(".cart-total");

  items.forEach((item) => {
    totalPrice += item.FinalPrice;
  });

  p.insertAdjacentText("beforeend", `${totalPrice.toFixed(2)}`);
}

if (items.length == 0) {
  document.querySelector("div.cart-footer").style.display = "none";
} else {
  cartTotal();
}
