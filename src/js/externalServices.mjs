const baseURL = import.meta.env.VITE_SERVER_URL;

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw {name: "servicesError", message: data};
  }
}

export async function getProductsByCategory(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);

  return data.Result;
}

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const data = await convertToJson(response);

  return data.Result;
}

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  return await fetch(baseURL + "checkout/", options).then(convertToJson);
}

export async function loginRequest(credentials) {
  const options = {
    body: JSON.stringify(credentials),
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  }

  const response = await fetch("http://server-nodejs.cit.byui.edu:3000/login", options);
  return await response.json();
}
