import React from 'react';
import styled from 'styled-components';
import {ButtonCheckout} from '../ButtonCheckout';
import {useCount} from '../hooks/useCount';
import {CountItem} from './CountItem';
import {totalPriceItems, formatCurrency} from '../functions/secondaryFunction';
import {Toppings} from './Toppings';
import {Choices} from './Choices';

import {useToppings} from '../hooks/useToppngs';
import {useChoices} from '../hooks/useChoices';

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-position: center;
  background-size: cover;
`;
const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {
  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;
  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <div className="overlay" id="overlay" onClick={closeModal}>
      <div className="modal">
        <Banner img={openItem.img} />
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title">{openItem.name}</p>
            <p className="modal-price">{formatCurrency(openItem.price)}</p>
          </div>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonCheckout onClick={isEdit ? editOrder : addToOrder} disabled={order.choices && !order.choice}>
            {isEdit ? `Редактировать` : `Добавить`}
          </ButtonCheckout>
        </div>
      </div>
    </div>
  );
};
