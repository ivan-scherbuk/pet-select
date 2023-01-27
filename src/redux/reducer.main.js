import { ADD_PRODUCT, EDIT_PRODUCT_PRICE, REMOVE_PRODUCT } from "./types";

const products = localStorage.getItem("test_task_products");

const initialState = {
  productsData: products ? JSON.parse(products) : undefined,
};

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT: {
      const { productLabel, productPrice, restaraunt } = payload;
      let newProducts;
      if (!state.productsData?.products?.length) {
        newProducts = {
          products: [
            { id: 1, product: productLabel, restaraunt, cost: productPrice }
          ],
          summary: productPrice,
        };
      } else {
        const currProducts = [...state.productsData?.products];
        newProducts = {
          products: [
            ...currProducts,
            { id: currProducts.length + 1, product: productLabel, restaraunt, cost: productPrice }
          ],
          summary: state.productsData.summary + productPrice,
        };
      }
      localStorage.setItem("test_task_products", JSON.stringify(newProducts));

      return {
        ...state,
        productsData: newProducts,
      };
    }
    case EDIT_PRODUCT_PRICE: {
      const { productId, productPrice } = payload;
      let currentProducts = [...state.productsData.products];
      const index = currentProducts.findIndex(
        (el) => el.id === productId
      );
      currentProducts[index] = { ...currentProducts[index], cost: productPrice };
      const newProductsData = {
        products: [...currentProducts],
        summary: currentProducts.reduce((acc, cur) => acc + Number(cur.cost), 0)
      };
      localStorage.setItem("test_task_products", JSON.stringify(newProductsData));

      return {
        ...state,
        productsData: newProductsData,
      };
    }
    case REMOVE_PRODUCT: {
      const { productId, productPrice } = payload;
      let currentProducts = [...state.productsData.products];
      const index = currentProducts.findIndex(
        (el) => el.id === productId
      );
      currentProducts.splice(index, 1);
      const newProductsData = {
        products: [...currentProducts],
        summary: state.productsData.summary - productPrice
      };
      localStorage.setItem("test_task_products", JSON.stringify(newProductsData));

      return {
        ...state,
        productsData: newProductsData,
      };
    }
    default: {
      return state;
    }
  }
};

export default mainReducer;
