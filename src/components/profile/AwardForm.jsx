import React, { useState, useEffect } from "react";
import { PlusIcon, X } from "lucide-react";

const AwardForm = ({ achievement, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    date: "",
    description: "",
    highlights: [],
  });

  const [highlightInput, setHighlightInput] = useState("");

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
    <div className="flex">
      <div className="w-full flex flex-col p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Award - Full width */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Award*</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
              placeholder="Enter award title"
            />
          </div>

          {/* Issuer and Date in same line */}
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm mb-1">
                Issuer*
              </label>
              <input
                name="issuer"
                value={formData.issuer}
                onChange={handleChange}
                required
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                placeholder="Enter issuer name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm mb-1">Date*</label>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
          </div>

          {/* Description - Full width */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="2"
              className="w-full p-2 h-30 border border-gray-300 rounded-md outline-none"
              placeholder="Enter description"
            />
          </div>

          {/* Highlights */}
          {/* <div>
            <label className="block text-gray-700 text-sm mb-1">
              Highlights
            </label>
            <div className="flex gap-2 mb-1">
              <input
                type="text"
                value={highlightInput}
                onChange={(e) => setHighlightInput(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md outline-none"
                placeholder="Enter highlights"
              />
              <button
                type="button"
                onClick={addHighlight}
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center justify-center"
              >
                <PlusIcon size={16} />
              </button>
            </div>

            <ul className="space-y-1 max-h-[120px] overflow-y-auto">
              {formData.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-xs bg-gray-100 p-2 rounded-md"
                >
                  {highlight}
                  <button
                    type="button"
                    onClick={() => removeHighlight(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Buttons */}
          <div className="mt-4 flex justify-between w-full">
            <button
              type="button"
              onClick={onCancel}
              className="w-[100px] h-[32px] bg-[#F0F0F0] text-[#1890FF] text-xs rounded-md hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-[100px] h-[32px] bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition"
            >
              {achievement ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AwardForm;
