import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      userId: '',
      name: '',
      email: '',
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.userId = action.payload.userId
      state.name = action.payload.name
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.address = action.payload.address
    },
  },
})

export const { User, addUser } = UserSlice.actions

export default UserSlice.reducer
