import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Sidebar from "../../components/Sidebar/Sidebar";

// A small helper component for label-value rows in the review step
function ReviewRow({ label, value, children }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="text-gray-600 text-sm font-medium">{label}</div>
      <div className="col-span-2 text-gray-800">
        {children || value || "N/A"}
      </div>
    </div>
  );
}

export default function CreateJob() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Step state: 1 = Job Info, 2 = Additional Info, 3 = Review
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobCategory: "",
    location: "",
    endDate: "",
    openings: "",
    salaryRangeFrom: "",
    salaryRangeTo: "",
    employmentType: "",
    primaryUser: "",
    email: "",
    phone: "",
    coworker: "",
    branch: "",
    experience: "",
    skills: "",
    qualification: "",
    department: "",
    Shift: "",
    language: "",
    specialization: "",
  });

  const handleBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    console.log("FormData:", formData);
    console.log("Description:", description);

    if (step === 1) {
      // Basic validations
      if (
        !formData.jobTitle?.trim() ||
        !description?.trim() ||
        !formData.jobCategory?.trim() ||
        !formData.location?.trim() ||
        !formData.endDate?.trim() ||
        !formData.openings?.trim() ||
        !formData.salaryRangeFrom?.trim() ||
        !formData.salaryRangeTo?.trim()
      ) {
        alert("Please fill out all required fields.");
        return;
      }
      if (!Number(formData.openings) || Number(formData.openings) <= 0) {
        alert("Openings must be a positive number.");
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Sidebar />
      <div className="p-6 bg-gray-50 min-h-screen font-sans overflow-hidden">
        <div
          className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 border border-[#DDE4EE] overflow-hidden"
          style={{ marginLeft: "260px" }}
        >
          {/* Header */}
          <div className="mb-6 flex items-center gap-2">
            <button
              onClick={handleBack}
              className="flex items-center text-black font-medium cursor-pointer"
            >
              <ChevronLeftIcon className="w-6 h-6 text-[#1A2248] mr-2" />
              Back
            </button>
            <span className="text-gray-500">/</span>
            <h2 className="text-lg font-semibold text-gray-800">Create Job</h2>
          </div>

          {/* Step Markers */}
          <div className="relative flex items-center mb-8">
            {["Job Information", "Additional Information", "Review"].map(
              (label, index) => (
                <div key={index} className="relative flex-1">
                  {/* Step Line */}
                  <div
                    className={`h-[1px] w-full ${
                      step > index + 1
                        ? "bg-green-500" // Completed step
                        : step === index + 1
                        ? "bg-blue-500" // In-progress step
                        : "bg-[#E6E6E6]" // Incomplete step
                    }`}
                  ></div>

                  {/* Step Indicator */}
                  <div
                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full border 
            ${
              step > index + 1
                ? "bg-green-500 text-white border-green-500" // Completed step
                : step === index + 1
                ? "bg-white text-blue-500 border-blue-500" // In-progress step
                : "bg-white text-[#E6E6E6] border-[#E6E6E6]" // Incomplete step
            }`}
                  >
                    {index + 1}
                  </div>

                  {/* Step Label */}
                  <div className="text-center text-xs mt-2 text-gray-700">
                    {label}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Step Content */}
          {/* STEP 1 */}
          {step === 1 && (
            <div className="grid grid-cols-3 gap-8 text-sm">
              {/* Job Information */}
              <div className="col-span-2">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md text-gray-700 border-[#DCDCDC]"
                    placeholder="Enter job title"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Job Description
                  </label>
                  <div className="mt-1 rounded-md overflow-hidden border-[#DCDCDC]">
                    <ReactQuill
                      style={{ height: "110px", overflow: "auto" }}
                      value={description}
                      onChange={setDescription}
                      placeholder="Add job description"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Job Category
                    </label>
                    <input
                      type="text"
                      name="jobCategory"
                      value={formData.jobCategory}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                      placeholder="Enter job category"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                      placeholder="Enter location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Number of Openings
                    </label>
                    <input
                      type="number"
                      name="openings"
                      value={formData.openings}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                      placeholder="Enter number"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Salary Range (From)
                      </label>
                      <input
                        type="number"
                        name="salaryRangeFrom"
                        value={formData.salaryRangeFrom}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                        placeholder="Enter minimum salary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">
                        Salary Range (To)
                      </label>
                      <input
                        type="number"
                        name="salaryRangeTo"
                        value={formData.salaryRangeTo}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                        placeholder="Enter maximum salary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Employer Details */}
              <div className="border border-[#DDE4EE] rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Employer Details
                </h3>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Primary User
                  </label>
                  <input
                    type="text"
                    name="primaryUser"
                    value={formData.primaryUser}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Add Co-worker
                  </label>
                  <input
                    type="text"
                    name="coworker"
                    value={formData.coworker}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter co-worker's name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Branch
                  </label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter branch"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="grid grid-cols-3 gap-8 text-sm">
              {/* Job Information */}
              <div className="col-span-2">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Experience Required
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md text-gray-700 border-[#DCDCDC]"
                    placeholder="Experience Required"
                  />
                  <div className="mb-6 pt-5">
                    <label className="block text-sm font-medium text-gray-600">
                      Skills
                    </label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md text-gray-700 border-[#DCDCDC]"
                      placeholder="Skills"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Qualification required
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                      placeholder="Qualifications"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Department
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                      placeholder="Department"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Shift
                    </label>
                    <input
                      type="text"
                      name="Shift"
                      value={formData.Shift}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Preferred Language
                    </label>
                    <input
                      type="text"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                      placeholder="Enter Language"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Specialization Required
                    </label>
                    <input
                      type="text"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                      placeholder="Enter Specialization"
                    />
                  </div>
                </div>
              </div>

              {/* Employer Details */}
              <div className="border border-[#DDE4EE] rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Employer Details
                </h3>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Primary User
                  </label>
                  <input
                    type="text"
                    name="primaryUser"
                    value={formData.primaryUser}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Add Co-worker
                  </label>
                  <input
                    type="text"
                    name="coworker"
                    value={formData.coworker}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter co-worker's name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-600">
                    Branch
                  </label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded-md border-[#DCDCDC]"
                    placeholder="Enter branch"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Review */}
          {step === 3 && (
            <div className="grid grid-cols-3 gap-8 text-sm">
              {/* LEFT: Review Information */}
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Review Information
                </h3>

                <div className="space-y-4">
                  <ReviewRow label="Job Title" value={formData.jobTitle} />
                  <ReviewRow label="Job Description">
                    <div
                      className="text-gray-800"
                      dangerouslySetInnerHTML={{
                        __html: description || "<p>N/A</p>",
                      }}
                    />
                  </ReviewRow>
                  <ReviewRow
                    label="Employment Type"
                    value={formData.employmentType}
                  />
                  <ReviewRow
                    label="Job Category"
                    value={formData.jobCategory}
                  />
                  <ReviewRow
                    label="Number of Openings"
                    value={formData.openings}
                  />
                  <ReviewRow label="Salary Range">
                    {formData.salaryRangeFrom && formData.salaryRangeTo
                      ? `${formData.salaryRangeFrom} - ${formData.salaryRangeTo}`
                      : "N/A"}
                  </ReviewRow>
                  <ReviewRow label="Department" value={formData.department} />
                  <ReviewRow
                    label="Experience Required"
                    value={formData.experience}
                  />
                  <ReviewRow label="Job Location" value={formData.location} />
                  <ReviewRow label="End Date" value={formData.endDate} />
                  <ReviewRow label="Skills" value={formData.skills} />
                  <ReviewRow
                    label="Qualification Required"
                    value={formData.qualification}
                  />
                  <ReviewRow label="Shift" value={formData.Shift} />
                  <ReviewRow
                    label="Preferred Language"
                    value={formData.language}
                  />
                  <ReviewRow
                    label="Specialization Required"
                    value={formData.specialization}
                  />
                </div>
              </div>

              {/* RIGHT: Employer Details */}
              <div className="border border-[#DDE4EE] rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Employer Detail
                </h3>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium">
                    Primary User
                  </label>
                  <p className="text-gray-800 mt-1">
                    {formData.primaryUser || "N/A"}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium">
                    Add Co-worker
                  </label>
                  <p className="text-gray-800 mt-1">
                    {formData.coworker || "N/A"}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium">
                    Email
                  </label>
                  <p className="text-gray-800 mt-1">
                    {formData.email || "N/A"}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium">
                    Phone Number
                  </label>
                  <p className="text-gray-800 mt-1">
                    {formData.phone || "N/A"}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-medium">
                    Branch
                  </label>
                  <p className="text-gray-800 mt-1">
                    {formData.branch || "N/A"}
                  </p>
                </div>
                {/* Additional note or summary if needed */}
                <div className="mt-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Massa et egestas
                  ornare amet. Imperdiet massa ornare.
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md "
              >
                Previous
              </button>
            )}

            {step < 3 && (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button
                onClick={() => alert("Form submitted successfully!")}
                className="px-4 py-2 bg-[#1890FF] text-white rounded-md "
              >
                + Publish
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
