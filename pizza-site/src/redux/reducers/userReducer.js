import {
  GET_CART,
  GET_FAVORITES,
  GET_SNEAKERS,
  REMOVE_CART,
  REMOVE_FAVORITE,
  SET_ISCARTOPENED,
  SET_SNEAKER
} from "../consts";

const initialState = {
  sneakers: [],
  favorites: [],
  cartItems: [],
  isLoading: true,
  isCartOpened: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SNEAKERS:
      return {
        ...state,
        sneakers: action.payload,
        isLoading: false
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload
      };
    case GET_CART:
      return {
        ...state,
        cartItems: action.payload
      };
    case REMOVE_CART:
      return {
        ...state,
        cartItems: action.payload
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.payload
      };
    case SET_SNEAKER:
      return {
        ...state,
        cartItems: action.payload
      };
    case SET_ISCARTOPENED:
      return {
        ...state,
        isCartOpened: action.payload
      };
    default:
      return state;
  }
};

export const loadSneakers = items => ({ type: GET_SNEAKERS, payload: items });
export const loadCart = cart => ({ type: GET_CART, payload: cart });
export const loadFavorites = favorites => ({
  type: GET_FAVORITES,
  payload: favorites
});
export const removeCart = removedCart => ({
  type: REMOVE_CART,
  payload: removedCart
});

export const removeFavoriteItems = favorite => ({
  type: REMOVE_FAVORITE,
  payload: favorite
});
export const addToCart = addToCart => ({
  type: SET_SNEAKER,
  payload: addToCart
});
export const isCartOpenedfunction = isCartOpened => ({
  type: SET_ISCARTOPENED,
  payload: isCartOpened
});
