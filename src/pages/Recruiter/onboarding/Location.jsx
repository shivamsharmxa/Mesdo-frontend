import { ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Location = ({ updateFormData }) => {
  const [form, setForm] = useState({
    locationName: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    updateFormData({ [name]: value });
  };

  const handleContinue = () => {
    if (!form.locationName || !form.address) {
      setError("Please fill all required fields.");
      return;
    }
    setError("");
    navigate("/recruiter/onboarding/complete"); // Placeholder for next step
  };

  const handleSkip = () => {
    navigate("/recruiter/onboarding/complete"); // Placeholder for next step
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
          Location
        </h1>
        <p className="text-[13px] font-sm text-[#8C8C8C] mb-8">
          Include your organization&apos;s location details in this section.
        </p>

        {/* Form */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-[15px] text-gray-900 mb-1">
              Location Name*
            </label>
            <input
              type="text"
              name="locationName"
              value={form.locationName}
              onChange={handleChange}
              placeholder="Enter location name"
              className="block w-full h-[48px] rounded-lg border border-gray-200 px-4 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-[15px] text-gray-900 mb-1">
              Address*
            </label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter complete address"
              className="block w-full h-[120px] rounded-lg border border-gray-200 px-4 py-3 text-gray-700 text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
            />
          </div>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        {/* Skip & Continue Buttons */}
        <div className="flex justify-between  pt-6 mt-12">
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

Location.propTypes = {
  updateFormData: PropTypes.func.isRequired,
};

export default Location;
