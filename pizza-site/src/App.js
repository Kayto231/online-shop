import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router";

import ActionsCard from "./components/ActionsCard/ActionsCard.js";
import Favorite from "./components/Favorite/Favorite.js";
import Header from "./components/Header/Header.js";
import Drawer from "./components/Drawer/Drawer.js";
import Context from "./Context/Context.jsx";
import {
  getCartItems,
  getFavoriteItems,
  getSneakersBackEnd
} from "./redux/actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";

// import { initializeApp } from "firebase/app";

function App() {
  const dispatch = useDispatch();

  const { cartItems: cart } = useSelector(state => state.sneakers);

  // loading and unacking API with items for the first load
  useEffect(
    () => {
      dispatch(getSneakersBackEnd());
      dispatch(getCartItems());
      dispatch(getFavoriteItems());
    },
    [dispatch]
  );
  // State of getting API about the items
  // Setting Context Value

  // State of cart
  const [cartItems, setCartItems] = useState(cart);
  const [cartOpened, setCartOpened] = useState(false);

  // Favorite
  const [isFavoriteItems, setIsFavoriteItems] = useState([]);

  // Functions to catch the click on cart
  function handleCartClick() {
    setCartOpened(click => !click);
  }

  const onAddToCart = obj => {
    if (cartItems.find(el => el.id === obj.id)) {
      setCartItems(prev => prev.filter(item => item.id !== obj.id));
      onRemoveItem(obj);
    } else {
      setCartItems(prev => [...prev, obj]);
      axios.post("https://6153b0673f4c4300171593fc.mockapi.io/cart", obj);
    }
  };

  // Removing an Item from backEnd Cart

  const onRemoveItem = obj => {
    axios.delete(`https://6153b0673f4c4300171593fc.mockapi.io/cart/${obj.id}`);

    setCartItems(prev => prev.filter(item => item.id !== obj.id));
  };

  const onAddToFavorite = obj => {
    if (cartItems.find(el => el.id === obj.id)) {
      setIsFavoriteItems(prev => prev.filter(item => item.id !== obj.id));
      onRemoveFavorites(obj);
    } else {
      setIsFavoriteItems(prev => [...prev, obj]);
      axios.post("https://6153b0673f4c4300171593fc.mockapi.io/posts", obj);
    }
  };
  const onRemoveFavorites = obj => {
    axios.delete(`https://6153b0673f4c4300171593fc.mockapi.io/posts/${obj.id}`);

    setCartItems(prev => prev.filter(item => item.id !== obj.id));
  };

  const value = {
    onAddToFavorite,
    onAddToCart,
    isFavoriteItems,
    handleCartClick,
    cartItems,
    onRemoveItem
  };

  return (
    <Context.Provider value={value}>
      <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} />}
        <Header />

        <Switch>
          <Route exact path="/" component={ActionsCard} />
          <Route exact path="/favorite" component={Favorite} />
        </Switch>
      </div>
    </Context.Provider>
  );
}
export default App;
