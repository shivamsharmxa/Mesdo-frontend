import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { User } from "lucide-react";

const ProfessionalSummary = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [completedSteps, setCompletedSteps] = useState(1); // Start with 1 step completed

  // ReactQuill Modules
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  // Handle Continue button click
  const handleContinue = () => {
    if (completedSteps < 5) {
      setCompletedSteps(completedSteps + 1); // Increment steps
    }
    navigate("/Qualification"); // Navigate to the next page
  };
  const handleSkip = () => {
    navigate("/Interest"); // Navigate to the next page
  };

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

        {/* Title with Progress Circle */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Professional Summary
          </h1>

          {/* Progress Indicator */}
          <div className="relative w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              {/* Background Circle (Dashed) */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
                strokeDasharray="28,4" // Smaller gaps (28px stroke, 4px gap)
                strokeLinecap="round"
              />

              {/* Progress Circle - Filling Step-by-Step */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray="28,4" // Same as background
                strokeDashoffset={100 - completedSteps * 20} // 5 steps (100 / 5 = 20 per step)
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.5s ease" }}
              />
            </svg>

            {/* Profile Icon in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <User size={18} className="text-gray-700" />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* Tagline */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Tagline
            </label>
            <input
              type="text"
              placeholder="Enter tagline"
              className="mt-1 block w-full rounded-md border h-12 border-gray-300 bg-white px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* About You */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              About You
            </label>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              placeholder="Write about yourself..."
              className="mt-2 bg-white border border-gray-300 rounded-md h-60 text-gray-700"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-40 flex justify-between">
          <button
            onClick={handleSkip}
            className="w-[120px] h-[40px] bg-gray-200 text-blue-500 text-sm font-medium rounded-md hover:bg-gray-300 transition"
          >
            Skip All
          </button>
          <button
            onClick={handleContinue}
            className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
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

export default ProfessionalSummary;
