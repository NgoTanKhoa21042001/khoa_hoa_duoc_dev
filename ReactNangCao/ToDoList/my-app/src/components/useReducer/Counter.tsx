import React, { useReducer, useState } from 'react'
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from '../../reducer/actions'
import reducer, { init } from '../../reducer/reducer'
// mục đích khai báo trên này là để lấy types, ko cần khai báo interface
const initalState = {
  age: 26
}
// định nghĩa type action
// ACTION THƯỜNG LÀ OBJECT

export default function Counter() {
  //   const [state, setState] = useState<{ age: number }>({ age: 26 })
  // useReducer sẽ gọi lần đầu và gọi init này, và cái initalState này truyền vào init, và giá trị khởi tạo ko còn là initalState nữa => trở thành init(initialState) => obj sẽ là 30
  const [state, dispatch] = useReducer(reducer, initalState, init)

  const increaseAge = () => {
    // setState((prev) => ({ ...prev, age: prev.age + 1 }))
    // dispatch('increase_age')
    // thường là truyền function gọi cái gì đấy return về obj
    dispatch(increaseAgeAction())
  }
  const decreaseAge = () => {
    // setState((prev) => ({ ...prev, age: prev.age - 1 }))
    // dispatch('decrease_age')
    // thường là truyền function gọi cái gì đấy return về obj
    dispatch(decreaseAgeAction())
  }

  const increaseXAge = (value: number) => {
    // payload ở đây là value
    dispatch(increaseXAgeAction(value))
  }
  return (
    <div>
      <button onClick={decreaseAge} style={{ color: 'red' }}>
        Decrease Age
      </button>
      <p>Heelo you are {state.age}</p>
      <button onClick={increaseAge} style={{ color: 'green' }}>
        Increase Age
      </button>
      <button onClick={() => increaseXAge(3)} style={{ color: 'blue' }}>
        Increase X Age
      </button>
    </div>
  )
}
