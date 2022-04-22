import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist((set, get) => ({
    basket: [],
    addToBasket: (item) => {
      set((state) => ({ basket: [...state.basket, item] }));
    },
    total: () =>
      set(() => ({
        total: get(basket).reduce((acc, item) => acc + item.price, 0),
      })),
  }))
);

export const useUser = create((set, get) => ({
  User: undefined,
  setUser: async (user) =>
    set({
      User: {
        userID: await user.uid,
        name: await user.displayName,
      },
    }),
}));
