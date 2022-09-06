import React, { useState } from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { TiEdit } from "react-icons/ti"
import TodoForm from './TodoForm'

function Todo(props) {
    const { todos, completeTodo, removeTodo, updateTodo } = props
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })
    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo, index) => (
        <div className={todo.iscomplete ? "todo_row complete" : "todo_row"} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div clasName="icons">
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete_icon" />
                <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit_icon" />
            </div>
        </div>
    ))
}

export default Todo