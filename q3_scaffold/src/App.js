import { useState } from "react";
import { useReducer } from 'react';
import transactionReducer from "./components/transactionReducer";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  const [expenses, dispatch] = useReducer(transactionReducer,[]);
  const deleteTransaction = (id) => {
    dispatch({
      type: 'delete',
      id,
    });
  };
  const addTransaction=(expense)=>{
    dispatch({
      type:'add',
      expense:expense
    })
  }
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addTransaction={addTransaction} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteTransaction} />
        </div>
      </div>
    </>
  );
}

export default App;
