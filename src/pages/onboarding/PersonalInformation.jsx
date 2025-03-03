import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const PersonalInformation = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <div className="w-1/2 p-12">
        <button className="mb-6">
          <ArrowLeft size={24} className="text-black" />
        </button>

        <h1 className="text-2xl font-semibold text-gray-900">
          Personal Information
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Name*
            </label>
            <input
              type="text"
              placeholder="Akhil Sharma"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Email*
            </label>
            <input
              type="email"
              placeholder="akhil.sharma@gmail.com"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-small text-gray-900">
              Phone Number*
            </label>
            <input
              type="text"
              placeholder="921XXXX123"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
          </div>

          {/* Gender & DOB */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-small text-gray-900">
                Gender*
              </label>
              <div className="relative mt-1">
                <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-[#8C8C8C] text-sm focus:outline-none">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-small  text-gray-900">
                DOB*
              </label>
              <div className="relative mt-1">
                <input
                  type="date"
                  className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-[#8C8C8C] text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* State & City */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-small  text-gray-900">
                State
              </label>
              <div className="relative mt-1">
                <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-[#8C8C8C] text-sm focus:outline-none">
                  <option>Select</option>
                  {states.map((state, index) => (
                    <option key={index}>{state}</option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-small  text-gray-900">
                City
              </label>
              <div className="relative mt-1">
                <select className="appearance-none block w-full rounded-md border border-gray-300 px-3 py-2 text-[#8C8C8C] text-sm focus:outline-none">
                  <option>Select</option>
                  <option>New Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-15 pl-130 ">
          <button
            onClick={() => navigate("/professionalSummary")}
            className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Empty Space */}
      <div className="w-1/2 bg-gray-100"></div>
    </div>
  );
};

export default PersonalInformation;
