import React from 'react';
import styled from 'styled-components';
import {formatCurrency} from '../functions/secondaryFunction';

const Item = styled.li`
  background-image: ${({img}) => `url(${img})`};
`;
export const ListItem = ({itemList, setOpenItem}) => (
  <ul className="list">
    {itemList.map((item) => (
      <Item onClick={() => setOpenItem(item)} key={item.id} img={item.img} className="list-item">
        <p>{item.name}</p>
        <p>{formatCurrency(item.price)}</p>
      </Item>
    ))}
  </ul>
);
