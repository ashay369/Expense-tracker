import React, { useState } from "react";

import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import Cards from "../UI/Cards";

import ExpensesFilter from "./ExpensesFilter/ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const expenseYearFilterHandler = (year) => {
    setFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Cards className="expenses">
      <ExpensesFilter
        selected={filterYear}
        expenseYearFilter={expenseYearFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Cards>
  );
}

export default Expenses;
