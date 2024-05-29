/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import { useContext } from "react";
import { ItemContextTwo } from "../store/ItemContextTwo";

// const fruits = [
//   {
//     id: 1,
//     price: 10.98,
//     name: "Banana",
//     description: "fresh banana from thailand",
//     quantity: 2,
//   },
//   {
//     id: 2,
//     price: 12.98,
//     name: "Apple",
//     description: "fresh apple from thailand",
//     quantity: 1,
//   },
//   {
//     id: 3,
//     price: 8,
//     name: "Mango",
//     description: "fresh mango from thailand",
//     quantity: 2,
//   },
// ];

const Cart = (props) => {
  const { items, totalAmount } = useContext(ItemContextTwo);

  const totalPrice = `${totalAmount.toFixed(2)}`
  return (
    <section className="cart-box">
      <section className="overflow-ctr">
      {items.length < 1 ? (
        <h1 className="no-item">No item yet!</h1>
      ) : (
        <>
          <h1>Your cart Items are here</h1>
          {items.map((fruit) => (
            <CartItem key={fruit.id} fruit={fruit} />
          ))}
        </>
      )}
      </section>

      <hr />
      <div className="total">
        <h3>Total price</h3>
        <p>{totalPrice}</p>
      </div>
      <div className="btns">
        <button className="close-btn" onClick={props.hideCartHandler}>
          Close
        </button>
        {items.length < 1 ? (
          <></>
        ) : (
          <button className="order-btn" onClick={() => {
            alert("Your cart was Successfully Ordered!!")
          }}>Order</button>
        )}
      </div>
    </section>
  );
};

export default Cart;
