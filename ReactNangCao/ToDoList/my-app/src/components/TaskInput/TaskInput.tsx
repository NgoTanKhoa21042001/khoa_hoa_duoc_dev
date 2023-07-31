import { useCallback, useMemo, useState } from 'react'
import { Todo } from '../../@types/todo.type'
import Title from '../Title'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  // addTodo có kiểu dữ liệu function
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishEditTodo: () => void
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo } = props
  const [name, setName] = useState<string>('')
  // UseMEMO
  const address = useMemo(() => {
    return {
      street: '43 Ngo Gia Kham'
    }
  }, [])

  // useCallback

  const handleClick = useCallback((value: any) => {
    console.log(value)
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      if (name) setName('')
    } else {
      addTodo(name)
      setName('')
    }
  }
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }

  return (
    <div className='mb-2'>
      <Title address={address} handleClick={handleClick} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type='submit'> {currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}
