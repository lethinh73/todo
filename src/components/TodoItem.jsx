import React from 'react'

export const TodoItem = (props) => {
    return (
        <div>
            <p className="todo-item-text">{props.name} - {props.code}</p>
        </div>
    )
}
