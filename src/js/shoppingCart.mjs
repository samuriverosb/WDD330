import { getLocalStorage, renderListWithTemplate } from "./utils.mjs";

export default function shoppingCart() {
  // creating var to store local storage
  const cartItems = getLocalStorage("so-cart");
  let outputEl = document.querySelector(".product-list");

  // render out the product list to the element
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);

  return cartItems;
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  
  <a href="#" class="cart-card__image">
  <img
  src="${item.Images.PrimaryMedium}"
  alt="${item.Name}"
  />
  </a>
  <a href="#">
  <h2 class="card__name">${item.Name}</h2>
  </a>
  <span id="${item.Id}"class="remove-item">X</span>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function removeFromLocalStorage(id) {
  const cartItems = getLocalStorage("so-cart");

  // search for id of item to remove from storage
  cartItems.forEach((element, index) => {
    if (element.Id === id) {
      console.log(element.Id);
      console.log(id);
      cartItems.splice(index, 1);
      console.log(cartItems);
    }
  });
}

export function removeCartListeners() {
  const productList = document.querySelectorAll(".cart-card");

  // loop through items to add event-listener for removing cart items
  productList.forEach((product) => {
    const span = product.querySelector(".remove-item");
    span.addEventListener("click", (e) => {
      // console.log(e.target.id);
      // console.log("Removing item!");
      removeFromLocalStorage(e.target.id);
    });
  });
}
