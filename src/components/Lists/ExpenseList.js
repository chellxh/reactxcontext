import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { ListContext } from "../context/context";

function ExpenseList() {
  const { expenseList, handleDeleteExpenseByIndex } = useContext(ListContext);

  return (
    <div>
      <h2>Expense</h2>
      <ul>
        {expenseList.map((item, index) => {
          return (
            <li key={index} className="li-style">
              <span>{item.description}</span> <span>{item.amount}</span>
              <FontAwesomeIcon
                onClick={() => handleDeleteExpenseByIndex(index)}
                icon={faTrash}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExpenseList;
