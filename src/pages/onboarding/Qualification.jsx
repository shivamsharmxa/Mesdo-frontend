import { useState, useEffect } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

const Qualification = () => {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [qualifications, setQualifications] = useState([]); // New state for qualifications
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [customUniversity, setCustomUniversity] = useState("");
  const handleUniversityChange = (selectedOption) => {
    if (selectedOption.value === "other") {
      setIsOtherSelected(true);
      setFormData({ ...formData, university: "" });
    } else {
      setIsOtherSelected(false);
      setFormData({ ...formData, university: selectedOption.value });
    }
  };

  const [formData, setFormData] = useState({
    qualification: "",
    university: "",
    course: "",
    passingYear: "",
    specialization: "",
    courseType: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    navigate("/qualification-preview", { state: { formData } });
  };

  // Fetch Universities
  useEffect(() => {
    axios
      .get("http://localhost:5001/universities")
      .then((response) => {
        console.log("Universities API Response:", response.data);
        const formattedUniversities = response.data.map((uni) => ({
          value: uni.name,
          label: uni.name,
        }));
        setUniversities([
          ...formattedUniversities,
          { value: "other", label: "Other" },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching universities:", error);
      });
  }, []);

  // Fetch Qualifications
  useEffect(() => {
    const fetchQualifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/qualifications"
        );
        console.log("Qualifications API Response:", response.data);

        // Fix: Use 'data' (lowercase d)
        if (response.data && Array.isArray(response.data.data)) {
          const formattedQualifications = response.data.data.map((item) => ({
            category: item.category,
            list: item.list,
          }));

          setQualifications(formattedQualifications);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching qualifications:", error);
      }
    };

    fetchQualifications();
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 p-12">
        <button onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">Qualifications</h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-6">
          {/* Qualification & University */}
          <div className="flex gap-4">
            {/* Qualification Dropdown */}
            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Qualification*
              </label>
              <div className="relative mt-1">
                <Select
                  name="qualification"
                  value={
                    formData.qualification
                      ? {
                          value: formData.qualification,
                          label: formData.qualification,
                        }
                      : null
                  }
                  onChange={(selectedOption) =>
                    setFormData({
                      ...formData,
                      qualification: selectedOption.value,
                    })
                  }
                  options={qualifications.flatMap((qual) =>
                    qual.list.map((q) => ({ value: q, label: q }))
                  )}
                  placeholder="Select"
                  className="w-full text-sm"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      borderRadius: "0.375rem", // Matches rounded-md
                      borderColor: "#D1D5DB", // Matches border-gray-300
                      fontSize: "0.875rem", // Matches text-sm
                      padding: "2px",
                    }),
                  }}
                />

                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                University*
              </label>
              <div className="relative mt-1">
                <Select
                  options={universities}
                  value={
                    universities.find(
                      (uni) => uni.value === formData.university
                    ) || null
                  }
                  onChange={handleUniversityChange}
                  className="w-full text-sm"
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  }}
                  menuPortalTarget={document.body}
                  menuShouldScrollIntoView={false}
                  menuPosition="fixed"
                />
              </div>
              {isOtherSelected && (
                <input
                  type="text"
                  placeholder="Enter your university name"
                  value={customUniversity}
                  onChange={(e) => setCustomUniversity(e.target.value)}
                  className="border p-2 rounded mt-2 w-full text-sm"
                />
              )}
            </div>
          </div>

          {/* Course & Passing Year */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Course*
              </label>
              <div className="relative mt-1">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>BCA</option>
                  <option>MCA</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Passing Year*
              </label>
              <div className="relative mt-1">
                <select
                  name="passingYear"
                  value={formData.passingYear}
                  onChange={handleChange}
                  className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
                >
                  <option>Select</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i}>{2025 - i}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Specialization & Course Type */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Specialization*
              </label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
              >
                <option>Select</option>
                <option>Computer Science</option>
                <option>Mechanical Engineering</option>
                <option>Electrical Engineering</option>
                <option>Biotechnology</option>
                <option>Other</option>
              </select>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Course Type*
              </label>
              <select
                name="courseType"
                value={formData.courseType}
                onChange={handleChange}
                className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
              >
                <option>Select</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Online</option>
              </select>
            </div>
          </div>

          {/* Skills Input */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Skills*
            </label>
            <input
              name="skills"
              onChange={handleChange}
              value={formData.skills}
              type="text"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
              placeholder="Enter your skills"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Description*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 text-sm focus:outline-none"
              rows="3"
              placeholder="Enter a brief description"
            ></textarea>
          </div>

          {/* Continue Button */}
          <div className="mt-6 flex justify-between">
            <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-400 transition">
              Skip
            </button>
            <button
              onClick={handleContinue}
              className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition"
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-gray-100"></div>
    </div>
  );
};

export default Qualification;
