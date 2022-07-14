import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [buttonClick, setButtonClick] = useState(false);

  const saveExpenseDataHandler = (enteredExpenceData) => {
    const expenseData = {
      ...enteredExpenceData,
      id: Math.random().toString(),
    };
    props.onAddexpense(expenseData);
    clickHandler();
  };

  const clickHandler = () => {
    setButtonClick(!buttonClick);
  };

  return (
    <div className="new-expense">
      {!buttonClick && <button onClick={clickHandler}>Add new expense</button>}

      {buttonClick && (
        <ExpenseForm
          onCancel={clickHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
