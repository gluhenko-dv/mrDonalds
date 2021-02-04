import React from "react";
import {
  totalPriceItems,
  formatCurrency,
} from "../functions/secondaryFunction";
export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
  const topping = order.topping
    .filter((item) => item.checked)
    .map((item) => item.name)
    .join(", ");

  const refDeleteButton = React.useRef(null);
  return (
    <div
      className="order-item"
      onClick={(e) => {
        e.target !== refDeleteButton.current && setOpenItem({ ...order, index });
      }}
    >
      <span className="item-name">
        {order.name} {order.choice}
      </span>
      <span>{order.count}</span>
      <span className="item-price">
        {formatCurrency(totalPriceItems(order))}
      </span>
      <button
        className="trash-btn"
        ref={refDeleteButton}
        onClick={() => deleteItem(index)}
      ></button>
      {topping && <span className="item-toppins">{topping}</span>}
    </div>
  );
};
