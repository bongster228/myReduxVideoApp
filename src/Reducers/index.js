import { combineReducers } from "redux";

const itemListReducer = () => {
  return [
    { name: "XPS15", price: 1500 },
    { name: "Tesla Model S", price: 80000 },
    { name: "GoldenRetriever", price: 1500 },
    { name: "Rolex Watch", price: 15000 }
  ];
};

const cartReducer = (cart = [], action) => {
  if (action.type === "ADD_ITEM") {
    return [...cart, action.payload.item];
  }

  if (action.type === "REMOVE_ITEM") {
    return cart.filter(item => {
      return item.name !== action.payload.item.name;
    });
  }

  return cart;
};

export default combineReducers({
  listOfItems: itemListReducer,
  cart: cartReducer
});
