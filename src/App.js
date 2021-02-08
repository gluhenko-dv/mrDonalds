import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { NavBar } from "./components/navbar/NavBar";
import { Menu } from "./components/menu/Menu";
import { ModalItem } from "./components/modal/ModalItem";
import { Order } from "./components/order/Order";
import { useOpenItem } from "./components/hooks/useOpenItem";
import { useOrders } from "./components/hooks/useOrders";
import { useAuth } from "./components/hooks/useAuth";

const firebaseConfig = {
  apiKey: "AIzaSyAwxxuAvd_PS39Eyyf4xn1hP8P_UE3xbHU",
  authDomain: "mrdonalds-9d6a1.firebaseapp.com",
  databaseURL: "https://mrdonalds-9d6a1-default-rtdb.firebaseio.com",
  projectId: "mrdonalds-9d6a1",
  storageBucket: "mrdonalds-9d6a1.appspot.com",
  messagingSenderId: "1052110442389",
  appId: "1:1052110442389:web:1f51cabdb34152a8aaf09c",
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <NavBar {...auth } />
      <Order {...orders} {...openItem}  {...auth } />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
