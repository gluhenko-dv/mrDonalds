import React from "react";

export function Toppings({ toppings, checkToppings }) {
  return (
    <div className="toping">
      <label className="toping-label">
        <input className="toping-checkbox" type="checkbox" />
        допы
      </label>
    </div>
  );
}
