export const getTotalPrice = (basket) => {
  let total = 0
  for (let id in basket) {
    total += Number(basket[id].price)
  }
  return total
}
