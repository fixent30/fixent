import getProductsById from '../../utils/getProductsByID'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { addToBasket } from '../../Redux/BusketSlice'
import store from '../../Redux/store'
import { useSelector } from 'react-redux'

const Products = ({ data }) => {
  const state = useSelector((state) => state.basket.items)
  const router = useRouter()

  const [quantity, setQuantity] = useState(1)

  const addItemToBasket = () => {
    store.dispatch(
      addToBasket({
        id: router.query.id,
        name: data.name,
        img: data.img,
        price: data.price,
        quantity: quantity,
      }),
    )
  }

  return (
    <div className="px-8 py-4 lg:w-[80%] mx-auto">
      <div className="flex  items-center justify-between">
        <div
          onClick={() => router.back()}
          className="flex space-x-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
        <div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="bg-red-500 text-white grid place-items-center rounded-full w-6 h-6">
              {state.length}
            </span>
          </div>
        </div>
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
            <button
              onClick={addItemToBasket}
              className="w-full bg-black text-white font-bold rounded-md py-2 hover:rounded-2xl duration-100 transition ease-out"
            >
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
