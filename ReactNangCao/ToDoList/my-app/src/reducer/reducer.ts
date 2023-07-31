import { ActionType } from './actions'

export const initalState = {
  age: 26
}
export const init = (initalArg: typeof initalState) => {
  return { ...initalArg, age: initalState.age + 4 }
}
const reducer = (state: typeof initalState, action: ActionType) => {
  // if (action.type === 'increase_age') {
  //   return { ...state, age: state.age + 1 }
  // }
  // if (action.type === 'decrease_age') {
  //   return { ...state, age: state.age - 1 }
  // }

  // if (action.type === 'increase_xage') {
  //   return { ...state, age: state.age + action.payload }
  // }
  // throw new Error('Invalid action', action)
  switch (action.type) {
    case 'increase_age':
      return { ...state, age: state.age + 1 }
    case 'decrease_age':
      return { ...state, age: state.age - 1 }
    case 'increase_xage':
      return { ...state, age: state.age + action.payload }
    default:
      throw new Error('Invalid action', action)
  }
}

export default reducer
