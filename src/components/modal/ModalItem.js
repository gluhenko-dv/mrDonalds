import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../ButtonCheckout";

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
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
          <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
        </div>
      </div>
    </div>
  );
};
