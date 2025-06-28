import React from "react";

function FieldSelector({ activeField, setActiveField }) {
  const fields = ["작곡", "작사", "믹싱", "보컬"];

  return (
    <div className="option-list">
      <h1>분야*</h1>
      <ul className="list-set">
        {fields.map((field) => (
          <li
            key={field}
            onClick={() => setActiveField(field)}
            className={activeField === field ? "on" : ""}
          >
            {field}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FieldSelector;
