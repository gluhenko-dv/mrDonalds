import React from "react";
import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";
import { Banner } from "./Banner";

export const Menu = ({ setOpenItem }) => (
  <div className="menu">
    <Banner />
    <section className="menu-list">
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
    </section>
    <section className="menu-list">
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
    </section>
  </div>
);
