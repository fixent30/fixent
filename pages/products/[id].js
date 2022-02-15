import React from 'react'
import getProductsById from '../../utils/getProductsByID'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Products = ({ data }) => {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="px-8 py-4 lg:w-[80%] mx-auto">
      <div className="flex space-x-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => router.back()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <p className="text-gray-600">back to home</p>
      </div>
      <div className="flex flex-col my-4 lg:flex-row items-center">
        <img src={data.img} className="w-[50%]" alt={data.name} />
        <div className="ml-20">
          <h2 className="text-5xl leading-[2] font-bold text-gray-800">
            {data?.name}
          </h2>
          <p className="text-gray-500 text-lg">{`${data?.warrenty} warrenty`}</p>
          <p className=" text-red-500 font-bold my-2 text-2xl">{`₹ ${data?.price}`}</p>
          <div className="flex items-center my-2 space-x-4">
            <label className="text-gray-500" htmlFor="quantity">
              Qauntity:
            </label>
            <input
              type="number"
              step="1"
              className="bg-gray-200"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="space-y-3 my-4 lg:my-8">
            <button className="w-full bg-black text-white font-bold rounded-md py-2 hover:rounded-2xl duration-100 transition ease-out">
              Add to Cart
            </button>
            <button className="w-full bg-red-500 hover:rounded-2xl duration-100 transition ease-out text-white font-bold rounded-md py-2">
              buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

export async function getServerSideProps({ query }) {
  const res = await getProductsById(query.id)
  const Json = JSON.stringify(res)
  const data = JSON.parse(Json)
  return {
    props: { data },
  }
}
