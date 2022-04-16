import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import styles from "./Favorite.module.scss";

export default function Favorite(props) {
  const { cartItems, favorites } = useSelector(state => state.sneakers);

  return (
    <div className={styles.pageTitle}>
      <h1>Закладки</h1>
      <div className={styles.content}>
        <div className={styles.cardList}>
          {favorites.length >= 1
            ? favorites.map(obj => {
                return (
                  <div key={obj.id} className={styles.favorites}>
                    <Card
                      className={styles.card}
                      imgUrl={obj.imgUrl}
                      title={obj.title}
                      price={obj.price}
                      id={obj.id}
                      isFavorite={favorites.some(el => +el.id === +obj.id)}
                      Added={cartItems.some(el => +el.id === +obj.id)}
                    />
                  </div>
                );
              })
            : <div className={styles.message}>
                <div className={styles.emoji} />
                <div className={styles.itemTitle}>
                  <h1>Закладок нет :(</h1>
                  <p>Вы ничего не добавляли в закладки</p>
                </div>
                <Link to="./">
                  <button className={styles.btn}>
                    <img src="./logo/arrow.svg" alt="" /> Вернуться назад
                  </button>
                </Link>
              </div>}
        </div>
      </div>
    </div>
  );
}
