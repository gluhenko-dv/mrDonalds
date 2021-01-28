import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Menu } from "./components/menu/Menu";
import { ModalItem } from "./components/modal/ModalItem";
import { Order } from "./components/order/Order";
import { useOpenItem } from "./components/hooks/useOpenItem";
import { useOrders } from "./components/hooks/useOrders";

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <NavBar />
      <Order {...orders} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
