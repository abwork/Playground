import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import './App.css'

function App() {
  
  const todosList = todosData.map(item => <TodoItem key={item.id} task={item}/>)

    return (
        <div className="todo-list">
          {todosList}
        </div>
    )
}

export default App