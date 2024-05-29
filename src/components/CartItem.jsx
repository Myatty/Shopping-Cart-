/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useContext} from "react";
import { ItemContextTwo } from "../store/ItemContextTwo";

const CartItem = ({ fruit }) => {

  const {addItem, removeItem} = useContext(ItemContextTwo);
  const addAmountHandler = () => {
      addItem({ ...fruit, amount: 1 }) 
  }
  const removeAmountHandler = () => {
    removeItem(fruit.id);
  }
  return (
    <div className="card cart">
      <div>
        <p className="card-title">{fruit.name}</p>
        <p className="card-price">$ {fruit.price}</p>
      </div>
      <div className="card-right">
        <p className="card-quantity">
          <span>{fruit.amount}</span>
        </p>
        <div className="quantity-ctr">
          <button className="quantity-btn m-ctr" onClick={addAmountHandler}>+</button>
          <button className="quantity-btn" onClick={removeAmountHandler}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
