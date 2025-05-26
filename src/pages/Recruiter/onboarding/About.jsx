import { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const About = ({ updateFormData }) => {
  const [logo, setLogo] = useState(null);
  const [form, setForm] = useState({
    tagline: "",
    phone: "",
    overview: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
        updateFormData({ logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    updateFormData({ [name]: value });
  };

  const handleContinue = () => {
    if (!form.tagline || !form.phone || !form.overview) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    navigate("/location");
  };

  const handleSkip = () => {
    navigate("/location");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div
        className="w-1/2 flex flex-col px-[100px] py-[60px] mt-[-20px]"
        style={{ minWidth: 560 }}
      >
        <button className="mb-8" onClick={handleBack}>
          <ArrowLeft size={28} className="text-black" />
        </button>

        <h1 className="font-inter font-semibold text-[32px] leading-[130%] tracking-[0px] mb-1">
          About Organization
        </h1>
        <p className="text-[13px] font-sm text-[#8C8C8C] mb-8">
          Include all of your organization details in this section.
        </p>

        {/* Form */}
        <div className="space-y-6">
          {/* Logo Upload */}
          <div className="flex items-center gap-4">
            <label className="block text-[15px] text-gray-900">Logo</label>
            <div className="relative w-24 h-20 flex items-center justify-center border border-gray-200 rounded-lg bg-white text-gray-500 text-sm cursor-pointer overflow-hidden hover:bg-gray-50 transition-colors">
              {logo ? (
                <img
                  src={logo}
                  alt="Logo Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Upload size={20} />
                  <span className="text-[13px] mt-1">Upload</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-[15px] text-gray-900 mb-1">
              Tagline*
            </label>
            <input
              type="text"
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
              placeholder="Enter tagline"
              className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[15px] text-gray-900 mb-1">
              Phone No.*
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Overview */}
          <div>
            <label className="block text-[15px] text-gray-900 mb-1">
              Overview*
            </label>
            <textarea
              name="overview"
              value={form.overview}
              onChange={handleChange}
              placeholder="Write about your organization..."
              className="block w-full h-[180px] rounded-lg border border-gray-200 px-4 py-3 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
            />
          </div>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        {/* Skip & Continue Buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleSkip}
            className="w-[120px] h-[48px] bg-gray-100 text-[#1890FF] text-[15px] font-medium rounded-lg hover:bg-gray-200 transition-all"
          >
            Skip
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="w-[180px] h-[48px] bg-[#1890FF] text-white text-[17px] font-medium rounded-lg hover:bg-blue-600 transition-all shadow-none"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-[#f8f8f8]" />
    </div>
  );
};

About.propTypes = {
  updateFormData: PropTypes.func.isRequired,
};

export default About;
