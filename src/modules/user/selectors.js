import { path, prop } from '@frankycty/rm-extra'
import { createSelector } from '@reduxjs/toolkit'

const selectCreateUserStatus = path(['asyncState', 'user/createUser', 'status'])

const selectGetLoggedInUserDetailsStatus = path([
  'asyncState',
  'user/getLoggedInUserDetails',
  'status',
])

const selectUserState = prop('user')

const selectUserDetails = createSelector(selectUserState, prop('initialState'))

export { selectCreateUserStatus, selectGetLoggedInUserDetailsStatus, selectUserDetails }
