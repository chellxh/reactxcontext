import { useState } from "react";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Lists from "./components/Lists/Lists";

import { InputContext } from "./components/context/context";
import { ListContext } from "./components/context/context";
import { HeaderContext } from "./components/context/context";

import "./App.css";

function App() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [option, setOption] = useState("+");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  function handleDeleteIncomeByIndex(index) {
    const selectedIncomeToDelete = incomeList[index];

    setIncome(income - selectedIncomeToDelete.amount);
    setIncomeList(incomeList.filter((_, i) => i !== index));
  }

  function handleDeleteExpenseByIndex(index) {
    const expenseItemDelete = expenseList[index];

    setExpense(expense - expenseItemDelete.amount);

    setExpenseList(expenseList.filter((_, i) => i !== index));
  }

  const inputContextValue = {
    option,
    description,
    amount,
    setOption,
    setDescription,
    setAmount,
    handleOnSubmit,
  };

  const listContextValue = {
    incomeList,
    expenseList,
    handleDeleteExpenseByIndex,
    handleDeleteIncomeByIndex,
  };

  const headerContextValue = {
    income,
    expense,
  };

  function handleOnSubmit(e) {
    e.preventDefault();

    if (amount === 0) return;

    if (description.length === 0) return;

    if (option === "+") {
      setIncome(Number(income) + parseFloat(amount));
      setIncomeList([...incomeList, { description, amount }]);
    } else {
      setExpense(Number(expense) + parseFloat(amount));
      setExpenseList([...expenseList, { description, amount }]);
    }
    reset();
  }

  function reset() {
    setAmount("");
    setDescription("");
  }

  return (
    <div className="App">
      <HeaderContext.Provider value={headerContextValue}>
        <Header />
      </HeaderContext.Provider>

      <InputContext.Provider value={inputContextValue}>
        <Input />
      </InputContext.Provider>

      <ListContext.Provider value={listContextValue}>
        <Lists />
      </ListContext.Provider>
    </div>
  );
}

export default App;
