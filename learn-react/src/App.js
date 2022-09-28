import { useEffect } from "react";
import { useState } from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";



function App() {
    const DummyExpense = []

    const [expenses, setExpenses] = useState(DummyExpense)
    const fetchData = () => {
        fetch("https://json-servr-test.herokuapp.com/tasks")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setExpenses(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const addExpenxeHandler = (expense) => {
        fetch("https://json-servr-test.herokuapp.com/tasks", {
            method: "POST",
            body: JSON.stringify(expense),
            headers: {
                "content-type": "application/json"
            },
        })
            .then(res => {
                fetchData()
            })
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
            <NewExpense onAddExpense={addExpenxeHandler} />
            <Expenses expenses={expenses} />
        </div>
    )
}

export default App;