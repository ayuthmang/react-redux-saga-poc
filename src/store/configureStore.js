import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { counter } from './counter/reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(
    combineReducers({
      counter,
    }),
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
