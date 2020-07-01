import { takeEvery, put } from 'redux-saga/effects'
import { increment, incrementAsync } from './action'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function* handleIncrementAsync() {
  yield delay(1000)
  yield put(increment())
}

export default function* () {
  yield takeEvery(incrementAsync.type, handleIncrementAsync)
}
