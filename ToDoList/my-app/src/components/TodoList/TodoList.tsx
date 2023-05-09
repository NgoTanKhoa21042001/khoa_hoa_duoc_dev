import { useState } from 'react'
import { Todo } from '../../@types/todo.type'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  // lọc lấy ra ông hoàn thành
  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }
  console.log(todos)

  // xử lí phần done, mún biết done cái id nào
  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          // tìm ra đúng cái id thì change cái done
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        {' '}
        TodoList
        {/* khi truyyeenf props addTodo cần khai báo interface ở task input */}
        <TaskInput addTodo={addTodo} />
        <TaskList todos={notDoneTodos} handleDoneTodo={handleDoneTodo} />
        <TaskList taskListDone todos={doneTodos} handleDoneTodo={handleDoneTodo} />
      </div>
    </div>
  )
}
