import React from "react";
import { ButtonCheckout } from "../ButtonCheckout";
import { OrderListItem } from "./OrderListItem";
<<<<<<< HEAD
import {
  totalPriceItems,
  formatCurrency,
} from "../functions/secondaryFunction";
=======
import { totalPriceItems } from "../modal/ModalItem";
import { toLocalRu } from "../functions/secondaryFunction";
>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7

export const Order = ({ orders }) => {
  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );
  const totalCounter = orders.reduce(
    (result, order) => order.count + result,
    0
  );

  return (
    <>
      <div className="order">
        <h2 className="order-title">ВАШ ЗАКАЗ</h2>

        <div className="order-content">
          {orders.length ? (
            <div className="order-list">
              {orders.map((order) => (
                <OrderListItem order={order} />
              ))}
            </div>
          ) : (
            <p className="empty-list">Список заказов пуст</p>
          )}
        </div>
        <div className="total">
          <span>Итого</span>
<<<<<<< HEAD
          <span>{totalCounter}</span>
          <span className="total-price" >{formatCurrency(total)}</span>
=======
          <span>5</span>
          <span>
            {toLocalRu(total)}
          </span>
>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7
        </div>
        <ButtonCheckout>Отправить</ButtonCheckout>
      </div>
    </>
  );
};
