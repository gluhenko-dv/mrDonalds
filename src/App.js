import React from "react";
import { NavBar } from "./components/NavBar";
import { Menu } from "./components/Menu";
import { ModalItem } from "./components/ModalItem";

function App() {
  const [openItem, setOpenItem] = React.useState(null);
  console.log("openItem: ", openItem);

  return (
    <>
      <NavBar />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
