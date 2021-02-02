import React from "react";
import { totalPriceItems } from "../modal/ModalItem";
import { toLocalRu } from "../functions/secondaryFunction";

export const OrderListItem = ({ order }) => (
  <div className="order-item">
    <span className="item-name">{order.name}</span>
    <span>{order.count}</span>
    <span className="item-price">
      {toLocalRu(totalPriceItems(order))}
    </span>
    <button className="trash-btn"></button>
  </div>
);
