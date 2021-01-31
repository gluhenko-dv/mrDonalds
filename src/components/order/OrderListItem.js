import React from "react";
import { totalPriceItems } from "../modal/ModalItem";

export const OrderListItem = ({ order }) => (
  <div className="order-item">
    <span className="item-name">{order.name}</span>
    <span>{order.count}</span>
    <span className="item-price">
      {totalPriceItems(order).toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
      })}
    </span>
    <button className="trash-btn"></button>
  </div>
);
