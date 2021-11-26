import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Context from "../../Context/Context";
import { removeCartItem } from "../../redux/actions/userActionsRemove";

import styles from "./Drawer.module.scss";

function Drawer({ items = [] }) {
  const { cartItems } = useSelector(state => state.sneakers);
  const dispatch = useDispatch();
  const removeItemFromCart = obj => {
    dispatch(removeCartItem(cartItems, obj));
  };
  console.log(cartItems);

  const value = useContext(Context);
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className={styles.shopping}>
          Корзина{" "}
          <img
            onClick={() => value.handleCartClick()}
            className={styles.removeBtnS}
            src="/logo/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {cartItems.length >= 1
          ? <div className={styles.items}>
              {cartItems.map((obj, i) =>
                <div
                  onClick={() => console.log(obj)}
                  key={obj.title + i}
                  className={styles.cartItem}
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imgUrl})` }}
                    className={styles.cartItemImg}
                  />
                  <div className="mr-20 flex">
                    <p className="mb-5">
                      {obj.title}
                    </p>
                    <b>
                      {obj.price} грн
                    </b>
                  </div>
                  <img
                    className={styles.removeBtn}
                    onClick={() => removeItemFromCart(obj)}
                    src="/logo/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              )}
              <div className={styles.cartTotalBlock}>
                <ul>
                  <li className="d-flex">
                    <span>Итого:</span>
                    <div />
                    <b>
                      {items.length >= 1 &&
                        items
                          .map(obj => obj.price)
                          .reduce((prev, current) => (current += prev)) +
                          " грн"}
                    </b>
                  </li>
                  <li className="d-flex">
                    <span>Налог:</span>
                    <div />
                    <b>250 грн</b>
                  </li>
                </ul>
                <button className={styles.greenBtn}>
                  Оформить заказ
                  <img src="/logo/arrow.svg" alt="Arrow" />
                </button>
              </div>
            </div>
          : <div className={styles.cartEmpty}>
              <img
                src="/logo/empty-cart.jpg"
                alt="Empty"
                width={120}
                height={120}
              />
              <h2>Корзина пустая</h2>
              <p className={styles.text}>
                Добавьте хотя бы один товар, что бы сделать заказ.
              </p>
              <button
                onClick={() => value.handleCartClick()}
                className={styles.greenBtn}
              >
                <img
                  className={styles.arrowImage}
                  src="/logo/arrow.svg"
                  alt="Arrow"
                />
                Вернуться назад
              </button>
            </div>}
      </div>
    </div>
  );
}

export default Drawer;
