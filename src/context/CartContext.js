import React, { createContext, useReducer, useEffect } from 'react';

import { reducer } from '../components/Cart/reducer';

export const CartContext = createContext();

const initialState = {
  item: [],
  totalAmount: 0,
  totalItem: 0,
};
export const types = {
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  GET_TOTAL: 'GET_TOTAL',
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (item) => {
    return dispatch({
      type: types.REMOVE_ITEM,
      payload: item,
    });
  };

  const clearCart = () => {
    return dispatch({ type: types.CLEAR_CART });
  };

  const increment = (item) => {
    return dispatch({
      type: types.INCREMENT,
      payload: item,
    });
  };

  const decrement = (item) => {
    return dispatch({
      type: types.DECREMENT,
      payload: item,
    });
  };

  useEffect(() => {
    dispatch({ type: types.GET_TOTAL });
  }, [state.item]);

  return (
    <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
