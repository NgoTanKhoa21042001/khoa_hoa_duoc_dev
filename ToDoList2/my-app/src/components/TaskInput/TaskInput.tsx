import React, { useState } from 'react'
import styles from './taskinput.module.scss'
interface TaskInputProp {
  addTodos: (name: string) => void
}
const TaskInput = (props: TaskInputProp) => {
  const { addTodos } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodos(name)
    setName('')
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list Typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='caption goes here' value={name} onChange={onChangeInput} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

export default TaskInput
