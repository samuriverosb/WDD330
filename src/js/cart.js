import { loadHeaderFooter } from "./utils.mjs";
import shoppingCart from "./shoppingCart.mjs";
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";

loadHeaderFooter();

window.onload = function () {
  renderCartSuperScript();
  cartTotal();
  addCartListeners();
};

function addCartListeners() {
  const productList = document.querySelectorAll(".cart-card");

  // loop through items to add event-listener for removing cart items
  productList.forEach((product) => {
    const span = product.querySelector(".remove-item");
    span.addEventListener("click", (e) => {
      removeItem(e.target.id);
    });
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

  console.log(cartItems);

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

  if (pNodes.length === 1) {
    p.insertAdjacentText("beforeend", ` $${totalPrice.toFixed(2)}`);
  } else {
    pNodes[1].nodeValue = ""; // if second text node isn't empty, clear it out
    p.insertAdjacentText("beforeend", ` $${totalPrice.toFixed(2)}`);
  }

  if (items.length === 0) {
    document.querySelector("div.cart-footer").style.display = "none";
  }
}
