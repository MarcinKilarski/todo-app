import React from 'react'
import TodoItem from '../TodoItem/index'
import './styles.scss'


const TodoList = ({todos}) => {
    if (todos.length === 0) return null

    return (
        <ul className='todo__list'>
            {todos.map((todo, index) => (
                <TodoItem todo={todo} key={index} />
            ))}
        </ul>
    )
}

export default TodoList
