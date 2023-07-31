export type ActionType = IncreaseAgeAction | DecreaseAgeAction | IncreaseXAgeAction

type IncreaseAgeAction = { type: 'increase_age' }
type DecreaseAgeAction = { type: 'decrease_age' }
type IncreaseXAgeAction = { type: 'increase_xage'; payload: number }

// Reducer
//Func action
export const increaseAgeAction = () => {
  // as như này để khỏi mất công dài dòng
  return { type: 'increase_age' } as IncreaseAgeAction
}

export const decreaseAgeAction = () => {
  return { type: 'decrease_age' } as DecreaseAgeAction
}

export const increaseXAgeAction = (payload: number) => {
  return { type: 'increase_xage', payload } as IncreaseXAgeAction
}
