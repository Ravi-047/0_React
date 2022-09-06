import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const inputFocus = useRef(null);

    useEffect(() => {
        inputFocus.current.focus();
    })
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();

        props.onSubmit({
            id: Date.now(),
            text: input,
        })
        setInput("")
    };

    return (
        <form className='todo_form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type="text" placeholder="Update you Item" value={input} name="text" className="todo_input edit" onChange={handleChange}
                        ref={inputFocus} />
                    <button className='todo_button edit'>Update</button>
                </>
            ) : (<>
                <input type="text" placeholder="Add a todo" value={input} name="text" className="todo_input" onChange={handleChange}
                    ref={inputFocus} />
                <button className='todo_button'>Add Todo</button>
            </>)}

        </form >
    )
}

export default TodoForm