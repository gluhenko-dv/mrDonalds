import React from "react";
import { ButtonCheckout } from "../ButtonCheckout";
import { OrderListItem } from "./OrderListItem";

export const Order = ({ orders }) => {
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
          <span>850</span>
        </div>
        <ButtonCheckout>Отправить</ButtonCheckout>
      </div>
    </>
  );
};
