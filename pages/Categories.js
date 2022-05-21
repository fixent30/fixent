import { useEffect, useState } from "react";
import Image from "next/image";

import getCollectionData from "../utils/getCollectionData";
import CategoryFilter from "../components/CategoryFilter";

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

    setFilterList(res);
  };

  const fetchProduct = async () => {
    const data = await getCollectionData("Products");
    setList(data);
    setFilterList(data);
    setList(data);
  };

  const filterResult = () => {
    const res = list.filter((val) =>
      val.name.toLowerCase().includes(seatchTerm)
    );
    setFilterList(res);
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

  return (
    <main className="w-[80%] mx-auto bg-white flex space-x-5">
      <CategoryFilter
        ApplyTags={ApplyTags}
        minValue={minValue}
        maxValue={maxValue}
        tag={tag}
        Tags={Tags}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        ApplyMinMax={ApplyMinMax}
        filterResult={filterResult}
        setSearchTerm={setSearchTerm}
      />
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
              <p className="text-xl font-bold line-through text-[#ee2b55] ">
                ₹ {product.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Categories;
