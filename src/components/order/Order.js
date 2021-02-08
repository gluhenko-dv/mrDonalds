import React from 'react';
import {ButtonCheckout} from '../ButtonCheckout';
import {OrderListItem} from './OrderListItem';
import {totalPriceItems, formatCurrency, projection} from '../functions/secondaryFunction';

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name), (arr) => (arr.length ? arr : 'no topping')],
  choice: ['choice', (item) => (item ? item : 'no choices')],
};

export const Order = ({orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase}) => {
  const dataBase = firebaseDatabase();

  const sendOrder = () => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder,
    });
  };

  const deleteItem = (index) => {
    const newOrders = orders.filter((item, i) => index !== i);
    setOrders(newOrders);
  };

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
  const totalCounter = orders.reduce((result, order) => order.count + result, 0);

  return (
    <>
      <div className="order">
        <h2 className="order-title">ВАШ ЗАКАЗ</h2>

        <div className="order-content">
          {orders.length ? (
            <div className="order-list">
              {orders.map((order, index) => (
                <OrderListItem order={order} key={index} deleteItem={deleteItem} setOpenItem={setOpenItem} index={index} />
              ))}
            </div>
          ) : (
            <p className="empty-list">Список заказов пуст</p>
          )}
        </div>
        <div className="total">
          <span>Итого</span>
          <span>{totalCounter}</span>
          <span className="total-price">{formatCurrency(total)}</span>
        </div>
        <ButtonCheckout onClick={() => (authentication ? sendOrder() : logIn())}>Отправить</ButtonCheckout>
      </div>
    </>
  );
};
