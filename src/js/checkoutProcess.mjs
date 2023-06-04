import { getLocalStorage } from "./utils.mjs";

// takes the items currently stored in the cart (localstorage) and returns them in a simplified form.
function packageItems(items) {
  // convert the list of products from localStorage to the simpler form required for
  // the checkout process. Array.map would be perfect for this.
}

const checkoutProcess = {
  key: "",
  outputSelector: "",
  list: [],
  itemTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
  init: function (storageKey, selector) {
    this.storageKey = storageKey;
    this.selector = selector;
    this.list = getLocalStorage(storageKey);
    this.calculateItemSummary();
  },
  // function to calculate checkout total
  calculateItemSummary: function () {
    // calculate and display the total amount of the items in the cart,
    // and the number of items.
  },
  calculateOrdertotal: function () {
    // calculate the shipping and tax amounts. Then use them to along
    // with the cart total to figure out the order total
    this.tax = this.itemTotal * 0.06;

    // calculate shipping
    for (let i = 0; i < this.list.length - 1; i++) {
      if (i == 0) this.shipping += 10;
      else this.shipping += 2;
    }

    // calculate orderTotal
    this.orderTotal = this.tax + this.shipping + this.itemTotal;
    return this.orderTotal;
  },
  // function to display total
  displayOrderTotals: function () {
    // once the totals are all calculated display them in the order
    // summary page
    const orderForm = document.getElementById("orderForm");
  },
  checkout: async function (form) {
    // build the data object from the calculated fields, the items in
    // the cart, and the information entered into the form call the
    // checkout method in our externalServices module and send it our data object.
  },
};

export default checkoutProcess;
