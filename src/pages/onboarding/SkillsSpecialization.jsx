import { useState } from "react";
import { ArrowLeft } from "lucide-react"; // Using Lucide for a clean back arrow icon

const SkillsSpecialization = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side */}
      <div className="w-2/3 flex flex-col justify-start pt-20 pr-120 px-20 relative">
        {/* Back Button */}
        <button className="absolute top-6 left-20 text-gray-600 hover:text-black">
          <ArrowLeft size={24} />
        </button>

        {/* Content */}
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold">Skills & Specialization</h1>
          <p className="text-gray-500 mb-6 text-sm">
            Include all of your relevant experience and dates in this section.
          </p>

          {/* Skills Input */}
          <label className="block text-gray-700 font-small mb-2">Skills</label>
          <input
            type="text"
            placeholder="Select"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={addSkill}
            className="w-150 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mb-3"
          />

          {/* Skills List */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full flex items-center text-sm"
              >
                {skill}
                <button
                  onClick={() => removeSkill(index)}
                  className="ml-2 text-gray-600 hover:text-gray-900"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Specialization Input */}
          <label className="block text-gray-700 font-small mt-6 mb-2">
            Specialization
          </label>
          <input
            type="text"
            placeholder="Select"
            className="w-150 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Buttons */}
          <div className="mt-60 flex w-full">
            <div className="flex-1">
              <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-400 transition">
                Skip
              </button>
            </div>
            <div className="flex-1 flex justify-end ml-120">
              <button className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Empty) */}
      <div className="w-1/2 h-screen bg-gray-100"></div>
    </div>
  );
};

export default SkillsSpecialization;
