const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

// export async function getData(category = "tents") {
//   return fetch(`../json/${category}.json`)
//     .then(convertToJson)
//     .then((data) => data);
// }
export async function getData(category) {
  const response = await fetch(baseURL + `products/search/${category}`);
  const data = await convertToJson(response);

  console.log("data from getData", data);

  return data.Result;
}

export async function findProductById(id) {

  const response = await fetch(baseURL + `product/${id}`);
  const data = await convertToJson(response);

  // const products = await getData();
  // return products.find((item) => item.Id === id);
  return data.Result
}
