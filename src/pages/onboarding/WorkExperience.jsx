import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ReactQuill from "react-quill";

const WorkExperience = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    jobTitle: "",
    hospital: "",
    employmentType: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    skills: "",
    description: "",
  });

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "currentlyWorking" && checked ? { endDate: "" } : {}), // Reset end date if currently working
    });
  };

  const handleContinue = () => {
    navigate("/WorkExperience-preview", { state: { formData } });
  };
  const handleSkip = () => {
    navigate("/Interest"); // Navigate to the next page
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-1/2 h-full flex flex-col p-8">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">
          Work Experience
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form Container with Scroll */}
        <div className="mt-4 flex-1 overflow-auto pr-4">
          <div className="space-y-4">
            {/* Job Title & Hospital */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Job Title*
                </label>
                <input
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  type="text"
                  className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                  placeholder="Enter job title"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Hospital/Clinic*
                </label>
                <input
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  type="text"
                  className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                  placeholder="Enter hospital/clinic"
                />
              </div>
            </div>

            {/* Employment & Job Type */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Employment Type
                </label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>Gwalior</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                  <option>Agra</option>
                </select>
              </div>
            </div>

            {/* Start Date & End Date */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Time Period*
                </label>
                <input
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  placeholder="Start Date"
                  className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                />
              </div>

              {!formData.currentlyWorking && (
                <div className="w-1/2">
                  <label className="block text-sm font-small text-white">
                    End Date
                  </label>
                  <input
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    placeholder="End Date"
                    className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* Currently Working Checkbox */}
            <div className="flex items-center gap-2 ml-145">
              <input
                type="checkbox"
                name="currentlyWorking"
                checked={formData.currentlyWorking}
                onChange={handleChange}
                className="w-4 h-5"
              />
              <label className="text-sm text-gray-900">Present</label>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-small text-gray-900">
                Skills*
              </label>
              <input
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                type="text"
                className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                placeholder="Enter your skills"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Description
              </label>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                placeholder="Describe your work experience..."
                className="mt-2 bg-white border border-gray-300 rounded-md text-gray-700 h-12"
              />
            </div>

            {/* Continue Button */}
            <div className="mt-15 flex justify-between">
              <button
                onClick={handleSkip}
                className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-400 transition"
              >
                Skip All
              </button>
              <button
                onClick={handleContinue}
                className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 h-screen bg-gray-100"></div>
    </div>
  );
};

export default WorkExperience;
