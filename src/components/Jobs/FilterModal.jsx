// FULL updated code: all blue variants replaced with #1890FF
import React, { useState } from "react";
import { Search, X } from "lucide-react";

const FilterModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    jobTitle: "",
    location: "",
    skills: ["Communication"],
    specializations: ["Dermatologist"],
    experience: 5,
    jobTypes: ["Internship", "Full-Time", "Contract"],
    languages: ["Hindi", "English"],
    salaryRange: 50000,
  });

  const [newSkill, setNewSkill] = useState("");
  const [newSpec, setNewSpec] = useState("");
  const [newJobType, setNewJobType] = useState("");
  const [newLanguage, setNewLanguage] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleSelection = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleAddTag = (field, valueSetter, value) => {
    if (!value.trim()) return;
    setFilters((prev) => ({
      ...prev,
      [field]: [...new Set([...prev[field], value.trim()])],
    }));
    valueSetter("");
  };

  const handleReset = () => {
    setFilters({
      jobTitle: "",
      location: "",
      skills: [],
      specializations: [],
      experience: 0,
      jobTypes: [],
      languages: [],
      salaryRange: 0,
    });
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Filter Jobs</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {/* Search Bars */}
          <div className="bg-white rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Dental Surgeon"
                  value={filters.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1890FF] focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 text-[#1890FF] w-5 h-5" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location"
                  value={filters.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1890FF] focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 text-[#1890FF] w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Areas of Interest */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Areas of Interest</h2>
              <div className="grid grid-cols-2 gap-8">
                {/* Skills */}
                <div>
                  <h3 className="text-sm font-medium mb-2 ">Skills</h3>
                  <div className="relative mb-3">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag("skills", setNewSkill, newSkill);
                        }
                      }}
                      placeholder="Add skill"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <Search className="absolute right-3 top-2.5 text-[#1890FF] w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {filters.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleToggleSelection("skills", skill)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          filters.skills.includes(skill)
                            ? "bg-[#1890FF] text-white"
                            : "bg-[#E6F4FF] text-[#1890FF]"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      onApplyFilters(filters);
                      onClose();
                    }}
                    className="text-[#1890FF] text-sm font-medium ml-80"
                  >
                    APPLY
                  </button>
                </div>

                {/* Specialisation */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Specialisation</h3>
                  <div className="relative mb-3">
                    <input
                      type="text"
                      value={newSpec}
                      onChange={(e) => setNewSpec(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag("specializations", setNewSpec, newSpec);
                        }
                      }}
                      placeholder="Add specialisation"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <Search className="absolute right-3 top-2.5 text-[#1890FF] w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {filters.specializations.map((spec) => (
                      <button
                        key={spec}
                        onClick={() =>
                          handleToggleSelection("specializations", spec)
                        }
                        className={`px-3 py-1 rounded-full text-sm ${
                          filters.specializations.includes(spec)
                            ? "bg-[#1890FF] text-white"
                            : "bg-[#E6F4FF] text-[#1890FF]"
                        }`}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      onApplyFilters(filters);
                      onClose();
                    }}
                    className="text-[#1890FF] text-sm font-medium ml-80"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            </div>

            {/* Experience & Job Type */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Job Details</h2>
              <div className="grid grid-cols-2 gap-8">
                {/* Experience */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Experience</h3>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={filters.experience}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        experience: parseInt(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-[#E6F4FF] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>0 year</span>
                    <span>10 years</span>
                  </div>
                  <div className="mt-2 text-sm text-[#1890FF]">
                    Selected: {filters.experience}{" "}
                    {filters.experience === 1 ? "year" : "years"}
                  </div>
                  <button
                    onClick={() => {
                      onApplyFilters(filters);
                      onClose();
                    }}
                    className="mt-2 text-[#1890FF] text-sm font-medium ml-80"
                  >
                    APPLY
                  </button>
                </div>

                {/* Job Type */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Job Type</h3>
                  <div className="relative mb-3">
                    <input
                      type="text"
                      value={newJobType}
                      onChange={(e) => setNewJobType(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag("jobTypes", setNewJobType, newJobType);
                        }
                      }}
                      placeholder="Add job type"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <Search className="absolute right-3 top-2.5 text-[#1890FF] w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {filters.jobTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => handleToggleSelection("jobTypes", type)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          filters.jobTypes.includes(type)
                            ? "bg-[#1890FF] text-white"
                            : "bg-[#E6F4FF] text-[#1890FF]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      onApplyFilters(filters);
                      onClose();
                    }}
                    className="text-[#1890FF] text-sm font-medium ml-80"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl shadow-sm p-6 w-100">
              <h2 className="text-lg font-medium mb-4">Languages</h2>
              <div className="relative mb-3">
                <input
                  type="text"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag("languages", setNewLanguage, newLanguage);
                    }
                  }}
                  placeholder="Add language"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <Search className="absolute right-3 top-2.5 text-[#1890FF] w-5 h-5" />
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {filters.languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleToggleSelection("languages", lang)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.languages.includes(lang)
                        ? "bg-[#1890FF] text-white"
                        : "bg-[#E6F4FF] text-[#1890FF]"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  onApplyFilters(filters);
                  onClose();
                }}
                className="text-[#1890FF] text-sm font-medium ml-80"
              >
                APPLY
              </button>
            </div>

            {/* Compensation */}
            <div className="bg-white rounded-2xl shadow-sm p-6 w-100">
              <h2 className="text-lg font-medium mb-4">Compensation</h2>
              <h3 className="text-sm font-medium mb-2">Salary Range</h3>
              <input
                type="range"
                min="0"
                max="100000"
                value={filters.salaryRange}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    salaryRange: parseInt(e.target.value),
                  }))
                }
                className="w-full h-2 bg-[#E6F4FF] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>Rs 0</span>
                <span>Rs 100,000</span>
              </div>
              <div className="mt-2 text-sm text-[#1890FF]">
                Selected: Rs {filters.salaryRange.toLocaleString()}
              </div>
              <button
                onClick={() => {
                  onApplyFilters(filters);
                  onClose();
                }}
                className="mt-2 text-[#1890FF] text-sm font-medium ml-80"
              >
                APPLY
              </button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleReset}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Reset All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
