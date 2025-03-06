import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WorkExperience = () => {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [formData, setFormData] = useState({
    jobTitle: "",
    hospital: "",
    industry: "",
    department: "",
    employmentType: "",
    jobType: "",
    timePeriod: "",
    location: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    navigate("/WorkExperience-preview", { state: { formData } });
  };

  useEffect(() => {
    axios.get("https://example.com/api/universities").then((response) => {
      setUniversities(response.data);
    });
  }, []);

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
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
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
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                  placeholder="Enter hospital/clinic"
                />
              </div>
            </div>

            {/* Industry & Department */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>Medical</option>
                  <option>IT</option>
                  <option>Accounting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>HR</option>
                  <option>Finance</option>
                  <option>Administration</option>
                  <option>Other</option>
                </select>
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
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Job Type
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>Permanent</option>
                  <option>Temporary</option>
                </select>
              </div>
            </div>

            {/* Time Period & Location */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-small text-gray-900">
                  Time Period
                </label>
                <select
                  name="timePeriod"
                  value={formData.timePeriod}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>Less than 6 months</option>
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>More than 3 Years</option>
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
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                </select>
              </div>
            </div>

            {/* Skills & Description */}
            <div>
              <label className="block text-sm font-small text-gray-900">
                Skills*
              </label>
              <input
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                type="text"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                placeholder="Enter your skills"
              />
            </div>

            <div>
              <label className="block text-sm font-small text-gray-900">
                Description*
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                rows="2"
                placeholder="Enter a brief description"
              ></textarea>
            </div>

            {/* Continue Button */}
            <div className="mt-4 flex justify-between">
              <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-400 transition">
                Skip
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
