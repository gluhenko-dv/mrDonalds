import React from "react";

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выбирайте</h3>
      <div className="choice">
        {openItem.choices.map((item, i) => (
          <label className="choice-label" key={i}>
            <input
              className="choice-radio"
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </label>
        ))}
      </div>
    </>
  );
}
