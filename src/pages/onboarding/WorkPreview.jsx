import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Edit, Trash2, PlusCircle } from "lucide-react";

const WorkPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialFormData = location.state?.formData
    ? [location.state.formData]
    : [];
  const [WorkExperience, setWorkExperience] = useState(initialFormData);

  const handleEdit = (index) => {
    navigate("/WorkExperience", {
      state: { formData: WorkExperience[index] },
    });
  };

  const handleDelete = (index) => {
    setWorkExperience(WorkExperience.filter((_, i) => i !== index));
  };

  const handleAddAnother = () => {
    navigate("/WorkExperience");
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Qualification Details */}
      <div className="w-1/2 p-12">
        <button className="mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">
          Work Experience
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your qualifications in this section.
        </p>

        {WorkExperience.length > 0 ? (
          WorkExperience.map((formData, index) => (
            <div key={index} className="mt-6 bg-gray-50 p-6  relative">
              <div className="absolute top-3 right-3 flex space-x-2">
                <button onClick={() => handleEdit(index)}>
                  <Edit
                    size={18}
                    className="text-blue-500 hover:text-blue-700"
                  />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <Trash2
                    size={18}
                    className="text-red-500 hover:text-red-700"
                  />
                </button>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {formData.jobTitle} | {formData.hospital}
              </h2>
              <p className="text-sm text-gray-500">
                {formData.location} {formData.startDate} {formData.endDate}
              </p>
              <ul className="list-disc list-inside mt-3 text-gray-700 text-sm space-y-1">
                {formData.description && <li>{formData.description}</li>}
                {formData.skills && <li>Skills: {formData.skills}</li>}
                {formData.industry && <li>Industry: {formData.industry}</li>}
                {formData.department && <li>Skills: {formData.department}</li>}
                {formData.employementType && (
                  <li>Employement Type: {formData.employementType}</li>
                )}
                {formData.jobType && <li>Job Type: {formData.jobType}</li>}
              </ul>
            </div>
          ))
        ) : (
          <p className="mt-6 text-gray-500">No Work Experience added yet.</p>
        )}
        <button
          onClick={handleAddAnother}
          className=" mt-7 flex items-center space-x-2 text-black hover:text-blue-700 transition"
        >
          <PlusCircle size={20} /> <span>Add Work Experience</span>
        </button>
        {/* Buttons */}
        <div className="mt-60 flex justify-between items-center">
          <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-400 transition">
            Skip
          </button>

          <button
            onClick={() => navigate("/SkillsSpecialization")}
            className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-gray-100"></div>
    </div>
  );
};

export default WorkPreview;
