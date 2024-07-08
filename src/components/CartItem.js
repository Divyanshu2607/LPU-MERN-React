import { getItemInfo } from "../utils/cart.util";

const CartItem = (props) => {
  const item = getItemInfo(props.itemId);

  return (
    <div
      style={{
        border: "1px solid black",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
      }}
    >
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>
        <button onClick={props.onPlusClick}>+</button>
      </div>
      <div>
        <button onClick={props.onMinusClick}>-</button>
      </div>
      <div>
        <button onClick={props.onDeleteClick}>Delete</button>
      </div>
      <div>{props.quantity}</div>
    </div>
  );
};

export default CartItem;
