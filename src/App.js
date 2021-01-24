import React, { useState } from 'react'
import './App.scss'
import TodoForm from './components/TodoForm/index'
import TodoList from './components/TodoList/index'

function App() {
    const [todos, setTodos] = useState([])

    const saveTodo = todoText => {
        const trimmedText = todoText.trim(),
            isTextEmpty = trimmedText.length === 0

        if (isTextEmpty) return null

        setTodos(prevTodos => [...prevTodos, todoText])
    }

    return (
        <div className="app">
            <h1 className="heading">Todos</h1>
            <TodoForm saveTodo={saveTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default App
