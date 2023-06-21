import React from 'react'
import styles from './tasklist.module.scss'

interface TaskListProp {
  doneTaskList: boolean
}
const TaskList = (props: TaskListProp) => {
  const { doneTaskList } = props
  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Hoc Bai</span>
          <div className='style.taskAction'>
            <button className={styles.taskBtn}>🖋️</button>
          </div>
          <div className='style.taskAction'>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={`${styles.taskName} ${styles.taskNameDone}`}>Hoc Bai</span>
          <div className='style.taskAction'>
            <button className={styles.taskBtn}>🖋️</button>
          </div>
          <div className='style.taskAction'>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskList
