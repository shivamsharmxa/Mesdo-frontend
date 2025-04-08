import { ClipboardList, Bookmark, EyeOff } from "lucide-react";
import React from "react";

const JobStats = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: "applied",
      label: "Applied Jobs",
      count: "10,023",
      icon: <ClipboardList className="w-5 h-5" />,
      color: "text-blue-500",
    },
    {
      id: "saved",
      label: "Saved Jobs",
      count: "10,023",
      icon: <Bookmark className="w-5 h-5" />,
      color: "text-green-500",
    },
    {
      id: "hidden",
      label: "Hidden Jobs",
      count: "10,023",
      icon: <EyeOff className="w-5 h-5" />,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-6 ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-start p-5  rounded-xl border transition-all ${
            activeTab === tab.id
              ? "border-blue-200 bg-blue-50 shadow-xs"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className={`p-2 rounded-lg ${tab.color} bg-opacity-10 mb-3`}>
            {React.cloneElement(tab.icon, {
              className: `w-5 h-5 ${tab.color}`,
            })}
          </div>
          <span
            className={`text-sm font-medium ${
              activeTab === tab.id ? "text-gray-900" : "text-gray-700"
            }`}
          >
            {tab.label}
          </span>
          <span
            className={`text-xs ${
              activeTab === tab.id ? "text-gray-600" : "text-gray-500"
            }`}
          >
            {tab.count} Jobs
          </span>
        </button>
      ))}
    </div>
  );
};

export default JobStats;
