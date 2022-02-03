import React from 'react'

export default function TodoListItem({todo}) {
    return (
<div className="todo-item-cont">
    <h3>{todo.text}</h3>
    <div className="btns-container">
    <button className="completed">Mark as Completed</button>
    <button className="remove">Remove</button> 
    </div>
    
</div>
    )
}


