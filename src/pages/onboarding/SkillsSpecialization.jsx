import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import PropTypes from "prop-types";

const defaultSkillOptions = ["Communication", "Teamwork", "Critical Thinking"];

const SkillsSpecialization = ({ updateFormData, onNext, onPrevious }) => {
  const [formValues, setFormValues] = useState({
    skills: [],
  });
  const [skillInput, setSkillInput] = useState("");

  // Optional: preload default skills on mount
  useEffect(() => {
    setFormValues({ skills: defaultSkillOptions });
    updateFormData({ skills: defaultSkillOptions });
  }, [updateFormData]);

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      e.preventDefault();
      const skill = skillInput.trim();
      if (!formValues.skills.includes(skill)) {
        const newSkills = [...formValues.skills, skill];
        setFormValues({ ...formValues, skills: newSkills });
        updateFormData({ skills: newSkills });
      }
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const newSkills = formValues.skills.filter(
      (skill) => skill !== skillToRemove
    );
    setFormValues({ ...formValues, skills: newSkills });
    updateFormData({ skills: newSkills });
  };

  return (
    <div className="flex h-screen">
      {/* Left Form */}
      <div
        className="w-1/2 flex flex-col justify-between px-[100px] bg-white"
        style={{ minWidth: 560 }}
      >
        <div className="pt-10">
          <button className="mb-6" onClick={onPrevious}>
            <ArrowLeft size={28} className="text-black" />
          </button>

          <h1 className="text-[32px] font-semibold leading-[130%] mb-1">
            Skills or Specialization
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Include all of your relevant experience and dates in this section.
          </p>

          {/* Input Field */}
          <div>
            <label
              className="block font-sm mb-1"
              style={{ fontSize: "1.1rem" }}
            >
              Skills
            </label>

            <input
              type="text"
              placeholder="Select"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
              className="w-full h-[50px] border border-gray-200 rounded-lg px-4 text-sm placeholder-gray-400 focus:outline-none"
            />

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {formValues.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-3 h-[44px] py-1.5 rounded-md border border-[#DCDCDC] flex items-center text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-between pt-4 mb-10">
          <button
            type="button"
            onClick={onPrevious}
            className="w-[120px] h-[48px] bg-gray-100 text-[#1890FF] text-[15px] font-medium rounded-lg hover:bg-gray-200 transition-all"
          >
            Skip All
          </button>
          <button
            type="button"
            onClick={onNext}
            className="w-[180px] h-[48px] bg-[#1890FF] text-white text-[17px] font-medium rounded-lg hover:bg-blue-600 transition-all shadow-none"
          >
            Next
          </button>
        </div>
      </div>

      {/* Right - Empty Side */}
      <div className="w-1/2 bg-[#f8f8f8]" />
    </div>
  );
};

SkillsSpecialization.defaultProps = {
  updateFormData: () => {},
  onNext: () => {},
  onPrevious: () => {},
};

export default SkillsSpecialization;
