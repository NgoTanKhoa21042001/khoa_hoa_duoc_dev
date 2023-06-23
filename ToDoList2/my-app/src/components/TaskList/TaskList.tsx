import React, { useState } from 'react'
import { Todo } from '../../@types/todo.type'
import styles from './tasklist.module.scss'

interface TaskListProp {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}
const TaskList = (props: TaskListProp) => {
  // định nghĩa type cho todos la array
  const { doneTaskList, todos, handleDoneTodo, startEditTodo, deleteTodo } = props

  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={(event) => handleDoneTodo(todo.id, event.target.checked)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div className='style.taskAction'>
              <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                🖋️
              </button>
            </div>
            <div className='style.taskAction'>
              <button className={styles.taskBtn} onClick={() => deleteTodo(todo.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
