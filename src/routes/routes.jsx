import { Routes, Route } from "react-router-dom";
import Recruiter from "../pages/Recruiter/ Recruiter";
import Applicants from "../components/JobCard/Applicants";
import UserDashboard from "../pages/UserSide/UserSide";
import CreateJob from "../pages/CreateJob/CreateJob";
import { ApplicantDetails } from "../components/JobCard/ApplicantDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Recruiter />} />
      <Route path="/applicants/:jobTitle" element={<Applicants />} />
      <Route path="/usermode" element={<UserDashboard />} />
      <Route path="/create" element={<CreateJob />} />
      <Route path="/applicant/:id" element={<ApplicantDetails />} />
    </Routes>
  );
};

export default AppRoutes;
