import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const {onSaveExpenseData} = props;
    const [enteredTitle, setEnteredTitile] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    
    const titleChangeHandler = (event) => {
        setEnteredTitile(event.target.value);
    }
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        
        onSaveExpenseData(expenseData)
        setEnteredTitile("")
        setEnteredAmount("")
        setEnteredDate("")
    }
    
  return (
    <form onSubmit={submitHandler}>
        <div className='new_expense__controls'>
            <div className='new_expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
            </div>
            
            <div className='new_expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required/>
            </div>
            
            <div className='new_expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler} required/>
            </div>
        </div>
        <div className='new_expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm