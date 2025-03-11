import { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";

const About = () => {
  const [logo, setLogo] = useState(null);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result); // Set preview image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 p-12">
        <button className="mb-6">
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">
          About “Organization Name”
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Logo
            </label>
            <div className="relative mt-1 w-20 h-16 flex items-center justify-center border border-gray-300 rounded-md bg-gray-100 text-gray-500 text-sm cursor-pointer overflow-hidden">
              {logo ? (
                <img
                  src={logo}
                  alt="Logo Preview"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Upload size={16} />
                  <span className="text-xs">Upload</span>
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
            <label className="block text-sm font-medium text-gray-900">
              Tagline
            </label>
            <input
              type="text"
              placeholder="Enter Tagline"
              className="mt-1 block w-full h-11 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Phone No.
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="mt-1 block w-full h-11 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* Overview */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Overview
            </label>
            <textarea
              placeholder="Overview of the organization/hospital"
              className="mt-1 block w-full h-32 rounded-md border border-gray-300 bg-gray-20 px-3 py-2 text-gray-700 text-sm focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-14 flex justify-between">
          <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-medium rounded-md hover:bg-gray-200 transition">
            Skip
          </button>
          <button className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition">
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-gray-100"></div>
    </div>
  );
};

export default About;
