import React from 'react';
import {ListItem} from './ListItem';
import {Banner} from './Banner';
import {useFetch} from '../hooks/useFetch';

export const Menu = ({setOpenItem}) => {
  const res = useFetch();
  const dbMenu = res.response;
  return (
    <div className="menu">
      <Banner />
      {res.response ? (
        <>
          <section className="menu-list">
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </section>
          <section className="menu-list">
            <h2>Закуски и напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </section>
        </>
      ) : res.error ? (
        <div>Произошла ошибка :(</div>
      ) : (
        <div>Загрузка..</div>
      )}
    </div>
  );
};
