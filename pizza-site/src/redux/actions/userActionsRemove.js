import axios from "axios";
import { removeCart, removeFavoriteItems } from "../reducers/userReducer";

export const removeCartItem = (state, objRemove) => {
  return async dispatch => {
    axios.delete(
      `https://6153b0673f4c4300171593fc.mockapi.io/cart/${objRemove.id}`
    );
    dispatch(removeCart(state.filter(el => +el.id !== +objRemove.id)));
  };
};

export const removeFavorite = (state, objRemove) => {
  return async dispatch => {
    axios.delete(
      `https://6153b0673f4c4300171593fc.mockapi.io/posts/${objRemove.id}`
    );
    console.log(state);
    dispatch(removeFavoriteItems(state.filter(el => +el.id !== +objRemove.id)));
  };
};
