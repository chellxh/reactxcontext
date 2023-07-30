import React, { useContext } from "react";
import { HeaderContext } from "../context/context";
import "./Header.css";

function Header() {
  const { income, expense } = useContext(HeaderContext);

  return (
    <div className="budget-header">
      <h1>Current Budget</h1>
      <p>
        ${income} - ${expense} = {income - expense}
      </p>
      <br />
      <p>Income: {income}</p>
      <p>Expense: {expense}</p>
    </div>
  );
}

export default Header;
