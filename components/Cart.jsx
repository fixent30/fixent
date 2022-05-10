import { useRouter } from "next/router";
import { Drawer } from "@mantine/core";
import { useEffect } from "react";

import loginWidthGoogle from "../utils/loginwithGogole";
import { useStore, useUser } from "../Redux/useStore";
import { getTotalPrice } from "../utils/getTotalPrice";

const Cart = ({ open, setOpen }) => {
  const user = useUser((state) => state.User);
  const basket = useStore((state) => state.basket);

  const total = getTotalPrice(basket);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(basket));
  }, [basket]);

  const router = useRouter();

  const removeItemfromBasket = (item) => {
    basket.splice(
      basket.findIndex((e) => e.name === item.name),
      1
    );
  };

  console.log(basket);

  return (
    <div>
      <p>{total}</p>
    </div>
  );
};

export default Cart;
