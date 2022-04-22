import Image from "next/image";

const ProductCard = ({ product, addItemTobasket }) => {
  return (
    <article
      onClick={addItemTobasket}
      className="p-5 cursor-pointer hover:shadow-xl transition duration-100 ease-out rounded-xl border space-y-2 flex flex-col items-center"
    >
      <div className=" grid px-10 ">
        <Image
          src={product.pictures.src}
          alt={product.pictures.title}
          width={150}
          objectFit="contain"
          height={150}
        />
      </div>
      <h2 className="text-2xl font-bold ">{product.name}</h2>
      <div className="flex space-x-2 items-center ">
        <p className="font-bold text-[#ee2b55] text-xl">{`₹${product.price}`}</p>
        <p className="font-bold text-green-600">40% off</p>
      </div>
      <div className="flex space-x-4 mt-auto">
        <button className="bg-black  text-white font-bold px-6 py-2 rounded-2xl">
          Add to Cart
        </button>
        <button className="bg-[#ee2b55] text-white font-bold px-6 py-2 rounded-2xl">
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
