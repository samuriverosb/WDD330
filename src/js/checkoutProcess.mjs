import { checkout } from "./externalServices.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

// takes the items currently stored in the cart (localstorage) and returns them in a simplified form.
function packageItems(items) {
  // convert the list of products from localStorage to the simpler form required for
  // the checkout process. Array.map would be perfect for this.
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });

  return simplifiedItems;
}

function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

const checkoutProcess = {
  key: "",
  outputSelector: "",
  list: [],
  itemTotal: 0,
  shipping: 0,
  tax: 0,
  orderTotal: 0,
  init: function (key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = getLocalStorage(key);
    this.calculateItemSummary();
  },
  // function to calculate checkout total
  calculateItemSummary: function () {
    const summaryEl = document.querySelector(
      this.outputSelector + " #cartTotal"
    );
    const itemNumEl = document.querySelector(
      this.outputSelector + " #num-items"
    );

    // display number of items
    itemNumEl.innerText = this.list.length;

    // calculate the total in dollar amount of items in cart
    const amounts = this.list.map((item) => item.FinalPrice);
    this.itemTotal = amounts.reduce((sum, item) => sum + item);
    summaryEl.innerText = "$" + this.itemTotal.toFixed(2);
  },
  calculateOrdertotal: function () {
    // calculate shipping
    this.shipping = 10 + (this.list.length - 1) * 2;

    // calculate tax
    this.tax = (this.itemTotal * 0.06).toFixed(2);

    // calculate order total
    this.orderTotal = (
      parseFloat(this.itemTotal) +
      parseFloat(this.shipping) +
      parseFloat(this.tax)
    ).toFixed(2);
    this.displayOrderTotals();
  },
  // function to display total
  displayOrderTotals: function () {
    // once the totals are all calculated display them in the order
    // summary page
    const shipping = document.querySelector(this.outputSelector + " #shipping");
    const tax = document.querySelector(this.outputSelector + " #taxes");
    const orderTotal = document.querySelector(
      this.outputSelector + " #order-total"
    );
    shipping.innerText = "$" + this.shipping;
    tax.innerText = "$" + this.tax;
    orderTotal.innerText = "$" + this.orderTotal;
  },

  checkout: async function (form) {
    // build the data object from the calculated fields, the items in
    // the cart, and the information entered into the form call the
    // checkout method in our externalServices module and send it our data object.
    const checkoutJSON = formDataToJSON(form);
    checkoutJSON.orderDate = new Date();
    checkoutJSON.orderTotal = this.orderTotal;
    checkoutJSON.tax = this.tax;
    checkoutJSON.shipping = this.shipping;
    checkoutJSON.items = packageItems(this.list);
    console.log(checkoutJSON);

    try {
      const res = await checkout(checkoutJSON);
      console.log(res);
      setLocalStorage("so-cart", []);
      location.assign("/checkout/success.html");
    } catch (err) {
      console.log(err);
    }
  },
};

export default checkoutProcess;
