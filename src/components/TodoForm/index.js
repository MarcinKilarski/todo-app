import React, { useState } from 'react'
import './styles.scss'

const TodoForm = ({ saveTodo }) => {
    const [value, setValue] = useState('')

    const handleInputChange = event => {
        setValue(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        saveTodo(value)
        setValue('')
    }

    return (
        <form className="todo__form" onSubmit={handleFormSubmit}>
            <input
                className="todo__input"
                variant="outlined"
                placeholder="I need to do..."
                margin="normal"
                onChange={handleInputChange}
                value={value}
            />
            <button className="todo__add">Add</button>
        </form>
    )
}

export default TodoForm
