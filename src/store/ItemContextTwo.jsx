/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    console.log("add item was called");

    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return initialState;
};

export const ItemContextTwo = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const ItemContextProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };

  const contextValue = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <ItemContextTwo.Provider value={contextValue}>
      {props.children}
    </ItemContextTwo.Provider>
  );
};

export default ItemContextProvider;
