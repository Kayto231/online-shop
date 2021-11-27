import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddToCart, onAddToFavorite } from "../../redux/actions/userActions";
import {
  removeCartItem,
  removeFavorite
} from "../../redux/actions/userActionsRemove";

import styles from "./Card.module.scss";

function Card({ title, price, imgUrl, id, isFavorite, Added }) {
  const { favorites, cartItems } = useSelector(state => state.sneakers);
  const dispatch = useDispatch();
  // console.log(cartItems);

  const handleAdded = obj => {
    cartItems.find(el => el.id === obj.id)
      ? dispatch(removeCartItem(cartItems, obj))
      : dispatch(
          onAddToCart(cartItems, {
            title,
            price,
            imgUrl,
            id
          })
        );
  };

  const handleFavorite = obj => {
    favorites.find(el => el.id === obj.id)
      ? dispatch(removeFavorite(favorites, obj))
      : dispatch(onAddToFavorite(favorites, obj));
  };

  return (
    <div className={styles.card}>
      <div className={styles.contentCard}>
        <div className={styles.favorite}>
          <img
            onClick={() => handleFavorite({ title, price, imgUrl, id })}
            className={styles.heart}
            src={
              isFavorite ? "./logo/heart-liked.svg" : "./logo/heart-unliked.svg"
            }
            alt="Unliked"
          />
        </div>
        <img
          className={styles.imgMain}
          width={133}
          height={112}
          src={imgUrl}
          alt="clothes1"
        />
        <h5>
          {title}
        </h5>
      </div>
      <div className={styles.contentBottom}>
        <div className="d-flex flex-column">
          <span className={styles.span}>Цена:</span>
          <b>
            {price} грн
          </b>
        </div>
        <img
          className={styles.image}
          src={Added ? "/logo/btn-checked.svg" : "/logo/btn-blus.svg"}
          alt="Icons"
          onClick={() =>
            handleAdded({ title, price, imgUrl, id, Added, isFavorite })}
        />
      </div>
    </div>
  );
}

export default Card;
