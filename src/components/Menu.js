import React from "react";
import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";

export const Menu = () => (
  <div className="menu">
    <section className="menu-list">
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </section>
    <section className="menu-list">
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbMenu.other}/>
    </section>
  </div>
);
