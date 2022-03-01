import { useStore } from '../Redux/useStore'
import { getTotalPrice } from '../utils/getTotalPrice'

const CheckOut = () => {
  const basket = useStore((state) => state.basket)
  const total = getTotalPrice(basket)
  return (
    <div className="w-full min-h-screen grid place-items-center  bg-[#F2F2F2]">
      <main className=" w-[80%]  grid grid-cols-5 gap-5 mx-auto">
        <div className=" min-h-[550px] col-span-3 p-8 shadow-lg rounded-lg bg-white">
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-600 font-bold">
                FirstName
              </label>
              <input className="bg-white border-2 font-bold " />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-600 font-bold">
                LastName
              </label>
              <input className="bg-white border-2 font-bold " />
            </div>
          </div>
          <div className="flex flex-col space-y-2 my-4">
            <label className="text-sm text-gray-600 font-bold">
              Buding Name
            </label>
            <input className="bg-white border-2 " />
          </div>
          <div className="flex flex-col space-y-2 my-4">
            <label className="text-sm text-gray-600 font-bold">Address</label>
            <input className="bg-white border-2 " />
          </div>
          <div className="flex flex-col space-y-2 my-4">
            <label className="text-sm text-gray-600 font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="97655543289"
              className="bg-white border-2 "
            />
          </div>
        </div>
        <div className="w-[400px]  overflow-hidden shadow-lg min-h-[450px] bg-white p-6 rounded-xl ">
          <div className="overflow-y-auto">
            {basket.map((item) => (
              <div
                key={item.id}
                className="flex items-center my-2 justify-between"
              >
                <div className="flex items-center space-x-4 ">
                  <img
                    src={item.img}
                    className="h-16 p-2 w-16 border border-gray-100"
                  />
                  <h2 className="text-sm font-medium">{item.name}</h2>
                </div>
                <h2>{`₹${item.price}`}</h2>
              </div>
            ))}
          </div>

          <div className="my-4 flex items-center justify-between">
            <h2 className="text-lg text-gray-500">Total :</h2>
            <p className="text-2xl">{`₹ ${total}`}</p>
          </div>
          <button className="w-full py-2 bg-black text-white rounded-md shadow-md hover:scale-105 transition duration-100 ease-out font-bold">
            Place Order
          </button>
        </div>
      </main>
    </div>
  )
}

export default CheckOut
