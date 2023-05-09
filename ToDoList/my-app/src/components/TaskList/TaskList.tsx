import { Todo } from '../../@types/todo.type'
import styles from './taskList.module.scss'
// khai báo interface
interface TaskListProps {
  taskListDone?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
}

export default function TaskList(props: TaskListProps) {
  const { taskListDone, todos, handleDoneTodo } = props
  return (
    <div className='mb-2'>
      {taskListDone ? <h2 className={styles.title}>Hoàn thành</h2> : <h2 className={styles.title}>Chưa Hoàn thành</h2>}
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <div className={styles.titleContain}>
              <input
                type='checkbox'
                className={styles.taskCheckbox}
                checked={todo.done}
                onChange={(event) => handleDoneTodo(todo.id, event.target.checked)}
              />
              <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            </div>

            <div className={styles.taskAction}>
              <button className={styles.taskBtn}>🖋️</button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
