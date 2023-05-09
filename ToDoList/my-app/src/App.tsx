import React from 'react'
import styles from './app.module.scss'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TodoList from './components/TodoList'
function App() {
  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App
