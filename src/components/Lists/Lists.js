import React from "react";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";
import "./Lists.css";

function Lists() {
  return (
    <div className="list-grid">
      <IncomeList />
      <ExpenseList />
    </div>
  );
}

export default Lists;
