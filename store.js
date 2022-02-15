import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from './BusketSlice'

export default configureStore({
  reducer: {
    basket: BasketReducer,
  },
})
