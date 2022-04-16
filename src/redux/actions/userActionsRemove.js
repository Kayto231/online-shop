import { removeCart, removeFavoriteItems } from "../reducers/userReducer";

export const removeCartItem = (state, objRemove) => {
  return async dispatch => {
    const prevState = localStorage.getItem("cart");
    const data = prevState
      ? JSON.parse(prevState).filter(el => +el.id !== +objRemove.id)
      : [];
    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(removeCart(state.filter(el => +el.id !== +objRemove.id)));
  };
};

export const removeFavorite = (state, objRemove) => {
  return async dispatch => {
    const prevState = localStorage.getItem("favorite");
    const data = prevState
      ? JSON.parse(prevState).filter(el => el.id !== objRemove.id)
      : [];
    localStorage.setItem("favorite", JSON.stringify(data));
    dispatch(removeFavoriteItems(state.filter(el => +el.id !== +objRemove.id)));
  };
};
