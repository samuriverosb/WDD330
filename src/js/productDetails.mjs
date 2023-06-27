import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";
import renderCartSuperScript, { animateCart } from "./cartAnimations.mjs";
import { calculateDiscount } from "./productList.mjs";

let product = {};

export default async function productDetails(productId) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  const cartBtn = document.getElementById("addToCart");
  const buttonDiv = document.querySelector(".product-detail__add");

  // once we have the product details we can render out the HTML
  if (product === undefined) {
    buttonDiv.classList.add("hide");
    alert("No product with that ID exists!");
  } else {
    renderProductDetail();

    // add a listener to Add to Cart button
    cartBtn.addEventListener("click", addToCart);
  }
}

function addToCart() {
  let cartContents = getLocalStorage("so-cart");
  //check to see if there was anything there
  if (!cartContents) {
    cartContents = [];
  }
  // then add the current product to the list
  cartContents.push(product);
  setLocalStorage("so-cart", cartContents);
  renderCartSuperScript(); // re-render cart super-script
  animateCart();
}

function renderProductDetail() {
  document.querySelector("#productName").innerHTML = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerHTML =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Images.PrimaryLarge;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector(
    "#productSuggestedPrice"
  ).innerHTML = `$${product.SuggestedRetailPrice.toFixed(2)}`;
  document.querySelector(
    "#productFinalPrice"
  ).innerHTML = `$${product.FinalPrice}`;
  document.querySelector("#productDiscount").innerHTML = `${calculateDiscount(
    product
  )}% off!`;
  document.querySelector("#productColorName").innerHTML =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}
