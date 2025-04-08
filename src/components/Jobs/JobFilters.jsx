import React, { useState } from "react";
import { Search, MapPin, Filter, Plus } from "lucide-react";
import FilterModal from "./FilterModal";

const JobFilters = ({ onSearch, onLocationChange, onNewSearch }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Top Buttons: New Search + Plus */}
      <div className="flex gap-2">
        <button
          onClick={onNewSearch}
          className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg bg-white text-[#1890FF] hover:text-blue-700 transition-colors"
        >
          New Search
        </button>
        <button
          onClick={onNewSearch}
          className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg bg-white text-[#1890FF] hover:text-blue-700 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Search Box Section */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0 divide-x divide-gray-200">
          {/* Job Title Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Dental Surgeon"
              className="w-full py-3 pl-4 pr-10 text-sm bg-white outline-none"
              onChange={(e) => onSearch(e.target.value)}
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1890FF]"
              size={18}
            />
          </div>

          {/* Location Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full py-3 pl-4 pr-10 text-sm bg-white outline-none"
              onChange={(e) => onLocationChange(e.target.value)}
            />
            <MapPin
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#1890FF]"
              size={18}
            />
          </div>
        </div>

        {/* Filter button */}
        <div className="border-t border-gray-200 py-3 flex justify-center">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-1 text-[#1890FF] text-sm hover:text-blue-700 transition-colors"
          >
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};

export default JobFilters;
