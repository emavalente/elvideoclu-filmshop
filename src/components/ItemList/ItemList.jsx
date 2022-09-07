import React from "react";
import { useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { CircleSpinnerOverlay } from "react-spinner-overlay";

function ItemList({ items }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="cardContainer">
      {items.length ? (
        items.map((item) => (
          <Item
            key={item.id}
            picture={item.thumbnail}
            title={item.title}
            genere={item.genere}
            stars={item.stars}
            price={item.price}
          />
        ))
      ) : (
        <CircleSpinnerOverlay
          loading={loading}
          size={42}
          color="rgb(255 158 181)"
          overlayColor="rgb(255 158 181 / 0%)"
          message={<p className="loadingText">ESPERANDO DATOS...</p>}
        />
      )}
    </div>
  );
}

export default ItemList;