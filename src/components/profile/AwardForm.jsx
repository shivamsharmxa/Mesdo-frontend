import React, { useState, useEffect } from "react";
import { PlusIcon, X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AwardForm = ({ achievement, onSave, onCancel }) => {
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
                  Issuer*
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
                <label className="block text-gray-700 text-sm mb-2">
                  Date*
                </label>
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

            {/* Highlights */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Highlights
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={highlightInput}
                  onChange={(e) => setHighlightInput(e.target.value)}
                  className="flex-1 p-3 border border-gray-300 rounded-lg outline-none"
                  placeholder="Enter highlights"
                />
                <button
                  type="button"
                  onClick={addHighlight}
                  className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center"
                >
                  <PlusIcon size={18} />
                </button>
              </div>

              <ul className="space-y-2">
                {formData.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-sm bg-gray-100 p-3 rounded-lg"
                  >
                    {highlight}
                    <button
                      type="button"
                      onClick={() => removeHighlight(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </li>
                ))}
              </ul>
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

export default AwardForm;
