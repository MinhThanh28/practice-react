import React from 'react';

const CartContext = React.createContext({
  items: [],
  persons: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  deleteItem: (id) => {},
  addFewItem: (item) => {},
  addNext: (person) => {},
});

export default CartContext;