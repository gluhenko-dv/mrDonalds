import React from "react";
import {
  totalPriceItems,
  formatCurrency,
} from "../functions/secondaryFunction";
export const OrderListItem = ({ order }) => (
  <div className="order-item">
    <span className="item-name">{order.name}</span>
    <span>{order.count}</span>
    <span className="item-price">{formatCurrency(totalPriceItems(order))}</span>
    <button className="trash-btn"></button>
  </div>
);
