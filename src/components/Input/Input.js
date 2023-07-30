import React, { useContext } from "react";
import { InputContext } from "../context/context";
import "./Input.css";

function Input() {
  const {
    option,
    setOption,
    description,
    setDescription,
    amount,
    setAmount,
    handleOnSubmit,
  } = useContext(InputContext);

  return (
    <form onSubmit={handleOnSubmit} className="budget-form">
      <select
        value={option}
        onChange={(e) => setOption(e.target.value)}
        className="budget-select"
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <input
        type="text"
        placeholder="Add description"
        className="budget-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Add amount"
        className="budget-input"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="budget-submit">Submit</button>
    </form>
  );
}

export default Input;
