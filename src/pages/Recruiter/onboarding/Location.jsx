import { ArrowLeft } from "lucide-react";

const Location = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 p-12">
        <button className="mb-6">
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">Location</h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Location Name
            </label>
            <input
              type="text"
              placeholder="Enter location"
              className="mt-1 block w-full h-12 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              className="mt-1 block w-full h-12 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-75 flex justify-between">
          <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-medium rounded-md hover:bg-gray-200 transition">
            Skip
          </button>
          <button className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition">
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-gray-100"></div>
    </div>
  );
};

export default Location;
