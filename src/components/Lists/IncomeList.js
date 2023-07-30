import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { ListContext } from "../context/context";

function IncomeList() {
  const { incomeList, handleDeleteIncomeByIndex } = useContext(ListContext);

  return (
    <div>
      <h2>Income</h2>
      <ul>
        {incomeList.map((item, index) => {
          return (
            <li key={index} className="li-style">
              <span>{item.description}</span> <span>{item.amount}</span>
              <FontAwesomeIcon
                onClick={() => handleDeleteIncomeByIndex(index)}
                icon={faTrash}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default IncomeList;
