import { createStore, combineReducers } from 'redux'
import { counter } from './counter/reducer'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      counter,
    })
  )

  return store
}

export default configureStore
