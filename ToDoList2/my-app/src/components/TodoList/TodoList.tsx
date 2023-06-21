import styles from './todolist.module.scss'
import React from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
const TodoList = () => {
  return (
    <div className={styles.todoListContainer}>
      <TaskInput />
      <TaskList doneTaskList={false} />
      <TaskList doneTaskList />
    </div>
  )
}

export default TodoList
