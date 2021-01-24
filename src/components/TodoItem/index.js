import React, { useState } from 'react';
import './styles.scss';

const TodoItem = (props) => {
    const [isCompleted, setIsCompleted] = useState('');

    const handleCheckboxChange = event => {
        const target = event.target,
            checked = target.checked

        setIsCompleted(checked)
    }

    return (
        <li className='todo__item'>
            <div className="todo__item-inner">
                <input
                    className="todo__checkbox"
                    type="checkbox"
                    name="isCompleted"
                    checked={isCompleted}
                    onChange={handleCheckboxChange}
                />
                <label className="todo__text" htmlFor="isCompleted">
                    {props.todo}
                </label>
            </div>
        </li>
    )
}

export default TodoItem
