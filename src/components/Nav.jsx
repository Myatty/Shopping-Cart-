/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { itemContext } from "../store/ItemContext";

const Nav = (props) => {

  const {items} = useContext(itemContext);
  const totalCartAmount = items.reduce((currentVal, item) => {
    return currentVal + item.amount;
  }, 0 )

  return (
    <nav className="nav">
      <h2>Shoppy</h2>
      <button onClick={props.showCartHandler}>
        Cart <span>({totalCartAmount})</span>
      </button>
    </nav>
  );
};

export default Nav;
