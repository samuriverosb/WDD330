import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function shoppingCart() {
  // creating var to store local storage
  const cartItems = [];
  let localStorage = getLocalStorage("so-cart");
  if (localStorage != null)
    cartItems.push(localStorage);
  console.log(cartItems);
  let outputEl = document.querySelector(".product-list");
  // render out the product list to the element
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
  return cartItems;
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">${item.FinalPrice}</p>
</li>`;

  return newItem;
}
