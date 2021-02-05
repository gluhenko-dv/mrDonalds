import { useState } from "react";

const getTopping = (toppings:any) =>
  toppings.map((item:any) => ({
    name: item,
    checked: false,
  }));

export function useToppings(openItem:any) {
  const readyTopping = openItem.topping
    ? openItem.topping
    : openItem.toppings
    ? getTopping(openItem.toppings)
    : [];
  const [toppings, setToppings] = useState(readyTopping);
  const checkToppings = (index:any) => {
    setToppings(
      toppings.map((item:any, i:any) => {
        const newItem = { ...item };
        if (i === index) {
          newItem.checked = !newItem.checked;
        }
        return newItem;
      })
    );
  };
  return { toppings, checkToppings };
}
