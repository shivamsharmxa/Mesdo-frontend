import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const PublicationForm = ({ achievement, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    if (achievement) {
      setFormData({
        title: achievement.title || "",
        issuer: achievement.issuer || "",
        date: achievement.date || "",
        description: achievement.description || "",
      });
    }
  }, [achievement]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Award Name */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg outline-none"
            placeholder="Award Name"
          />
        </div>

        {/* Issuer and Year */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Issuer</label>
            <select
              name="issuer"
              value={formData.issuer}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none"
            >
              <option value="">Issued By</option>
              <option value="University">University</option>
              <option value="Organization">Organization</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-1">Year</label>
            <div className="relative">
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Select Date"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 text-sm mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg outline-none"
            placeholder="Enter Description"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 bg-gray-100 text-blue-500 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {achievement ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublicationForm;
