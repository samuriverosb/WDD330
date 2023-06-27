import { getLocalStorage } from "./utils.mjs";

export default function renderCartSuperScript() {
  // Grab the span element and insert the number of items in local storage onto our cart image
  const cartNumberEl = document.querySelector("span.cart-items-num");
  if (cartNumberEl !== null) {
    cartNumberEl.innerText = getLocalStorage("so-cart").length;
  }
}

export function animateCart() {
  const cartEl = document.querySelector("div.cart");
  cartEl.classList.add("shake");
}
