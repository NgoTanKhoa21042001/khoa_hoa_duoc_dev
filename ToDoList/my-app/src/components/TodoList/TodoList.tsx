import { useEffect, useState } from 'react'
import { Todo } from '../../@types/todo.type'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  // lọc lấy ra ông hoàn thành
  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  // lấy từ local storage ra

  useEffect(() => {
    const todoString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todoString || '[]')

    setTodos(todosObj)
  }, [])
  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])

    const todoString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todoString || '[]')
    // todosObj này vẫn là giá trị ban đầu, chưa add gi thêm
    const newTodosObj = [...todosObj, todo]

    localStorage.setItem('todos', JSON.stringify(newTodosObj))
  }

  // edit
  // tìm ra cái todo nào cần edit
  const startEdit = (id: string) => {
    const findTodo = todos.find((todo) => todo.id === id)
    if (findTodo) {
      setCurrentTodo(findTodo)
    }
  }
  // tìm kiếm todo nào cần edit
  // Hàm setCurrentTodo nhận vào một giá trị mới cho state currentTodo, và khi giá trị mới được cập nhật, React sẽ tự động render lại component để hiển thị giá trị mới đó.
  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return { ...prev, name }
      }
      return null
    })
  }

  const finishEditTodo = () => {
    const handler = (todosObj: Todo[]) => {
      return todosObj.map((todo) => {
        if (todo.id === currentTodo?.id) {
          return currentTodo
        }
        return todo
      })
    }
    setTodos(handler)
    // set lại null để thoát khỏi edit
    setCurrentTodo(null)

    const todoString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todoString || '[]')
    // todosObj này vẫn là giá trị ban đầu, chưa add gi thêm
    const newTodosObj = handler(todosObj)

    localStorage.setItem('todos', JSON.stringify(newTodosObj))
  }
  // delete

  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    setTodos((prev) => {
      const findIndexTodo = prev.findIndex((todo) => todo.id === id)
      if (findIndexTodo > -1) {
        // nên clone nó prev
        const result = [...prev]
        result.splice(findIndexTodo, 1)
        return result
      }
      // return state ban dau ko thay doi
      return prev
    })
  }

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
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
        <TaskList todos={notDoneTodos} handleDoneTodo={handleDoneTodo} startEdit={startEdit} deleteTodo={deleteTodo} />
        <TaskList
          taskListDone
          todos={doneTodos}
          handleDoneTodo={handleDoneTodo}
          startEdit={startEdit}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
