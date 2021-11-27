import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddToCart } from "../../redux/actions/userActions";
import { removeCartItem } from "../../redux/actions/userActionsRemove";
import { isBannerOpenedFunction } from "../../redux/reducers/userReducer";
import "./style.scss";

export default function Banner() {
  const { isBannerOpened, cartItems, bannerObject } = useSelector(
    state => state.sneakers
  );
  const dispatch = useDispatch();

  const handleAdded = () => {
    cartItems.find(el => el.id === bannerObject.id)
      ? dispatch(removeCartItem(cartItems, bannerObject))
      : dispatch(onAddToCart(cartItems, bannerObject));
  };
  return (
    <div className="container">
      <div className="header">
        <div className="titleBanner">
          <h1>Кроссовки</h1>
        </div>
        <div className="closeBtn">
          <img
            onClick={() =>
              dispatch(
                isBannerOpenedFunction({
                  isBannerOpened: !isBannerOpened,
                  obj: {}
                })
              )}
            src="/logo/btn-remove.svg"
            alt="Close"
          />
        </div>
      </div>
      <div className="card">
        <div className="topCard">
          <div className="title">
            {bannerObject.title}
          </div>
          <div className="photos">
            <img src={bannerObject.imgUrl} alt="phot" />
          </div>
          <div className="middle">
            <div className="price">
              <span>Цена: </span>
              {" " + bannerObject.price}
            </div>
            <div className="description">
              Описание: {bannerObject.description}
            </div>
          </div>
        </div>
        <div className="bottom">
          <div onClick={() => handleAdded()} className="addtoCart">
            <button>Добавить в корзину!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
