import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { loginRequest } from "./externalServices.mjs";
import jwt_decode from "jwt-decode";

const tokenKey = "so-token";

export async function login(creds, redirect = "/") {
  try {
    const token = await loginRequest(creds);
    setLocalStorage(tokenKey, token);
    // because of the default arg provided above...if no redirect is provided send them Home.
    window.location = redirect;
  } catch (err) {
    console.log(err);
  }
}

function isTokenValid(token) {
  if (token) {
    const decodedToken = jwt_decode(token); // decode token
    let currentDate = new Date(); // get date

    // JWT exp is in seconds, the time from our current date will be milliseconds.
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      //token expiration has passed
      console.log("Token expired.");
      return false;
    } else {
      // token not expired
      console.log("Valid token");
      return true;
    }
  } else return false;
}

export function checkLogin() {
  const token = getLocalStorage(tokenKey);
  const valid = isTokenValid(token);

  // handle logic for token
  if (!valid) {
    localStorage.removeItem(tokenKey); // remove token from storage

    const location = window.location; // get current path
    console.log(location);
    window.location = `/login/index.html?redirect=${location.pathname}`; // redirect
  } else {
    return token;
  }
}
