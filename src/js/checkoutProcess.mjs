import { getLocalStorage } from "./utils.mjs";

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
  },
  // function to display total
  displayOrderTotals: function () {
    // once the totals are all calculated display them in the order
    // summary page
  },
};

export default checkoutProcess;
