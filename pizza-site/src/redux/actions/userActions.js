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
    const cartResponse = await axios.get(
      "https://6153b0673f4c4300171593fc.mockapi.io/cart"
    );
    dispatch(loadCart(cartResponse.data));
  };
};

export const getFavoriteItems = () => {
  return async dispatch => {
    const favoriteResponse = await axios.get(
      "https://6153b0673f4c4300171593fc.mockapi.io/posts"
    );

    dispatch(loadFavorites(favoriteResponse.data));
  };
};

export const onAddToCart = (state, obj) => {
  return async dispatch => {
    await axios.post("https://6153b0673f4c4300171593fc.mockapi.io/cart", obj);

    dispatch(addToCart([...state, obj]));
  };
};
export const onAddToFavorite = (state, obj) => {
  return async dispatch => {
    await axios.post("https://6153b0673f4c4300171593fc.mockapi.io/posts", obj);

    dispatch(loadFavorites([...state, obj]));
  };
};
