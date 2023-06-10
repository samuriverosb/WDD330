import { loadHeaderFooter } from "./utils.mjs";
loadHeaderFooter();

document.querySelector('#checkoutBtn')
.addEventListener('submit', (e) => {
  e.preventDefault();
  checkoutProcess.checkout();
});