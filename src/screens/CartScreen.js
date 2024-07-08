import { useReducer } from "react";
import { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM } from "../actions/cart.action";
import CartItem from "../components/CartItem";
import cartReducer from "../reducers/cart.reducer";
import { getItemInfo } from "../utils/cart.util";

const CartScreen = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    productCount: {},
  });
  // {[itemId]: "itemCount"} -> {"item2": 2}

  const getTotalPrice = () => {
    let totalValue = 0;
    Object.entries(state.productCount).forEach(([itemId, quantity]) => {
      const item = getItemInfo(itemId);
      totalValue += item.price * quantity;
    });
    return totalValue;
  };

  return (
    <>
      <div>
        <button
          onClick={() =>
            dispatch({ type: ADD_ITEM, payload: { itemId: "item1" } })
          }
        >
          Add Item 1
        </button>
        <button
          onClick={() =>
            dispatch({ type: ADD_ITEM, payload: { itemId: "item2" } })
          }
        >
          Add Item 2
        </button>
      </div>
      <div>
        {Object.entries(state.productCount).map(([itemId, quantity], index) => {
          return (
            <CartItem
              key={index}
              itemId={itemId}
              quantity={quantity}
              onPlusClick={() =>
                dispatch({ type: ADD_ITEM, payload: { itemId } })
              }
              onMinusClick={() =>
                dispatch({ type: DECREASE_ITEM, payload: { itemId } })
              }
              onDeleteClick={() =>
                dispatch({ type: REMOVE_ITEM, payload: { itemId } })
              }
            />
          );
        })}
        <div style={{ textAlign: "right" }}>
          Total Amount: {getTotalPrice()}
        </div>
      </div>
    </>
  );
};

export default CartScreen;
