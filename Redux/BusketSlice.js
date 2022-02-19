import { createSelector, createSlice } from '@reduxjs/toolkit'

export const BasketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, actions) => {
      // if product already exists in basket, increase quantity
      if (state.items.map((item) => item.id).includes(actions.payload.id)) {
        state.items.forEach((item) => {
          if (item.id === actions.payload.id) {
            item.quantity += 1
          }
        })
      } else {
        state.items = [...state.items, actions.payload]
      }
      return state
    },
  },
})

export const { addToBasket } = BasketSlice.actions

export const getTotalPrice = createSelector(
  (state) => state.basket.items,
  (basket) => {
    let total = 0
    for (let id in basket) {
      total += Number(basket[id].price)
    }
    return total
  },
)

export default BasketSlice.reducer
