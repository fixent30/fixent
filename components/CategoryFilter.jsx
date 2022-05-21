import { useRouter } from "next/router";

const CategoryFilter = ({
  setSearchTerm,
  filterResult,
  ApplyTags,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  ApplyMinMax,
  Tags,
  tag,
}) => {
  const Router = useRouter();
  return (
    <div className="space-y-6  max-w-[350px] my-8 p-5">
      <div
        onClick={() => Router.back()}
        className="w-10 h-10 cursor-pointer hover:bg-gray-300 grid place-items-center rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
              tag === item ? "bg-[#ee2b55] text-white font-bold" : "bg-gray-200"
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
  );
};

export default CategoryFilter;
