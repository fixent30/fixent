import { useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";

import getCollectionData from "../utils/getCollectionData";

const Categories = () => {
  const [seatchTerm, setSearchTerm] = useState();

  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(150);

  const Tags = [
    "Ram",
    "SSD",
    "Mouse",
    "Monitor",
    "MotherBoard",
    "Cabinet",
    "Processor",
    "Smps",
    "Used",
  ];
  const [tag, setTag] = useState();

  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState(list);
  const ApplyMinMax = () => {
    const res = list.filter(
      (val) =>
        Number(val.price - (val.price * val.discount) / 100) > minValue &&
        Number(val.price - (val.price * val.discount) / 100) < maxValue
    );

    setList(res);
  };

  const fetchProduct = async () => {
    const data = await getCollectionData("Products");
    setList(data);
  };

  const filterResult = () => {
    const res = list.filter((val) =>
      val.name.toLowerCase().includes(seatchTerm)
    );
    setList(res);
  };

  const ApplyTags = (item) => {
    setTag(item);
    const res = list.filter((val) => val.tag == item);
    setFilterList(res);
    console.log(res);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(filterList);
  return (
    <div>
      <main className="w-[80%] mx-auto bg-white flex space-x-5">
        <div className="space-y-6  max-w-[350px] my-8 p-5">
          <div
            onClick={() => Router.back()}
            className="w-10 h-10 cursor-pointer hover:bg-gray-300 grid place-items-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-medium">Cateogries Screen</h2>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={() => filterResult()}
            placeholder="search..."
            className="bg-gray-200 t"
          />
          <div className="space-y-4">
            {Tags.map((item) => (
              <div
                key={item}
                onClick={() => ApplyTags(item)}
                className={`border px-8 py-2 cursor-pointer hover:bg-[#ee2b55]   ${
                  tag === item
                    ? "bg-[#ee2b55] text-white font-bold"
                    : "bg-gray-200"
                }  hover:text-white hover:font-bold`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            <div>
              <p>Min</p>
              <input
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
                className="bg-gray-200"
                type="number"
              />
            </div>
            <div>
              <p>Max</p>
              <input
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
                type="number"
                className="bg-gray-200"
              />
            </div>
          </div>
          <button
            onClick={() => ApplyMinMax()}
            className="bg-[#ee2b55] text-white w-full py-2 rounded-md"
          >
            Apply
          </button>
        </div>
        <div className="h-screen px-8 py-10 overflow-scroll grid grid-cols-4 scrollbar-hide gap-10">
          {filterList.map((product) => (
            <article
              key={product.docId}
              className="p-4 flex max-h-[300px] cursor-pointer hover:shadow-lg  border flex-col items-center"
            >
              <Image
                src={product.pictures.src}
                width={200}
                height={200}
                objectFit="contain"
              />
              <h2 className="text-2xl font-bold text-center">{product.name}</h2>
              <div className="flex my-auto space-x-4">
                <p className="text-xl font-bold text-green-600">
                  ₹
                  {Math.floor(
                    Number(product.price) -
                      (product.price * product.discount) / 100
                  )}
                </p>
                <p className="text-xl font-bold line-through text-[#ee2b55] ">₹ {product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;
