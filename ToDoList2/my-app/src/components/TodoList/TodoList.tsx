import styles from './todolist.module.scss'
import React, { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'
const TodoList = () => {
  // định nghĩa type cho todos la array
  const [todos, setTodos] = useState<Todo[]>([])
  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todo) => !todo.done)

  const addTodos = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }
  console.log(todos)

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  return (
    <div className={styles.todoListContainer}>
      <TaskInput addTodos={addTodos} />
      <TaskList todos={notdoneTodos} handleDoneTodo={handleDoneTodo} />
      <TaskList doneTaskList todos={doneTodos} handleDoneTodo={handleDoneTodo} />
    </div>
  )
}

export default TodoList
