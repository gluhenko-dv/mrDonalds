import React from "react";
import { ButtonCheckout } from "../ButtonCheckout";
import { OrderListItem } from "./OrderListItem";
import { totalPriceItems } from "../modal/ModalItem";
import { toLocalRu } from "../functions/secondaryFunction";

export const Order = ({ orders }) => {
  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
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
          <span>5</span>
          <span>
            {toLocalRu(total)}
          </span>
        </div>
        <ButtonCheckout>Отправить</ButtonCheckout>
      </div>
    </>
  );
};
