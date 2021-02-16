import React, {useContext} from 'react';
import styled from 'styled-components';
import {formatCurrency} from '../functions/secondaryFunction';
import {Context} from '../functions/context';
const Item = styled.li`
  background-image: ${({img}) => `url(${img})`};
`;
export const ListItem = ({itemList}) => {
  const {
    openItem: {setOpenItem},
  } = useContext(Context);
  return (
    <ul className="list">
      {itemList.map((item) => (
        <Item onClick={() => setOpenItem(item)} key={item.id} img={item.img} className="list-item">
          <p>{item.name}</p>
          <p>{formatCurrency(item.price)}</p>
        </Item>
      ))}
    </ul>
  );
};
