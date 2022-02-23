import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist((set, get) => ({
    basket: [],
    // addToBasket: (item) => set(() => ({ basket: [...get(basket), item] })),
    addToBasket: (item) => {
      if (get(basket).some((item) => item.id === item.id)) {
      } else {
        set(() => ({ basket: [...get(basket), item] }))
      }
    },
    total: () =>
      set(() => ({
        total: get(basket).reduce((acc, item) => acc + item.price, 0),
      })),
  })),
)

export const useUser = create((set) => ({
  user: {},
  login: (user) =>
    set(() => ({
      user: {
        userId: user.uid,
        name: user.displayName,
        email: user.email,
      },
    })),
}))
