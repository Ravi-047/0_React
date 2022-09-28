import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const {onAddExpense} = props;
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Date.now()
        }
        onAddExpense(expenseData);
    }
  return (
    <div className="new_expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;