import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

let product = {};

export default async function productDetails(productId) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  //   const product = findProductById(productId).then((data) => {
  //     console.log(data);
  //   });

  product = await findProductById(productId);

  console.log(product);

  // once we have the product details we can render out the HTML
  renderProductDetail();

  // add a listener to Add to Cart button
}

function addToCart() {
  setLocalStorage("so-cart", product);
}

function renderProductDetail() {
  document.querySelector("#productName").innerHTML = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerHTML =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Image;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerHTML = product.FinalPrice;
  document.querySelector("#productColorName").innerHTML =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}

// add to cart button event handler
async function addToCartHandler(e) {
  addToCart();
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
