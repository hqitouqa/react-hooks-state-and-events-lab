import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAdd() {
    setInCart(!inCart);
  }
  let incart = inCart ? "Remove from Cart" : "Add to Cart";
  const itemClass = inCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>
        {incart}
      </button>
    </li>
  );
}

export default Item;
