import React from "react";
<<<<<<< HEAD
import {
  totalPriceItems,
  formatCurrency,
} from "../functions/secondaryFunction";
=======
import { totalPriceItems } from "../modal/ModalItem";
import { toLocalRu } from "../functions/secondaryFunction";

>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7
export const OrderListItem = ({ order }) => (
  <div className="order-item">
    <span className="item-name">{order.name}</span>
    <span>{order.count}</span>
<<<<<<< HEAD
    <span className="item-price">{formatCurrency(totalPriceItems(order))}</span>
=======
    <span className="item-price">
      {toLocalRu(totalPriceItems(order))}
    </span>
>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7
    <button className="trash-btn"></button>
  </div>
);
