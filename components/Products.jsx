import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import store from "../Redux/store";
import { addToBasket } from "../Redux/BusketSlice";
import { Alert, Modal } from "@mantine/core";
import loginWidthGoogle from "../utils/loginWithGoogle";

const Products = ({ products }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user.userId);
  const [opened, setOpen] = useState(false);

  const addItemToBasket = (id, name, img, price) => {
    if (user) {
      store.dispatch(
        addToBasket({
          id: id,
          name: name,
          img: img,
          price: price,
        })
      );
    } else {
      setOpen(true);
      console.log("you are not");
    }
  };
  return (
    <div className="space-y-4 w-[80%] mx-auto">
      <Modal opened={opened} onClose={() => setOpen(false)}>
        <div className="flex flex-col items-center space-x-5">
          <h2 className="text-lg font-medium">
            You are not logged In please Log in
          </h2>
          <button
            onClick={loginWidthGoogle}
            className="flex items-center space-x-4 font-bold shadow-sm hover:shadow-lg p-4 rounded-xl"
          >
            <img
              className="w-16 h-16"
              src="data:image/png;base64,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"
            />
            <span>Sign in width Google</span>
          </button>
        </div>
      </Modal>
      <h2 className="text-center text-2xl font-bold ">Our Products</h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.docId}
            className="shadow-md hover:shadow-xl p-4 flex max-w-[500px] w-full flex-col items-center cursor-pointer hover:scale-105 transition duration-100 ease-out max-h-[400px] overflow-hidden border-gray-500 rounded-md"
          >
            <img
              src={product?.img}
              className=" h-[50%] object-contain w-[60%]"
              alt={product.name}
            />
            <h2 className="text-3xl text-center tracking-wide font-bold">
              {product.name}
            </h2>
            <p className="text-xl text-[#ee2b59] font-bold">{`₹ ${product.price}`}</p>
            {product.warrenty ? (
              <p className="text-lg ">{`${product.warrenty} warrenty`}</p>
            ) : null}
            <button
              onClick={() =>
                addItemToBasket(
                  product.docId,
                  product.name,
                  product.img,
                  product.price
                )
              }
              className="w-full hover:font-bold mt-auto py-2 bg-black text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
