import React, { useState, useEffect } from "react";
import { PlusIcon, X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PublicationForm = ({ achievement, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    date: "",
    description: "",
    highlights: [],
  });

  const [highlightInput, setHighlightInput] = useState("");
  const navigate = useNavigate();

  // Pre-fill data if editing
  useEffect(() => {
    if (achievement) {
      setFormData({
        title: achievement.title || "",
        issuer: achievement.issuer || "",
        date: achievement.date || "",
        description: achievement.description || "",
        highlights: achievement.highlights || [],
      });
    } else {
      setFormData({
        title: "",
        issuer: "",
        date: "",
        description: "",
        highlights: [],
      });
    }
  }, [achievement]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addHighlight = () => {
    if (highlightInput.trim() !== "") {
      setFormData({
        ...formData,
        highlights: [...formData.highlights, highlightInput],
      });
      setHighlightInput("");
    }
  };

  const removeHighlight = (index) => {
    const updatedHighlights = formData.highlights.filter((_, i) => i !== index);
    setFormData({ ...formData, highlights: updatedHighlights });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full h-full flex flex-col p-8">
        {/* Title & Description */}
        <h1 className="text-2xl font-semibold text-gray-900">
          {achievement ? "Edit Achievement" : "Add Achievement"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant achievements and dates in this section.
        </p>

        {/* Form Container with Scroll */}
        <div className="mt-4 flex-1 overflow-auto pr-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title and Issuer */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm mb-2">
                  Title*
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none mb-3"
                  placeholder="Enter title"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm mb-2">
                  Publisher
                </label>
                <input
                  name="issuer"
                  value={formData.issuer}
                  onChange={handleChange}
                  required
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none mb-3"
                  placeholder="Enter issuer name"
                />
              </div>
            </div>

            {/* Date and Description */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm mb-2">Year</label>
                <input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none mb-3"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none mb-3"
                  placeholder="Enter description"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-between w-full">
              <button
                type="button"
                onClick={onCancel}
                className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[120px] h-[40px] bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
              >
                {achievement ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Empty Space */}
    </div>
  );
};

export default PublicationForm;
