import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import BasketReducer from './BusketSlice'
import UserReducer from './UserSlice'
import thunk from 'redux-thunk'

export default configureStore({
  reducer: {
    basket: BasketReducer,
    user: UserReducer,
  },
  middleware: [thunk],
})
