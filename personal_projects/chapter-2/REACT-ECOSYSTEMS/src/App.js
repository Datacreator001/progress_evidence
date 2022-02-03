import React from "react"
import { hot } from "react-hot-loader"
import Todolist from "./todos/Todolist"
import './App.css'


const App =()=>(
    <div className="App">
      <Todolist />  
    </div>
)

export default hot(module)(App) 