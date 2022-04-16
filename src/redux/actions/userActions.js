import axios from "axios";
import {
  addToCart,
  loadCart,
  loadFavorites,
  loadSneakers
} from "../reducers/userReducer";

export const getSneakersBackEnd = () => {
  return async dispatch => {
    const itemsResponse = await axios.get(
      "https://6153b0673f4c4300171593fc.mockapi.io/items"
    );
    dispatch(loadSneakers(itemsResponse.data));
  };
};

export const getCartItems = () => {
  return async dispatch => {
    const cartItemsResponse = localStorage.getItem("cart");
    const data = cartItemsResponse ? JSON.parse(cartItemsResponse) : [];
    dispatch(loadCart(data));
  };
};

export const getFavoriteItems = () => {
  return async dispatch => {
    const favoriteItemsResponse = localStorage.getItem("favorite");
    const data = favoriteItemsResponse ? JSON.parse(favoriteItemsResponse) : [];
    localStorage.setItem("favorite", JSON.stringify(data));
    dispatch(loadFavorites(data));
  };
};

export const onAddToCart = (state, obj) => {
  return async dispatch => {
    const prevState = localStorage.getItem("cart");
    const data = prevState ? JSON.parse(prevState.split(",")) : [];
    data.push(obj);
    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(addToCart([...state, obj]));
  };
};

export const onAddToFavorite = (state, obj) => {
  return async dispatch => {
    const prevState = localStorage.getItem("favorite");
    const data = prevState ? JSON.parse(prevState.split(",")) : [];
    data.push(obj);
    localStorage.setItem("favorite", JSON.stringify(data));

    dispatch(loadFavorites([...state, obj]));
  };
};
