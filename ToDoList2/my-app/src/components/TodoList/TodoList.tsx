import styles from './todolist.module.scss'
import React, { useEffect, useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'
const TodoList = () => {
  // định nghĩa type cho todos la array
  const [todos, setTodos] = useState<Todo[]>([])
  // edit
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todo) => !todo.done)

  useEffect(() => {
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    // hiển thị lên trình duyệt
    setTodos(todosObj)
  }, [])
  const addTodos = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
    // lấy ra trong storage
    const todosString = localStorage.getItem('todos')
    // parse, chuyển chuỗi thành obj
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    // add vào cái mới
    const newTodosObj = [...todosObj, todo]
    // bỏ vào lại storage
    localStorage.setItem('todos', JSON.stringify(newTodosObj))
  }

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

  const startEditTodo = (id: string) => {
    const findedtodo = todos.find((todo) => todo.id === id)

    if (findedtodo) {
      setCurrentTodo(findedtodo)
    }
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev)
        return {
          ...prev,
          name
        }
      return null
    })
  }

  const finishEditTodo = () => {
    const handler = (todosObj: Todo[]) => {
      return todosObj.map((todo) => {
        if (todo.id === currentTodo?.id) {
          return currentTodo as Todo
        }
        return todo
      })
    }
    setTodos(handler)
    setCurrentTodo(null)

    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newTodosObj = handler(todosObj)
    localStorage.setItem('todos', JSON.stringify(newTodosObj))
  }
  const deleteTodo = (id: string) => {
    const handler = (todosObj: Todo[]) => {
      const idToDelete = todosObj.filter((todo) => todo.id !== id)
      return idToDelete
    }
    if (currentTodo) {
      setCurrentTodo(null)
    }
    setTodos(handler)
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newTodosObj = handler(todosObj)
    localStorage.setItem('todos', JSON.stringify(newTodosObj))
  }
  return (
    <div className={styles.todoListContainer}>
      <TaskInput addTodos={addTodos} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
      <TaskList
        todos={notdoneTodos}
        handleDoneTodo={handleDoneTodo}
        startEditTodo={startEditTodo}
        deleteTodo={deleteTodo}
      />
      <TaskList
        doneTaskList
        todos={doneTodos}
        handleDoneTodo={handleDoneTodo}
        startEditTodo={startEditTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default TodoList
