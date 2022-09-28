import React from 'react'
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const {expenses} = props;
  return (
    <div className='expenses'>
        {expenses && expenses.map((item) => <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />)}
    </div>
  )
}

export default Expenses