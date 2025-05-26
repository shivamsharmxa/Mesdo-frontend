import { useState } from "react";
import { ArrowLeft, PlusCircle, ChevronDown } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";

const Achievement = ({ updateFormData, onNext, onPrevious }) => {
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      award: "",
      issuer: "",
      year: "",
      description: "",
    },
  ]);

  // ReactQuill Modules & Formats
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

  const handleChange = (id, field, value) => {
    const updatedAchievements = achievements.map((achievement) =>
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    );

    setAchievements(updatedAchievements);
    updateFormData({ achievements: updatedAchievements });
  };

  const addAchievement = () => {
    const newAchievement = {
      id: achievements.length + 1,
      award: "",
      issuer: "",
      year: "",
      description: "",
    };

    setAchievements([...achievements, newAchievement]);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div
        className="w-1/2 flex flex-col px-[100px] py-[60px]"
        style={{ minWidth: 560 }}
      >
        <button className="mb-8" onClick={onPrevious}>
          <ArrowLeft size={28} className="text-black" />
        </button>

        <h1 className="font-inter font-semibold text-[32px] leading-[130%] tracking-[0px] mb-1">
          Achievement
        </h1>
        <p className="text-[13px] font-sm text-[#8C8C8C] mb-8">
          Include all of your relevant achievements in this section.
        </p>

        {/* Form Container */}
        <div className="flex-1 space-y-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="mb-8">
              {achievement.id > 1 && (
                <div className="h-px bg-gray-200 my-6"></div>
              )}

              <div className="space-y-6">
                {/* Award */}
                <div>
                  <label className="block text-[15px] text-gray-900 mb-1">
                    Award*
                  </label>
                  <input
                    type="text"
                    value={achievement.award}
                    onChange={(e) =>
                      handleChange(achievement.id, "award", e.target.value)
                    }
                    placeholder="Award Name"
                    className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  />
                </div>

                {/* Issuer & Year */}
                <div className="flex gap-6">
                  <div className="w-1/2">
                    <label className="block text-[15px] text-gray-900 mb-1">
                      Issuer*
                    </label>
                    <input
                      type="text"
                      value={achievement.issuer}
                      onChange={(e) =>
                        handleChange(achievement.id, "issuer", e.target.value)
                      }
                      placeholder="Issuer Name"
                      className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-[15px] text-gray-900 mb-1">
                      Year*
                    </label>
                    <div className="relative">
                      <select
                        value={achievement.year}
                        onChange={(e) =>
                          handleChange(achievement.id, "year", e.target.value)
                        }
                        className="appearance-none block w-full h-[48px] rounded-lg border border-gray-200 bg-white px-4 text-[#8C8C8C] text-[13px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select</option>
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i} value={2025 - i}>
                            {2025 - i}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={20}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[15px] text-gray-900 mb-1">
                    Description
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={achievement.description}
                    onChange={(content) =>
                      handleChange(achievement.id, "description", content)
                    }
                    modules={modules}
                    placeholder="Write about your achievement..."
                    className="[&_.ql-container]:rounded-b-lg [&_.ql-toolbar]:rounded-t-lg [&_.ql-container]:h-[120px] [&_.ql-editor]:text-[14px] [&_.ql-editor]:text-gray-700"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* + Add Achievement Button */}
          <button
            onClick={addAchievement}
            className="flex items-center text-[#262626] hover:bg-amber-50 font-medium py-2 px-3 rounded-md transition-colors"
          >
            <PlusCircle size={20} className="mr-2" />
            Add Achievement
          </button>
        </div>

        {/* Skip & Continue Buttons */}
        <div className="flex justify-between mt-20 pt-6">
          <button
            onClick={onPrevious}
            className="w-[120px] h-[48px] bg-gray-100 text-[#1890FF] text-[15px] font-medium rounded-lg hover:bg-gray-200 transition-all"
          >
            Skip
          </button>
          <button
            onClick={onNext}
            className="w-[180px] h-[48px] bg-[#1890FF] text-white text-[17px] font-medium rounded-lg hover:bg-blue-600 transition-all shadow-none"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-[#f8f8f8]" />
    </div>
  );
};

Achievement.propTypes = {
  updateFormData: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default Achievement;
