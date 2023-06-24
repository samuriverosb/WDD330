import { loadHeaderFooter } from "./utils.mjs";
import shoppingCart from "./shoppingCart.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";
import { checkLogin } from "./auth.mjs";

loadHeaderFooter();

window.onload = function () {
  renderCartSuperScript();
  cartTotal();
  addCartListeners();
  checkLogin();
};

function addCartListeners() {
  const productList = document.querySelector(".product-list");

  productList.addEventListener("click", (e) => {
    // console.log(e.target);
    removeItem(e.target.id);
  });
}

function removeItem(id) {
  const cartItems = getLocalStorage("so-cart");

  // search for id of item to remove from storage
  cartItems.forEach((element, index) => {
    if (element.Id === id) {
      cartItems.splice(index, 1); // remove if item is found
    }
  });

  // console.log(cartItems);

  // Set our local storage to the modified list of products
  setLocalStorage("so-cart", cartItems);
  shoppingCart(); // re-render our list
  cartTotal(); // re-calculate total of cart
  renderCartSuperScript(); // re-render the number of items for cart
}

// calculate cart total
function cartTotal() {
  const items = shoppingCart();
  let totalPrice = 0.0;
  let p = document.querySelector(".cart-total");

  items.forEach((item) => {
    totalPrice += item.FinalPrice; // add up price of each item
  });

  const pNodes = p.childNodes;

  if (pNodes.length >= 2) {
    // if we have 2 or more items in our Node, set the second value
    pNodes[1].nodeValue = ` $${totalPrice.toFixed(2)}`;
  } else {
    // otherwise, add a p element to fill our second node value
    p.insertAdjacentText("beforeend", ` $${totalPrice.toFixed(2)}`);
  }

  if (items.length === 0) {
    document.querySelector("div.cart-footer").style.display = "none";
  }
}
