import { createSlice } from '@reduxjs/toolkit'
import { ASYNC_STATUSES } from 'CONSTANTS'
import { path, assoc, isNotNil } from '@frankycty/rm-extra'

const { PENDING, FULFILLED, REJECTED } = ASYNC_STATUSES

const asyncStateSlice = createSlice({
  name: 'asyncState',
  initialState: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      function isPendingAction(action) {
        return action.type.endsWith(PENDING)
      },
      function reducer(state, action) {
        const splitType = action.type.split('/')
        const baseType = `${splitType[0]}/${splitType[1]}`
        const requestId = path(['meta', 'arg', 'requestId'], action)

        if (isNotNil(requestId)) {
          state[baseType] = assoc(requestId, { status: PENDING }, state[baseType])
        } else {
          state[baseType] = { status: PENDING }
        }
      }
    )

    builder.addMatcher(
      function isFulfilledAction(action) {
        return action.type.endsWith(FULFILLED)
      },
      function reducer(state, action) {
        const splitType = action.type.split('/')
        const baseType = `${splitType[0]}/${splitType[1]}`
        const requestId = path(['meta', 'arg', 'requestId'], action)

        if (isNotNil(requestId)) {
          state[baseType] = assoc(requestId, { status: FULFILLED }, state[baseType])
        } else {
          state[baseType] = { status: FULFILLED }
        }
      }
    )

    builder.addMatcher(
      function isRejectedAction(action) {
        return action.type.endsWith(REJECTED)
      },
      function reducer(state, action) {
        const splitType = action.type.split('/')
        const baseType = `${splitType[0]}/${splitType[1]}`
        const requestId = path(['meta', 'arg', 'requestId'], action)

        if (isNotNil(requestId)) {
          state[baseType] = assoc(
            requestId,
            { status: REJECTED, error: action.payload },
            state[baseType]
          )
        } else {
          state[baseType] = { status: REJECTED, error: action.payload }
        }
      }
    )
  },
})

const { reducer: asyncStateReducer } = asyncStateSlice
export { asyncStateReducer }
