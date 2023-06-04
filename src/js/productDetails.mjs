import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";

let product = {};

export default async function productDetails(productId) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);

  // once we have the product details we can render out the HTML
  renderProductDetail();

  // add a listener to Add to Cart button
  document.getElementById("addToCart").addEventListener("click", addToCart);
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
}

function renderProductDetail() {
  document.querySelector("#productName").innerHTML = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerHTML =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Images.PrimaryLarge;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerHTML = product.FinalPrice;
  document.querySelector("#productColorName").innerHTML =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}
