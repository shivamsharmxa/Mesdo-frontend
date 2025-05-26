import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";

const Qualification = ({ updateFormData, onNext, onPrevious }) => {
  const [universities, setUniversities] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [customUniversity, setCustomUniversity] = useState("");
  const [formValues, setFormValues] = useState({
    qualification: "",
    university: "",
    course: "",
    passingYear: "",
    specialization: "",
    courseType: "",
    skills: "",
    description: "",
  });

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulated data - replace with your actual API calls
        setUniversities([
          { value: "university1", label: "University 1" },
          { value: "university2", label: "University 2" },
        ]);
        setQualifications([
          { value: "qualification1", label: "Qualification 1" },
          { value: "qualification2", label: "Qualification 2" },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    updateFormData({ [name]: value });
  };

  const handleUniversityChange = (selectedOption) => {
    if (selectedOption.value === "other") {
      setIsOtherSelected(true);
      setFormValues((prev) => ({ ...prev, university: "" }));
    } else {
      setIsOtherSelected(false);
      setFormValues((prev) => ({ ...prev, university: selectedOption.value }));
      updateFormData({ university: selectedOption.value });
    }
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
          Qualifications
        </h1>
        <p className="text-[13px] font-sm text-[#8C8C8C] mb-8">
          Include all of your qualification in this section.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Qualification & University */}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Qualification*
              </label>
              <Select
                name="qualification"
                value={qualifications.find(
                  (q) => q.value === formValues.qualification
                )}
                onChange={(option) => {
                  setFormValues((prev) => ({
                    ...prev,
                    qualification: option.value,
                  }));
                  updateFormData({ qualification: option.value });
                }}
                options={qualifications}
                placeholder="Select"
                className="text-[13px]"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "48px",
                    height: "48px",
                    borderColor: "#e5e7eb",
                    borderRadius: "0.5rem",
                    backgroundColor: "",
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
                University*
              </label>
              <Select
                options={[...universities, { value: "other", label: "Other" }]}
                value={universities.find(
                  (uni) => uni.value === formValues.university
                )}
                onChange={handleUniversityChange}
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
              {isOtherSelected && (
                <input
                  type="text"
                  placeholder="Enter university name"
                  value={customUniversity}
                  onChange={(e) => setCustomUniversity(e.target.value)}
                  className="mt-2 block w-full h-[48px] rounded-lg border border-gray-200 bg-gray-50 px-4 text-[#8C8C8C] text-[13px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            </div>
          </div>

          {/* Course & Passing Year */}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Course*
              </label>
              <div className="relative">
                <select
                  name="course"
                  value={formValues.course}
                  onChange={handleChange}
                  className="appearance-none block w-full h-[48px] rounded-lg border border-gray-200 bg-white px-4 text-[#8C8C8C] text-[13px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="btech">B.Tech</option>
                  <option value="mtech">M.Tech</option>
                  <option value="bca">BCA</option>
                  <option value="mca">MCA</option>
                </select>
                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Passing Year*
              </label>
              <div className="relative">
                <select
                  name="passingYear"
                  value={formValues.passingYear}
                  onChange={handleChange}
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

          {/* Specialization & Course Type */}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Specialization*
              </label>
              <div className="relative">
                <select
                  name="specialization"
                  value={formValues.specialization}
                  onChange={handleChange}
                  className="appearance-none block w-full h-[48px] rounded-lg border border-gray-200 bg-white px-4 text-[#8C8C8C] text-[13px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="cs">Computer Science</option>
                  <option value="me">Mechanical Engineering</option>
                  <option value="ee">Electrical Engineering</option>
                </select>
                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-[15px] text-gray-900 mb-1">
                Course Type*
              </label>
              <div className="relative">
                <select
                  name="courseType"
                  value={formValues.courseType}
                  onChange={handleChange}
                  className="appearance-none block w-full h-[48px] rounded-lg border border-gray-200 bg-white px-4 text-[#8C8C8C] text-[13px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                </select>
                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-[15px] text-gray-900 mb-1">
              Skills*
            </label>
            <input
              type="text"
              name="skills"
              value={formValues.skills}
              onChange={handleChange}
              placeholder="Add skills"
              className="block w-full h-[48px] rounded-lg border border-gray-200  px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
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
              onChange={(value) => {
                setFormValues((prev) => ({ ...prev, description: value }));
                updateFormData({ description: value });
              }}
              modules={modules}
              className="[&_.ql-container]:rounded-b-lg [&_.ql-toolbar]:rounded-t-lg [&_.ql-container]:h-[180px] [&_.ql-editor]:text-[14px] [&_.ql-editor]:text-gray-700"
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

Qualification.propTypes = {
  updateFormData: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default Qualification;
