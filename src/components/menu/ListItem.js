import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { formatCurrency } from "../functions/secondaryFunction";
=======
import { toLocalRu } from "../functions/secondaryFunction";
>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7

const Item = styled.li`
  background-image: ${({ img }) => `url(${img})`};
`;
export const ListItem = ({ itemList, setOpenItem }) => (
  <ul className="list">
    {itemList.map((item) => (
      <Item
        onClick={() => setOpenItem(item)}
        key={item.id}
        img={item.img}
        className="list-item"
      >
        <p>{item.name}</p>
<<<<<<< HEAD
        <p>{formatCurrency(item.price)}</p>
=======
        <p>{toLocalRu(item.price)}</p>
>>>>>>> a69f97973e7d5804f8585a9b7820797cd24280f7
      </Item>
    ))}
  </ul>
);
