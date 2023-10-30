import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DOWNLOAD_ITEM,
} from "./cartActionTypes";

export const addToCart = (item) => (dispatch) => {
  console.log("Adding to cart:", item);

  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};
export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const downloadItem = (item) => (dispatch) => {
  console.log("Downloading:", item);

  dispatch({
    type: DOWNLOAD_ITEM,
    payload: item,
  });
};
