import { useState, useEffect } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Qualification = () => {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // Fetch university data from an API (Replace with actual API URL)
    axios.get("https://example.com/api/universities").then((response) => {
      setUniversities(response.data);
    });
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 p-12">
        <button onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">Qualifications</h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-6">
          {/* Qualification & University */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Qualification*
              </label>
              <div className="relative mt-1">
                <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none">
                  <option>Select</option>
                  <option>Bachelors</option>
                  <option>Masters</option>
                  <option>High School</option>
                  <option>Other</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                University*
              </label>
              <div className="relative mt-1">
                <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none">
                  <option>Select</option>
                  <option>Amity University</option>
                  <option>IIT Mumbai</option>
                  <option>VIT</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Course & Passing Year */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Course*
              </label>
              <div className="relative mt-1">
                <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none">
                  <option>Select</option>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>BCA</option>
                  <option>MCA</option>
                  <option>Other</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Passing Year*
              </label>
              <div className="relative mt-1">
                <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none">
                  <option>Select</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i}>{2025 - i}</option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Specialization & Course Type */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Specialization*
              </label>
              <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none">
                <option>Select</option>
                <option>Computer Science</option>
                <option>Mechanical Engineering</option>
                <option>Electrical Engineering</option>
                <option>Biotechnology</option>
                <option>Other</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Course Type*
              </label>
              <div className="relative mt-1">
                <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none">
                  <option>Select</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Online</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Skills Input */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Skills*
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
              placeholder="Enter your skills"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Description*
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
              rows="3"
              placeholder="Enter a brief description"
            ></textarea>
          </div>

          {/* Continue Button */}
          <div className="mt-6 flex justify-between">
            <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-400 transition">
              Skip
            </button>
            <button className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition">
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-gray-100"></div>
    </div>
  );
};

export default Qualification;
