import React from 'react'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  incrementAsync,
} from './store/counter/action'

function App(props) {
  return (
    <div>
      <div>
        <p>Count: {props.counter}</p>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <button onClick={props.reset}>reset</button>
        <button onClick={props.incrementAsync}>increment async</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ counter: state.counter })
const mapDispatchToProps = (dispatch) => ({
  increment() {
    dispatch(increment())
  },

  decrement() {
    dispatch(decrement())
  },

  reset() {
    dispatch(reset())
  },
  incrementAsync() {
    dispatch(incrementAsync())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
