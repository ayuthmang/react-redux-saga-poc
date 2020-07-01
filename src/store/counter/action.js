import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const reset = createAction('RESET')
export const incrementAsync = createAction('INCREMENT_ASYNC')
