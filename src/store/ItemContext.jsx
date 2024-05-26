/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

const addItemHandler = () => {};

const removeItemHandler = () => {};

const initialState = {
  items: [],
  amount: 0,
};
const itemReducer = (state, action) => {
  return initialState;
};

export const itemContext = createContext({
  items: [],
  amount: 0,
  addItem: item => {},
  removeItem: (id) => {},
});

const ItemContextProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, initialState);

  const addItemHandler = () => {};

  const removeItemHandler = () => {};

  const itemContext = {
    items: [],
    amount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <itemContext.Provider value={itemContext}>
      {props.children}
    </itemContext.Provider>
  );
};

export default ItemContextProvider;
