import { FiChevronDown } from "react-icons/fi";

const JobSort = ({ totalResults }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <p className="text-gray-500 text-sm">
        <span className="font-medium text-gray-600">{totalResults}</span>{" "}
        results found
      </p>
      <div className="relative w-56">
        {" "}
        {/* Slightly wider to accommodate prefix */}
        <select className="appearance-none w-full bg-white pl-3 pr-8 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all cursor-pointer">
          <option value="recommended">
            <span className="text-[#7C8493]">Sort by:</span> Recommended
          </option>
          <option value="recent">
            <span className="text-[#7C8493]">Sort by:</span> Most Recent
          </option>
          <option value="match">
            <span className="text-[#7C8493]">Sort by:</span> Best Match
          </option>
          <option value="salary">
            <span className="text-[#7C8493]">Sort by:</span> Salary (High to
            Low)
          </option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <FiChevronDown className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default JobSort;
