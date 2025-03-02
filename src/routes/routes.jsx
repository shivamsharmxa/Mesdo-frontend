import { Routes, Route } from "react-router-dom";
import Recruiter from "../pages/Recruiter/ Recruiter";
import Applicants from "../components/JobCard/Applicants";
import UserDashboard from "../pages/UserSide/UserSide";
import CreateJob from "../pages/CreateJob/CreateJob";
import { ApplicantDetails } from "../components/JobCard/ApplicantDetails";
import UploadResume from "../pages/onboarding/UploadResume";
import PersonalInformation from "../pages/onboarding/PersonalInformation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Recruiter />} />
      <Route path="/applicants/:jobTitle" element={<Applicants />} />
      <Route path="/usermode" element={<UserDashboard />} />
      <Route path="/create" element={<CreateJob />} />
      <Route path="/applicant/:id" element={<ApplicantDetails />} />
      <Route path="/onBoarding/resume" element={<UploadResume />} />
      <Route path="/personalInformation" element={<PersonalInformation />} />
    </Routes>
  );
};

export default AppRoutes;
