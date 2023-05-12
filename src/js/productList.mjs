import { getData } from "./productData.mjs";

let tentsData = getData(category);

export default function productList(category, selector) {
    // get the element we will insert the list into from the selector
    // get the list of products 
    // render out the product list to the element
}


function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=">
      <img
        src=""
        alt="Image of"
      />
      <h3 class="card__brand"></h3>
      <h2 class="card__name"></h2>
      <p class="product-card__price">$</p></a
    >
  </li>`
}

function renderList() {
    array.forEach(element => {
        
    });
}
