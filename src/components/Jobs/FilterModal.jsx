import React, { useState } from "react";
import { Search, X } from "lucide-react";
import axios from "axios";

const FilterModal = ({ isOpen, onClose, onJobsFiltered }) => {
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

  const handleApply = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/jobs/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
      });

      const data = await response.json();
      console.log("Filtered Jobs: ", data.jobs);

      // Update state to show filtered jobs
      setJobs(data.jobs);
    } catch (err) {
      console.error("Error fetching filtered jobs:", err);
    }
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

          {/* Search Inputs */}
          <div className="bg-white rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              {["jobTitle", "location"].map((field) => (
                <div key={field} className="relative">
                  <input
                    type="text"
                    name={field}
                    placeholder={
                      field === "jobTitle" ? "Dental Surgeon" : "Enter Location"
                    }
                    value={filters[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1890FF] focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-2.5 text-[#1890FF] w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Areas of Interest */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-lg font-medium mb-4">Areas of Interest</h2>
              <div className="grid grid-cols-2 gap-8">
                {/* Skills */}
                <TagInput
                  title="Skills"
                  field="skills"
                  tags={filters.skills}
                  newTag={newSkill}
                  setNewTag={setNewSkill}
                  toggle={handleToggleSelection}
                  addTag={handleAddTag}
                />

                {/* Specializations */}
                <TagInput
                  title="Specialisation"
                  field="specializations"
                  tags={filters.specializations}
                  newTag={newSpec}
                  setNewTag={setNewSpec}
                  toggle={handleToggleSelection}
                  addTag={handleAddTag}
                />
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
                </div>

                {/* Job Types */}
                <TagInput
                  title="Job Type"
                  field="jobTypes"
                  tags={filters.jobTypes}
                  newTag={newJobType}
                  setNewTag={setNewJobType}
                  toggle={handleToggleSelection}
                  addTag={handleAddTag}
                />
              </div>
            </div>

            {/* Languages */}
            <TagInput
              title="Languages"
              field="languages"
              tags={filters.languages}
              newTag={newLanguage}
              setNewTag={setNewLanguage}
              toggle={handleToggleSelection}
              addTag={handleAddTag}
            />

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
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handleReset}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Reset All
            </button>
            <button
              onClick={handleApply}
              className="px-6 py-2 bg-[#1890FF] text-white rounded-lg hover:bg-[#1478d4]"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TagInput = ({
  title,
  field,
  tags,
  newTag,
  setNewTag,
  toggle,
  addTag,
}) => (
  <div>
    <h3 className="text-sm font-medium mb-2">{title}</h3>
    <div className="relative mb-3">
      <input
        type="text"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addTag(field, setNewTag, newTag);
          }
        }}
        placeholder={`Add ${title.toLowerCase()}`}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <Search className="absolute right-3 top-2.5 text-[#1890FF] w-5 h-5" />
    </div>
    <div className="flex flex-wrap gap-2 mb-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggle(field, tag)}
          className={`px-3 py-1 rounded-full text-sm ${
            tags.includes(tag)
              ? "bg-[#1890FF] text-white"
              : "bg-[#E6F4FF] text-[#1890FF]"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  </div>
);

export default FilterModal;
