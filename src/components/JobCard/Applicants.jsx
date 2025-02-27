import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Briefcase, Search } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { ApplicantDetails } from "./ApplicantDetails";

const dummyApplicants = [
  {
    id: 1,
    name: "Rahul Thakar",
    email: "rahulthakar@gmail.com",
    phone: "+91 9034573753",
    status: "Applied",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    progress: 1,
    matchPercentage: 80,
  },
  {
    id: 2,
    name: "Shivam Sharma",
    email: "angel@example.com",
    phone: "+91 9034573753",
    status: "Checked",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    progress: 2,
    matchPercentage: 60,
  },
  {
    id: 3,
    name: "Nithin Kumar Meena",
    email: "dulce@example.com",
    phone: "+91 9034573753",
    status: "Interview",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    progress: 2,
    matchPercentage: 75,
  },
  {
    id: 4,
    name: "Rachit Elhance",
    email: "dulce@example.com",
    phone: "+91 9034573753",
    status: "Interview",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    progress: 2,
    matchPercentage: 75,
  },
  {
    id: 5,
    name: "Dulce Ekkstromann",
    email: "dulce@example.com",
    phone: "+91 9034573753",
    status: "Interview",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    progress: 2,
    matchPercentage: 75,
  },
];

const progressStages = ["Applied", "Interview", "Offer", "Hired"];

export default function Applicants() {
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState(dummyApplicants);
  const [sortType, setSortType] = useState("matchPercentage");
  const totalApplicants = applicants.length;
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const handleSort = () => {
    const sortedApplicants = [...applicants].sort((a, b) => {
      if (sortType === "matchPercentage") {
        return b.matchPercentage - a.matchPercentage;
      } else if (sortType === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
    setApplicants(sortedApplicants);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col ml-70">
        {/* TOP BAR */}
        <div className="bg-white border-b border-gray-200">
          {/* Row 1: Back arrow + Top Info */}
          <div className="px-6 pt-4 pb-2 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-start md:items-center gap-3">
              {/* Back Arrow */}
              <button
                onClick={() => navigate("/")}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <ArrowLeft size={20} />
              </button>

              {/* Text block with increased spacing */}
              <div className="flex flex-col justify-center h-24">
                {/* "Active Until" line */}
                <span className="text-xs text-gray-500 mb-2">
                  Active Until - 31 Dec 2024
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-800">
                    Dental Surgeon
                  </h2>
                  {/* Active Badge */}
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
                    Active
                  </span>
                  {/* Role */}
                  <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    Doctor
                  </span>
                  {/* Creator */}
                  <span className="text-xs text-gray-500">
                    Created by Rahul T
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Tabs */}
          <div className="flex items-center space-x-6 px-6 mt-3 text-sm text-gray-600 border-t border-gray-200">
            <div className="flex items-center gap-1 cursor-pointer py-3 border-b-2 border-blue-500 text-black font-medium">
              <Users size={16} />
              Candidates ({totalApplicants})
            </div>
            <div className="flex items-center gap-1 cursor-pointer py-3 hover:text-blue-500">
              <Briefcase size={16} />
              Job Info
            </div>
            <div className="flex items-center gap-1 cursor-pointer py-3 hover:text-blue-500">
              <Search size={16} />
              Search Candidate
            </div>
          </div>
        </div>

        {/* APPLICANTS CONTENT */}
        <div className="px-6 py-4 max-w-[1200px] w-full mx-auto">
          {/* Top row: Search + Sort */}
          <div className="flex items-center justify-between mb-4">
            {/* Left: Wide Search bar */}
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Search Candidate"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-sm"
              />
              <Search
                size={16}
                className="absolute left-3 top-3 text-gray-400"
              />
            </div>
            {/* Right: Sort dropdown */}
            <div className="flex items-center gap-2 ml-4">
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-[#00000099] bg-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  letterSpacing: "2%",
                }}
              >
                <option value="matchPercentage">Match Percentage</option>
                <option value="name">Name</option>
              </select>

              <button
                onClick={handleSort}
                className="border border-gray-300 rounded-md px-3 py-2 text-[#00000099] bg-white flex items-center gap-1"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "16.94px",
                  letterSpacing: "2%",
                }}
              >
                Sort
              </button>
            </div>
          </div>

          {/* Applicant List */}
          <div>
            <div className="relative">
              {/* Applicants List */}
              <div className="space-y-4">
                {applicants.map((applicant) => (
                  <motion.div
                    key={applicant.id}
                    onClick={() => setSelectedApplicant(applicant)} // Open drawer with selected applicant
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white shadow-sm rounded-lg px-4 py-3 border border-gray-200 flex items-center cursor-pointer hover:shadow-md transition-all"
                  >
                    {/* COLUMN 1: Profile + Name */}
                    <div className="min-w-[180px] flex items-center gap-3">
                      <img
                        src={applicant.profilePic || "/default-avatar.png"}
                        alt={applicant.name || "Unknown"}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <h2 className="text-sm font-semibold text-gray-800">
                        {applicant.name || "N/A"}
                      </h2>
                    </div>

                    {/* COLUMN 2: Status + Progress */}
                    <div className="min-w-[160px] flex flex-col ml-6">
                      <span className="text-xs text-gray-600 mb-1">
                        {applicant.status || "Pending"}
                      </span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={index}
                            className={`w-6 h-1 rounded-full ${
                              index < (applicant.progress || 0)
                                ? "bg-yellow-500"
                                : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* COLUMN 3: Email */}
                    <div className="ml-6 min-w-[180px]">
                      <span className="text-sm text-[#4B9BD4]">
                        {applicant.email || "No email"}
                      </span>
                    </div>

                    {/* COLUMN 4: Phone */}
                    <div className="ml-6 min-w-[120px]">
                      <span className="text-sm text-[#4B9BD4]">
                        {applicant.phone || "No phone"}
                      </span>
                    </div>

                    {/* COLUMN 5: Match % */}
                    <div className="ml-auto">
                      <span className="text-sm text-gray-800 font-medium">
                        {applicant.matchPercentage
                          ? `${applicant.matchPercentage}%`
                          : "N/A"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right-Side Drawer for Applicant Details */}
              <AnimatePresence>
                {selectedApplicant && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg p-6 overflow-auto"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedApplicant(null)}
                      className="absolute top-4 right-4 text-gray-600 hover:text-black"
                    >
                      ✕
                    </button>

                    {/* ApplicantDetail Component */}
                    <ApplicantDetails applicant={selectedApplicant} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
