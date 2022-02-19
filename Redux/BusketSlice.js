import { createSelector, createSlice } from '@reduxjs/toolkit'

export const BasketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, actions) => {
      state.items.push(actions.payload)
    },
  },
})

// redux-thunk fetch data from firestore

export const { addToBasket } = BasketSlice.actions

export const getTotalPrice = createSelector(
  (state) => state.basket.items,
  (basket) => {
    let total = 0
    for (let id in basket) {
      total += Number(basket[id]?.price)
    }
    return total
  },
)

export default BasketSlice.reducer
