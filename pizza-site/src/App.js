import { useEffect } from "react";
import { Route, Switch } from "react-router";

import ActionsCard from "./components/ActionsCard/ActionsCard.js";
import Favorite from "./components/Favorite/Favorite.js";
import Header from "./components/Header/Header.js";
import Drawer from "./components/Drawer/Drawer.js";
import Banner from "./components/Banner/Banner.jsx";
import {
  getCartItems,
  getFavoriteItems,
  getSneakersBackEnd
} from "./redux/actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";

// import { initializeApp } from "firebase/app";

function App() {
  const dispatch = useDispatch();
  const { isCartOpened, isBannerOpened } = useSelector(state => state.sneakers);

  // loading and unacking API with items for the first load
  useEffect(
    () => {
      dispatch(getSneakersBackEnd());
      dispatch(getCartItems());
      dispatch(getFavoriteItems());
    },
    [dispatch]
  );

  return (
    <div className="wrapper clear">
      {isCartOpened && <Drawer />}
      <Header />
      {isBannerOpened && <Banner />}
      <Switch>
        <Route exact path="/" component={ActionsCard} />
        <Route exact path="/favorite" component={Favorite} />
      </Switch>
    </div>
  );
}
export default App;
