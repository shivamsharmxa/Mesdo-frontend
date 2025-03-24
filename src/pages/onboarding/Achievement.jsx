import { useState, useEffect } from "react";
import { ArrowLeft, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS

const Achievement = () => {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [formData, setFormData] = useState({
    award: "",
    issuer: "",
    year: "",
    description: "",
  });

  // ReactQuill Modules & Formats
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

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "link",
    "image",
  ];

  useEffect(() => {
    axios
      .get("https://example.com/api/universities")
      .then((response) => setUniversities(response.data))
      .catch((error) => console.error("Error fetching universities:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDescriptionChange = (content) => {
    setFormData({ ...formData, description: content });
  };

  const handleContinue = () => {
    navigate("/Achievement-preview", { state: { formData } });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-1/2 h-full flex flex-col p-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} className="text-black" />
        </button>

        {/* Title & Description */}
        <h1 className="text-2xl font-semibold text-gray-900">Achievement</h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form Container with Scroll */}
        <div className="mt-4 flex-1 overflow-auto pr-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Award</label>
            <input
              name="award"
              value={formData.award}
              onChange={handleChange}
              type="text"
              placeholder="Award Name"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none mb-3"
            />
          </div>

          <div className="space-y-4">
            {/* Issuer & Year */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-900">Issuer</label>
                <input
                  name="issuer"
                  value={formData.issuer}
                  onChange={handleChange}
                  type="text"
                  placeholder="Issuer Name"
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none mb-3"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm text-gray-900">Year</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg outline-none mb-3"
                >
                  <option value="">Select</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = 2025 - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-900">Description</label>
              <ReactQuill
                theme="snow"
                value={formData.description}
                onChange={handleDescriptionChange}
                modules={modules}
                formats={formats}
                placeholder="Write about your achievement..."
                className="mt-2 bg-white border border-gray-300 rounded-md text-gray-700"
              />
            </div>

            {/* + Add Achievement Button */}
            <button className="flex items-center text-[#262626] hover:bg-amber-50 font-medium mt-2">
              <PlusCircle size={20} className="mr-2" />
              Add Achievement
            </button>

            {/* Skip & Continue Buttons */}
            <div className="mt-6 flex justify-between w-full">
              <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm rounded-md hover:bg-gray-400 transition">
                Skip
              </button>
              <button
                onClick={handleContinue}
                className="w-[120px] h-[40px] bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 h-screen bg-gray-100"></div>
    </div>
  );
};

export default Achievement;
