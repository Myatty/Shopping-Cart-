/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

const fruits = [
  {
    id: 1,
    price: 10.98,
    name: "Banana",
    description: "fresh banana from thailand",
    quantity: 2,
  },
  {
    id: 2,
    price: 12.98,
    name: "Apple",
    description: "fresh apple from thailand",
    quantity: 1,
  },
  {
    id: 3,
    price: 8,
    name: "Mango",
    description: "fresh mango from thailand",
    quantity: 2,
  },
];

const Cart = (props) => {
  return (
    <section className="cart-box">
      <h2>Carts</h2>
      {fruits.map((fruit) => (
        <CartItem key={fruit.id} fruit={fruit} />
      ))}
      <hr />
      <div className="total">
        <h3>Total price</h3>
        <p>$ 3000.00</p>
      </div>
      <div className="btns">
        <button className="close-btn" onClick={props.hideCartHandler}>Close</button>
        <button className="order-btn">Order</button>
      </div>
    </section>
  );
};

export default Cart;
