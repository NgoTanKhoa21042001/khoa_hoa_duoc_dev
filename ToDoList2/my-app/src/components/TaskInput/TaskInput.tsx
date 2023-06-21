import React from 'react'
import styles from './taskinput.module.scss'
const TaskInput = () => {
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list Typescript</h1>
      <div className={styles.form}>
        <input type='text' placeholder='caption goes here' />
        <button type='submit'>➕</button>
      </div>
    </div>
  )
}

export default TaskInput
