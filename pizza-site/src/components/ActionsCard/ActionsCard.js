import React, { useState } from "react";

import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function ActionsCard(props) {
  const { sneakers, favorites, cartItems } = useSelector(
    state => state.sneakers
  );
  // State of getting API about the items

  // Search bar
  const [search, setSearch] = useState("");
  const onChangeSearchInput = event => {
    setSearch(event.target.value);
  };
  const clearText = () => {
    setSearch("");
  };
  return (
    <div>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="allBootsWord">
            {search ? `Поиск: ${search}` : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/logo/search.svg" alt="Search" />
            {search &&
              <img
                className="removeBtn"
                src="/logo/btn-remove.svg"
                alt="Clear"
                onClick={clearText}
              />}
            <input
              onChange={onChangeSearchInput}
              value={search}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex allSneakers">
          {sneakers
            .filter(el => el.title.toLowerCase().includes(search.toLowerCase()))
            .map(obj =>
              <Card
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imgUrl={obj.imgUrl}
                id={obj.id}
                isFavorite={favorites.some(
                  el => Number(el.id) === Number(obj.id)
                )}
                Added={cartItems.some(el => Number(el.id) === Number(obj.id))}
              />
            )}
        </div>
      </div>
    </div>
  );
}
