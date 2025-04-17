import { useState, useRef } from "react";
import TopNavigation from "../../components/messages/TopNavigation";
import Sidebar from "../../components/messages/Sidebar";
import { Search, ChevronDown, Info } from "lucide-react";
import Privacy from "../../components/settingstabs/Privacy";
import Preferences from "../../components/settingstabs/ Preferences";
import Appearance from "../../components/settingstabs/ Appearance";
import Notification from "../../components/settingstabs/  Notification";

const Tab = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {label}
  </button>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const [formData, setFormData] = useState({
    username: "X-AE-A-19",
    phone: "+44 (158) 008-9987",
    biography:
      "Hi there! 👋 I'm X-AE-A-19, an AI enthusiast and fitness aficionado. When I'm not crunching numbers or optimizing algorithms, you can find me hitting the gym.",
  });
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  );
  const fileInputRef = useRef(null);

  const tabs = [
    "Account",
    "Privacy",
    "Notification",
    "Preferences",
    "Appearance",
  ];

  const handleSave = () => {
    console.log("Saving changes:", formData);
  };

  const handleCancel = () => {
    setFormData({
      username: "X-AE-A-19",
      phone: "+44 (158) 008-9987",
      biography:
        "Hi there! 👋 I'm X-AE-A-19, an AI enthusiast and fitness aficionado. When I'm not crunching numbers or optimizing algorithms, you can find me hitting the gym.",
    });
    setProfileImage(
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    );
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      console.log("File selected:", file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      console.log("File dropped:", file);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNavigation />

      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar />

        <div className="flex-1 ml-[300px] overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search settings..."
                  className="pl-9 pr-4 py-1.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex px-6">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab}
                      label={tab}
                      isActive={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                    />
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === "Account" && (
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-base font-bold text-gray-900">
                          Your Profile
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5">
                          Please update your profile settings here
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={handleCancel}
                          className="px-3 py-1.5 text-sm rounded-lg font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 flex items-center"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                    <hr className="mb-6 border-gray-200" />{" "}
                    {/* ← After Your Profile */}
                    <div className="space-y-6">
                      <div>
                        <label className="flex items-center text-sm font-bold text-gray-700">
                          Username
                        </label>
                        <input
                          type="text"
                          value={formData.username}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              username: e.target.value,
                            })
                          }
                          className="mt-1 ml-50 w-120 h-10 px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <hr className="border-gray-200" />{" "}
                      {/* ← After Username */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700">
                          Phone Number
                        </label>
                        <div className="mt-1 ml-50 w-120 h-10 flex">
                          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-l-md bg-white flex items-center space-x-2">
                            <img
                              src="https://images.unsplash.com/photo-1628525805814-cf9c89c76d52?auto=format&fit=crop&w=24&h=16&q=80"
                              alt="GB"
                              className="w-6 h-4 object-cover rounded"
                            />
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                          </button>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="flex-1 px-3 py-1.5 text-sm border-y border-r border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <hr className="border-gray-200" />{" "}
                      {/* ← After Phone Number */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700">
                          Profile Picture
                        </label>
                        <div className="mt-1 flex items-center space-x-4 ">
                          <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden ring-4 ring-gray-100">
                            <img
                              src={profileImage}
                              alt="Profile"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1 ml-50">
                            <div
                              className="border-2 border-dashed h-35 w-120  border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer"
                              onClick={() => fileInputRef.current?.click()}
                              onDragOver={handleDragOver}
                              onDrop={handleDrop}
                            >
                              <p className="text-sm text-blue-600">
                                Click here to upload your file or drag
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Supported format: SVG, PNG, JPG (10MB max)
                              </p>
                              <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="border-gray-200" />{" "}
                      {/* ← After Profile Picture */}
                      <div>
                        <label className="flex items-center text-sm font-bold text-gray-700">
                          Biography
                          <Info className="ml-1.5 h-3.5 w-3.5 text-gray-400" />
                        </label>
                        <textarea
                          value={formData.biography}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              biography: e.target.value,
                            })
                          }
                          rows={4}
                          className="mt-1 ml-70 px-3 py-1.5 text-sm border h-35 w-120 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Privacy" && <Privacy />}
                {activeTab === "Notification" && <Notification />}
                {activeTab === "Preferences" && <Preferences />}
                {activeTab === "Appearance" && <Appearance />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
