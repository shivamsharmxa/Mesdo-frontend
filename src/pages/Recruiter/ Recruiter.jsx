import Filters from "../../components/Filters/Filters";

import JobCards from "../../components/Jobcard/Jobcard";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { Routes, Route } from "react-router-dom"; // Just handle routes here
import Applicants from "../../components/JobCard/Applicants";
import Feed from "../feed/Feed";

const Recruiter = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64 pt-16 p-4">
        {/* Top Bar */}
        <TopBar />

        <Routes>
          {/* Job Listings Page */}
          <Route path="/" element={<JobListing />} />

          {/* Applicants Page */}
          <Route path="/applicants/:jobTitle" element={<Applicants />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </div>
  );
};

const JobListing = () => {
  const dummyJobs = [
    {
      title: "Dental Surgeon",
      status: "Active",
      tag: "Doctor",
      applied: 10,
      shortlisted: 10,
    },
    {
      title: "Nurse",
      status: "Closed",
      tag: "Nurse",
      applied: 5,
      shortlisted: 3,
    },
  ];

  return (
    <div className="space-y-6">
      <Filters />

      {/* Job Cards Section */}
      <JobCards />
    </div>
  );
};

export default Recruiter;
