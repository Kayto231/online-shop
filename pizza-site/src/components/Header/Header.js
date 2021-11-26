import styles from "./Header.module.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";

function Header(props) {
  const value = useContext(Context);
  return (
    <header className={styles.header}>
      <div className="d-flex align-center">
        <li>
          <Link to="/">
            {" "}
            <img
              className={styles.logoImage}
              width="40"
              height="40"
              src="/logo/logo.png"
              alt="Logo"
            />
          </Link>
        </li>

        <div>
          <h3 className="text-uppercase">Best sneakers</h3>
          <p className="opacity-5">Магазин лучшей одежды</p>
        </div>
      </div>
      <ul className="d-flex user">
        <li onClick={() => value.handleCartClick()} className="mr-30">
          <img width="18" height="18" src="/logo/cart.svg" alt="Cart" />
          <span>Корзина</span>
        </li>
        <li className={styles.favorite}>
          <Link to="/favorite">
            {" "}
            <img
              onClick={() => console.log("CLicked")}
              width="18"
              height="18"
              src="/logo/favoriteicon.svg"
              alt="FavoriteIcon"
            />
            <span>Закладки</span>
          </Link>
        </li>
        <li className={styles.userName}>
          <img width="18" height="18" src="/logo/usericon.svg" alt="UserIcon" />
          <span>$UserName</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
