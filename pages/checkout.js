import { useForm } from 'react-hook-form'
import { useUser, useStore } from '../Redux/useStore'
import { collection, doc, setDoc } from 'firebase/firestore'
import { getTotalPrice } from '../utils/getTotalPrice'
import { db } from '../utils/firebase'

const CheckOut = () => {
  const basket = useStore((state) => state.basket)
  const total = getTotalPrice(basket)

  const user = useUser((state) => state.user)
  console.log(user)
  const saveAddress = async (data) => {
    await setDoc(doc(collection(db, 'address'), user.userId), {
      data,
    })
  }
  const { register, handleSubmit } = useForm()
  return (
    <div
      onSubmit={handleSubmit(saveAddress)}
      className="w-full min-h-screen grid place-items-center  bg-[#F2F2F2]"
    >
      <main className=" w-[80%]  grid grid-cols-6 gap-5 mx-auto">
        <form className="  col-span-4 p-8 shadow-lg rounded-lg bg-white">
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-600 font-bold">
                FirstName
              </label>
              <input
                className="bg-white border-2 font-bold "
                {...register('firstname', { required: true })}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm text-gray-600 font-bold">
                LastName
              </label>
              <input
                className="bg-white border-2 font-bold "
                {...register('lastname', { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 my-4">
            <label className="text-sm text-gray-600 font-bold">
              Buding Name
            </label>
            <input
              className="bg-white border-2 "
              {...register('building', { required: true })}
            />
          </div>
          <div className="flex flex-col space-y-2 my-4">
            <label className="text-sm text-gray-600 font-bold">Address</label>
            <input
              className="bg-white border-2 "
              {...register('address', { required: true })}
            />
          </div>
          <div className="flex flex-col space-y-2 my-4">
            <label className="text-sm text-gray-600 font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="97655543289"
              className="bg-white border-2 "
              {...register('phone-number', {
                required: true,
                pattern: '[0-9]{3} [0-9]{3} [0-9]{4}',
              })}
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white font-bold px-8 py-2 rounded-lg hover:scale-105  transition ease-out duration-100"
          >
            Use This Address
          </button>
        </form>
        <div className="col-span-2  overflow-hidden shadow-lg min-h-[450px] bg-white p-6 rounded-xl ">
          <div className="overflow-y-auto">
            {basket?.map((item) => (
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
