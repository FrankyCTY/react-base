import { configureStore } from '@reduxjs/toolkit'
import { noteReducer } from 'modules/note'
import { asyncStateReducer } from 'modules/asyncState'

export const store = configureStore({
  reducer: { notes: noteReducer, asyncState: asyncStateReducer },
})
