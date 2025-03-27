import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import ReactQuill from "react-quill";

const WorkExperienceForm = ({ experience, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    institution: "",
    type: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
    tags: [],
  });

  // Initialize form with existing experience data if editing
  useEffect(() => {
    if (experience) {
      setFormData({
        title: experience.title || "",
        institution: experience.institution || "",
        type: experience.type || "",
        location: experience.location || "",
        startDate: experience.startDate || "",
        endDate: experience.currentlyWorking ? "" : experience.endDate || "",
        currentlyWorking: experience.currentlyWorking || false,
        description: experience.description || "",
        tags: experience.tags || [],
      });
    } else {
      // Reset form when adding new experience
      setFormData({
        title: "",
        institution: "",
        type: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
        tags: [],
      });
    }
  }, [experience]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link"],
      ["clean"],
    ],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "currentlyWorking" && checked ? { endDate: "" } : {}),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the experience data to save
    const experienceData = {
      ...(experience ? { id: experience.id } : { id: Date.now() }), // Keep existing ID or create new one
      title: formData.title,
      institution: formData.institution,
      type: formData.type,
      location: formData.location,
      startDate: formData.startDate,
      endDate: formData.currentlyWorking ? "" : formData.endDate,
      currentlyWorking: formData.currentlyWorking,
      description: formData.description,
      tags: formData.tags,
    };

    onSave(experienceData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-900">
              Job Title*
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              required
              className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter job title"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-900">
              Hospital/Clinic*
            </label>
            <input
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              type="text"
              required
              className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter hospital/clinic"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-900">
              Employment Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-900">
              Location
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text"
              className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter location"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-900">
              Start Date*
            </label>
            <input
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {!formData.currentlyWorking && (
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-900">
                End Date
              </label>
              <input
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                disabled={formData.currentlyWorking}
                className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="currentlyWorking"
            id="currentlyWorking"
            checked={formData.currentlyWorking}
            onChange={handleChange}
            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
          />
          <label htmlFor="currentlyWorking" className="text-sm text-gray-700">
            I currently work here
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900">
            Job Description
          </label>
          <ReactQuill
            value={formData.description}
            onChange={(value) =>
              setFormData({ ...formData, description: value })
            }
            modules={modules}
            className="h-48 mb-12"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900">
            Skills/Tags (comma-separated)
          </label>
          <input
            name="tags"
            value={formData.tags.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                tags: e.target.value
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter(Boolean),
              })
            }
            type="text"
            className="block w-full rounded-md border h-12 border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter skills or tags"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          {experience ? "Save Changes" : "Add Experience"}
        </button>
      </div>
    </form>
  );
};

export default WorkExperienceForm;
