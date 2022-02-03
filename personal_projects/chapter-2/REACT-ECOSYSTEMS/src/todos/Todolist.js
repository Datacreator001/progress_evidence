import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodolistItem from './TodolistItem'


export default function Todolist({todos=[{text:"hello"}]}) {
    return (
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map(todo=><TodolistItem todo={todo}/>)}
        </div>
    )
}
