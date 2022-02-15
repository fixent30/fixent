import React from "react";
import { useRouter } from "next/router";

const Products = ({ products }) => {
  const router = useRouter();
  return (
    <div className="space-y-4 w-[80%] mx-auto">
      <h2 className="text-center text-xl font-bold ">Our Products</h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.docId}
            onClick={() => router.push(`Products/${product.docId}`)}
            className="border p-4 flex max-w-[500px] w-full flex-col items-center cursor-pointer hover:scale-105 transition duration-100 ease-out max-h-[400px] overflow-hidden border-gray-500 rounded-md"
          >
            <img src={product?.img} className=" w-[60%]" alt={product.name} />
            <h2 className="text-3xl tracking-wide font-bold">{product.name}</h2>
            <p className="text-xl text-[#ee2b59] font-bold">{`₹ ${product.price}`}</p>
            <p className="text-lg ">{`${product.warrenty} warrenty`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
