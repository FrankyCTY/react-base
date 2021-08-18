import { path } from '@frankycty/rm-extra'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userService } from 'services'
import auth from 'auth'

const { authUtils } = auth

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ authId, firstName, lastName }, { rejectWithValue }) => {
    try {
      const newUser = await userService.createUser(authId, firstName, lastName)

      return newUser
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getLoggedInUserDetails = createAsyncThunk(
  'user/getLoggedInUserDetails',
  async (_, { rejectWithValue }) => {
    try {
      const user = await authUtils.getCurrentUserInfo()
      const authId = path(['attributes', 'sub'], user)

      return await userService.getUser(authId)
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getLoggedInUserDetails.fulfilled]: (state, action) => {
      const userDetails = action.payload.data
      state.initialState = userDetails
    },
  },
})

const { reducer: userReducer } = userSlice
export { userReducer }
