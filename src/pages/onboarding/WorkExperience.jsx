import { useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";

const WorkExperience = ({ updateFormData, onNext, onPrevious }) => {
  const [formValues, setFormValues] = useState({
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

  const employmentTypeOptions = [
    { value: "", label: "Select" },
    { value: "fullTime", label: "Full-Time" },
    { value: "partTime", label: "Part-Time" },
    { value: "contract", label: "Contract" },
  ];

  const locationOptions = [
    { value: "", label: "Select" },
    { value: "gwalior", label: "Gwalior" },
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "pune", label: "Pune" },
    { value: "agra", label: "Agra" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValues = {
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    };

    // Reset end date if currently working
    if (name === "currentlyWorking" && checked) {
      newValues.endDate = "";
    }

    setFormValues(newValues);
    updateFormData(newValues);
  };

  const handleSelectChange = (selectedOption, fieldName) => {
    const newValues = {
      ...formValues,
      [fieldName]: selectedOption.value,
    };
    setFormValues(newValues);
    updateFormData(newValues);
  };

  const handleQuillChange = (value) => {
    const newValues = {
      ...formValues,
      description: value,
    };
    setFormValues(newValues);
    updateFormData(newValues);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div
        className="w-1/2 flex flex-col justify-center px-[100px]"
        style={{ minWidth: 560 }}
      >
        <button className="mb-8 mt-2 text-left" onClick={onPrevious}>
          <ArrowLeft size={28} className="text-black" />
        </button>

        <h1 className="font-inter font-semibold text-[32px] leading-[130%] tracking-[0px] mb-1">
          Work Experience
        </h1>
        <p className="text-[13px] font-sm text-[#8C8C8C] mb-8">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Job Title & Hospital/Clinic */}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Job Title*
              </label>
              <input
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={handleChange}
                type="text"
                className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter job title"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Hospital/Clinic*
              </label>
              <input
                name="hospital"
                value={formValues.hospital}
                onChange={handleChange}
                type="text"
                className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter hospital/clinic"
              />
            </div>
          </div>

          {/* Employment Type & Location */}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Employment Type
              </label>
              <Select
                name="employmentType"
                options={employmentTypeOptions}
                value={employmentTypeOptions.find(
                  (option) => option.value === formValues.employmentType
                )}
                onChange={(option) =>
                  handleSelectChange(option, "employmentType")
                }
                placeholder="Select"
                className="text-[13px]"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "48px",
                    height: "48px",
                    borderColor: "#e5e7eb",
                    borderRadius: "0.5rem",
                    "&:hover": {
                      borderColor: "#e5e7eb",
                    },
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: "0 16px",
                  }),
                  input: (base) => ({
                    ...base,
                    margin: 0,
                    padding: 0,
                  }),
                }}
              />
            </div>

            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Location
              </label>
              <Select
                name="location"
                options={locationOptions}
                value={locationOptions.find(
                  (option) => option.value === formValues.location
                )}
                onChange={(option) => handleSelectChange(option, "location")}
                placeholder="Select"
                className="text-[13px]"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "48px",
                    height: "48px",
                    borderColor: "#e5e7eb",
                    borderRadius: "0.5rem",
                    "&:hover": {
                      borderColor: "#e5e7eb",
                    },
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: "0 16px",
                  }),
                  input: (base) => ({
                    ...base,
                    margin: 0,
                    padding: 0,
                  }),
                }}
              />
            </div>
          </div>

          {/* Time Period */}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Time Period*
              </label>
              <input
                name="startDate"
                type="date"
                value={formValues.startDate}
                onChange={handleChange}
                className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {!formValues.currentlyWorking && (
              <div className="w-1/2">
                <label className="block text-[15px] text-gray-900 mb-1">
                  End Date
                </label>
                <input
                  name="endDate"
                  type="date"
                  value={formValues.endDate}
                  onChange={handleChange}
                  className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          {/* Currently Working Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="currentlyWorking"
              checked={formValues.currentlyWorking}
              onChange={handleChange}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <label className="text-[15px] text-gray-900">Present</label>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-[15px] text-gray-900 mb-1">
              Skills*
            </label>
            <input
              name="skills"
              value={formValues.skills}
              onChange={handleChange}
              type="text"
              className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your skills"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[15px] text-gray-900 mb-1">
              Description
            </label>
            <ReactQuill
              theme="snow"
              value={formValues.description}
              onChange={handleQuillChange}
              modules={modules}
              className="[&_.ql-container]:rounded-b-lg [&_.ql-toolbar]:rounded-t-lg [&_.ql-container]:h-[180px] [&_.ql-editor]:text-[14px] [&_.ql-editor]:text-gray-700"
              placeholder="Describe your work experience..."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4 mt-[-28px]">
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
        </form>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-[#f8f8f8]" />
    </div>
  );
};

WorkExperience.propTypes = {
  updateFormData: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default WorkExperience;
