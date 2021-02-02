import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../ButtonCheckout";
import { useCount } from "../hooks/useCount";
import { CountItem } from "./CountItem";
import { toLocalRu } from "../functions/secondaryFunction";
const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
`;
const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;
export const totalPriceItems = (order) => order.price * order.count;
export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();

  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
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
            <p className="modal-price">{openItem.price}</p>
          </div>
          <CountItem {...counter} />
          <TotalPriceItem>
            <span>Цена:</span>
            <span>
              { toLocalRu(totalPriceItems(order)) }
            </span>
          </TotalPriceItem>
          <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
        </div>
      </div>
    </div>
  );
};
