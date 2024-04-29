import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [cart,setCart] = useState(false)

  const handleCart = () => {
    setCart(!cart)
  }
  
  return (
    <li className= {cart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cart ? "Remove From " : "Add To "}Cart</button>
    </li>
  );
}

export default Item;
