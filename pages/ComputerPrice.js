import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getCollectionData from "../utils/getCollectionData";

const ComputerPrice = () => {
  const [lapdata, setLapData] = useState([]);
  const [computerData, setComputerData] = useState([]);

  const [open, setOpen] = useState(false);

  const fetchComputerPrice = async () => {
    const compData = await getCollectionData("computerPrices");
    setComputerData(compData);
  };

  const fetchLaptopPrice = async () => {
    const lapData = await getCollectionData("laptopPrices");
    setLapData(lapData);
  };

  useEffect(() => {
    fetchComputerPrice();
    fetchLaptopPrice();
  }, []);

  console.log(lapdata);
  console.log(computerData);

  return (
    <div>
      <main className="px-2  mx-auto">
        <Header open={open} setOpen={setOpen} />
        <h2 className="text-center my-4 text-2xl font-bold">Laptop Prices</h2>

        <div
          name="laptopPrice"
          className="w-[80%] mx-auto grid  lg:grid-cols-3 gap-5"
        >
          {lapdata?.map((item) => (
            <div
              key={item.id}
              className=" border flex flex-col items-center p-5  rounded-xl"
            >
              <Image
                width={300}
                height={300}
                objectFit="contain"
                className="max-h-[300px]"
                src={item.pictures.src}
              />
              <p className="text-xl font-medium">{item.name}</p>
              <h2 className="font-bold text-lg">{item.price}</h2>
              <p className="text-lg text-gray-600"> {item.speces}</p>
            </div>
          ))}
        </div>
        <h2 className="text-center my-4 text-2xl font-bold">Computer Prices</h2>
        <div
          name="computerPrice"
          className="w-[80%] my-5 mx-auto grid lg:grid-cols-3 gap-10"
        >
          {computerData?.map((item) => (
            <div
              key={item.id}
              className=" border p-5 flex flex-col justify-between shadow-xl rounded-xl"
            >
              <p className="text-xl font-medium">{item.name}</p>
              <img src={item.pictures.src} />
              <div className="">
                <h2 className="font-bold text-lg">{item.price}</h2>
                <p className="text-lg text-gray-600"> {item.speces}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// export async function getServerSideProps() {
//   const res1 = await getCollectionData("laptopPrices");
//   const res2 = await getCollectionData("computerPrices");

//   const json1 = JSON.stringify(res1);
//   const json2 = JSON.stringify(res2);

//   const LapData = JSON.parse(json1);
//   const computerData = JSON.parse(json2);

//   return {
//     props: {
//       LapData,
//       computerData,
//     },
//   };
// }

export default ComputerPrice;
