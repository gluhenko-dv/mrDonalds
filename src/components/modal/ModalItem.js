import React from "react";
import styled from "styled-components";
import { ButtonCheckout } from "../ButtonCheckout";
import { useCount } from "../hooks/useCount";
import { CountItem } from "./CountItem";
<<<<<<< HEAD
import {
  totalPriceItems,
  formatCurrency,
} from "../functions/secondaryFunction";
import { Toppings } from "./Toppings";
import { useToppings } from "../hooks/useToppngs";
=======
import { toLocalRu } from "../functions/secondaryFunction";
>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7
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

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();
  const toppings = useToppings(openItem);
  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings
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
          <TotalPriceItem>
            <span>Цена:</span>
<<<<<<< HEAD
            <span>{formatCurrency(totalPriceItems(order))}</span>
=======
            <span>
              { toLocalRu(totalPriceItems(order)) }
            </span>
>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7
          </TotalPriceItem>
          <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
        </div>
      </div>
    </div>
  );
};
