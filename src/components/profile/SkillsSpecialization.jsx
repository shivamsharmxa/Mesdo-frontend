import { useState } from "react";

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
    <div className="h-screen overflow-hidden">
      <div className=" py-6 px-6">
        {/* Content */}
        <div className="w-full">
          <div className=" flex flex-col w-full">
            {/* <label className="block text-gray-700 font-small mb-2">Skills</label> */}
            <input
              type="text"
              placeholder="Add a skill and press Enter"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={addSkill}
              className="w-[600px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none mb-3"
            />

            {/* Skills List */}
            <div className="flex flex-wrap gap-2 mb-3">
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

            {/* Buttons */}
            <div className="mt-12 flex justify-between w-full">
              <button className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSpecialization;
