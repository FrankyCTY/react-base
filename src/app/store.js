import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from 'modules/user'
import { asyncStateReducer } from 'modules/asyncState'

export const store = configureStore({
  reducer: { user: userReducer, asyncState: asyncStateReducer },
})
