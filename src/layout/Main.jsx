/* eslint-disable no-unused-vars */
import BackDrop from "../components/BackDrop";
import Body from "./Body";
import Header from "./Header";
import {useState} from 'react';

const Main = () => {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <section>
      <Header showCartHandler={showCartHandler} />
      <Body />
      <BackDrop showCart={showCart} hideCartHandler={hideCartHandler}/>
    </section>
  );
};

export default Main;
