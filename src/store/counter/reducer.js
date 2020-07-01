import { increment, decrement, reset } from './action'

export function counter(state = 0, action) {
  console.log(action)
  switch (action.type) {
    case increment.type:
      return state + 1

    case decrement.type:
      return state - 1

    case reset.type:
      return 0

    default:
      return state
  }
}
