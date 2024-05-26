/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CartItem = ({ fruit }) => {
  return (
    <div className="card cart">
      <div>
        <p className="card-title">{fruit.name}</p>
        <p className="card-price">$ {fruit.price}</p>
      </div>
      <div className="card-right">
        <p className="card-quantity">
          <span>1</span>
        </p>
        <div className="quantity-ctr">
          <button className="quantity-btn m-ctr">+</button>
          <button className="quantity-btn">-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
