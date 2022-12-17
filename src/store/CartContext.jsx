import { createContext, useReducer, useState } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
  removeAll: () => {},
});

const cartReducer = (state, action) => {
  let updatedItems, existingCartItemIndex, existingCartItem, totalAmountUpdated;

  switch (action.type) {
    case 'ADD_ITEM':
      totalAmountUpdated = state.totalAmount + action.item.price;

      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id,
      );
      existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat({ ...action.item, amount: 1 });
      }
      return {
        items: updatedItems,
        totalAmount: totalAmountUpdated,
      };

    case 'REMOVE_ITEM':
      const curItem = state.items.find((item) => item.id === action.id);
      totalAmountUpdated = state.totalAmount - curItem.price;
      if (curItem.amount > 1) {
        updatedItems = state.items.map((item) =>
          item.id === action.id ? { ...item, amount: item.amount - 1 } : item,
        );
      } else {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      }

      return {
        items: updatedItems,
        totalAmount: totalAmountUpdated,
      };

    case 'REMOVE_ALL':
      updatedItems = [];
      return {
        items: updatedItems,
        totalAmount: 0,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  const removeAllItems = () => {
    dispatchCartAction({ type: 'REMOVE_ALL' });
  };

  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    removeAll: removeAllItems,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
