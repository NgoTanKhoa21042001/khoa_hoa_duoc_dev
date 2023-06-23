import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Todo } from '../../@types/todo.type'
import styles from './taskinput.module.scss'
import Title from '../Title'
interface TaskInputProp {
  addTodos: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishEditTodo: () => void
}

const TaskInput = (props: TaskInputProp) => {
  const { addTodos, currentTodo, editTodo, finishEditTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      if (name) setName('')
    } else {
      addTodos(name)
      setName('')
    }
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTodo) {
      // nếu có curentTodo thì đang edit
      editTodo(event.target.value)
    } else {
      setName(event.target.value)
    }
  }
  // Mỗi lần taskinput re-render thì tạo instance address mới, vì thế re-render thì
  // có một address với tham chíu mới
  const address = useMemo(() => {
    return {
      street: '27 Ha Huy Tap'
    }
  }, [currentTodo])

  return (
    <div className='mb-2'>
      <Title address={address} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

TaskInput.propTypes = {
  addTodos: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  finishEditTodo: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOf([]).isRequired
}

export default TaskInput
