// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// Create getParam function
export function getParam(param) {
  const queryString = window.location.search;
  // Returns the query parameter like a key:value pair (e.g product=880RR)
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }

  const htmlString = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
) {
  if (clear) {
    parentElement.innerHTML = "";
  }

  const htmlString = await templateFn(data);
  parentElement.insertAdjacentHTML(position, htmlString);

  if (callback) {
    callback(data);
  }

  // const htmlString = data.map(templateFn);
  // parentElement.insertAdjacentHTML(position, htmlString.join(""));
}

export function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  };
}

export async function loadHeaderFooter() {
  // load the header and footer templates from partials
  const footerTemplateFn = loadTemplate("/partials/footer.html");
  const headerTemplateFn = loadTemplate("/partials/header.html");

  // Grab header and footer elements out of the DOM
  let footer_el = document.querySelector("footer");
  let header_el = document.querySelector("#main-header");

  // Render header and footer (renderWithTemplate)
  renderWithTemplate(footerTemplateFn, footer_el);
  renderWithTemplate(headerTemplateFn, header_el);
}
