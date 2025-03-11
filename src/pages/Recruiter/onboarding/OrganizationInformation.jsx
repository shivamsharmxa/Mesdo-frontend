import { ArrowLeft } from "lucide-react";

const OrganizationInformation = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 p-12">
        <button className="mb-6">
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">
          Organization Information
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Name*
            </label>
            <input
              type="text"
              placeholder="Enter name of your organization"
              className="mt-1 block w-full h-11 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Website
            </label>
            <input
              type="text"
              placeholder="link to your website"
              className="mt-1 block w-full h-11 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm  font-small text-gray-900">
              Industry
            </label>
            <input
              type="text"
              placeholder="Industry"
              className="mt-1 block w-full h-11 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-small text-gray-900">
              Organization Size
            </label>
            <input
              type="text"
              placeholder="Organization Size"
              className="mt-1 block w-full h-11 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-small text-gray-900">
              Organization Type
            </label>
            <input
              type="text"
              placeholder="Organization Type"
              className="mt-1 block w-full h-11 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-14 flex justify-between">
          <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-200 transition">
            Skip
          </button>
          <button
            onClick={""}
            className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-gray-100"></div>
    </div>
  );
};

export default OrganizationInformation;
