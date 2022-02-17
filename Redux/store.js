import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from './BusketSlice'
import UserReducer from './UserSlice'

export default configureStore({
  reducer: {
    basket: BasketReducer,
    user: UserReducer,
  },
})
