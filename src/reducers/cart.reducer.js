import { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM } from "../actions/cart.action";

const cartReducer = (state, { type, payload }) => {
  const { productCount } = { ...state };
  switch (type) {
    case ADD_ITEM:
      if (!productCount[payload.itemId]) {
        productCount[payload.itemId] = 1;
      } else {
        productCount[payload.itemId]++;
      }
      return { ...state, productCount };
    case REMOVE_ITEM:
      delete productCount[payload.itemId];
      return { ...state, productCount };
    case DECREASE_ITEM:
      if (!productCount[payload.itemId]) {
        return state;
      }
      if (productCount[payload.itemId] - 1 === 0) {
        delete productCount[payload.itemId];
      } else {
        productCount[payload.itemId]--;
      }
      return { ...state, productCount };
    default:
      throw new Error("Enter Valid Action Type");
  }
};

export default cartReducer;
