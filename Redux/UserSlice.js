import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    name: '',
    email: '',
  },
  reducers: {
    login: (state, action) => {
      state.userId = action.payload.uid
      state.name = action.payload.displayName
      state.email = action.payload.email
    },
    logout: (state, action) => {
      state.userId = ''
      state.name = ''
      state.email = ''
    },
  },
})

export const { login, logout } = UserSlice.actions

export default UserSlice.reducer
