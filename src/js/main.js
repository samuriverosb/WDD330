import { loadHeaderFooter } from "./utils.mjs";
import renderCartSuperScript from "./cartAnimations.mjs";

loadHeaderFooter();
// Render superscript for number of items in our cart
window.onload = renderCartSuperScript;
