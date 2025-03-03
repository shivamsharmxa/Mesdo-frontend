import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfessionalSummary = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 p-12">
        <button
          className="mb-6"
          onClick={() => navigate("/personalInformation")}
        >
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">
          Professional Summary
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* Designation */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Designation
            </label>
            <input
              type="text"
              placeholder="Enter designation"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Tagline
            </label>
            <input
              type="text"
              placeholder="Enter tagline"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* About You */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              About You
            </label>
            <textarea
              placeholder="About you.."
              className="mt-1 block w-full h-50 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 text-sm focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-400 transition">
            Skip
          </button>
          <button className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition">
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-gray-100"></div>
    </div>
  );
};

export default ProfessionalSummary;
