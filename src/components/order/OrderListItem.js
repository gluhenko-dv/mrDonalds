import React from "react";

export const OrderListItem = ({ order }) => (
  <div className="order-item">
    <span className="item-name">{order.name}</span>
    <span>5</span>
    <span className="item-price">
      {order.price.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
      })}
    </span>
    <button className="trash-btn"></button>
  </div>
);
