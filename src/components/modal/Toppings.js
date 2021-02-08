import React from 'react';

export function Toppings({toppings, checkToppings}) {
  return (
    <>
      <h3 className="topping-title">Добавки</h3>
      <div className="toping">
        {toppings.map((item, i) => (
          <label className="toping-label" key={i}>
            <input className="toping-checkbox" type="checkbox" checked={item.checked} onChange={() => checkToppings(i)} />
            {item.name}
          </label>
        ))}
      </div>
    </>
  );
}
