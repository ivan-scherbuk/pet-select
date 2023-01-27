import { ADD_PRODUCT, EDIT_PRODUCT_PRICE, REMOVE_PRODUCT } from "./types";

export const addProduct = (productLabel, productPrice, restaraunt) => ({
  type: ADD_PRODUCT,
  payload: { productLabel, productPrice, restaraunt },
});

export const editProductPrice = (productId, productPrice) => ({
  type: EDIT_PRODUCT_PRICE,
  payload: { productId, productPrice },
});

export const removeProduct = (productId, productPrice) => ({
  type: REMOVE_PRODUCT,
  payload: { productId, productPrice },
});
