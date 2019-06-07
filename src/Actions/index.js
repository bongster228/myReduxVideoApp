// Two action creators responsible for adding and removing
// items form the cart.

export const addToCart = item => {
  return {
    type: "ADD_ITEM",
    payload: {
      item: item
    }
  };
};

export const removeFromCart = item => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      item: item
    }
  };
};
