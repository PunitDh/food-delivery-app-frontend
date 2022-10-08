import axios from "axios";
import { getCartIdFromJWT } from "../utils";

export const getItemsInCurrentCart = (cartid) => {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/carts/items/${cartid}`
  );
};

export const addToCart = (itemid) => {
  const cartId = getCartIdFromJWT();
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/carts/${cartId}/add/${itemid}`
  );
};

export const removeFromCart = (itemid) => {
  const cartId = getCartIdFromJWT();
  return axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/carts/${cartId}/remove/${itemid}`
  );
};
