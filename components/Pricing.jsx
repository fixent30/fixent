const Pricing = ({ title, priceList }) => {
  return (
    <div className=" my-8">
      <h2 className="text-center my-4 text-lg lg:text-xl font-bold">{title}</h2>
      <div className="flex overflow-x-auto">
        {priceList?.map((item) => (
          <div
            className="min-w-[300px]  mr-4 text-center border grid place-items-center lg:p-6 p-2 rounded-md"
            key={item.docId}
          >
            <h2 className="text-xl font-bold">{item?.name}</h2>
            <p className="text-center text-lg text-gray-600">{item.speces}</p>
            <p className="text-lg font-bold">{`₹ ${item.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
