import { Routes, Route } from "react-router-dom";
import Recruiter from "../pages/Recruiter/ Recruiter";
import Applicants from "../components/JobCard/Applicants";
import UserDashboard from "../pages/UserSide/UserSide";
import CreateJob from "../pages/CreateJob/CreateJob";
import { ApplicantDetails } from "../components/JobCard/ApplicantDetails";
import UploadResume from "../pages/onboarding/UploadResume";
import PersonalInformation from "../pages/onboarding/PersonalInformation";
import ProfessionalSummary from "../pages/onboarding/ProfessionalSummary";
import Qualification from "../pages/onboarding/Qualification";
import WorkExperience from "../pages/onboarding/WorkExperience";
import SkillsSpecialization from "../pages/onboarding/SkillsSpecialization";
import Achievement from "../pages/onboarding/Achievement";
import QualificationPreview from "../pages/onboarding/QualificationPreview";
import WorkPreview from "../pages/onboarding/WorkPreview";
import AchievementPreview from "../pages/onboarding/AchievementPreview";
import MainPage from "../pages/auth/MainPage";
import SignUp from "../pages/auth/SIgnUp";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ChangePassword from "../pages/auth/ChangePassword";
import OrganizationInformation from "../pages/Recruiter/onboarding/OrganizationInformation";
import About from "../pages/Recruiter/onboarding/About";
import Location from "../pages/Recruiter/onboarding/Location";
import Profile from "../pages/UserSide/Profile";
import Interest from "../pages/onboarding/Interest";
import RecruiterProfile from "../pages/Recruiter/profile/RecruiterProfile";
import Messages from "../pages/UserSide/Messages";
import ProfileRecruiter from "../pages/Recruiter/profile/ProfileRecruiter";
import JobPage from "../pages/UserSide/JobPage";
import NotificationApp from "../components/notification/Notification";
import Settings from "../pages/UserSide/Settings";
import AppliedJob from "../pages/UserSide/AppliedJob";
import SavedJobs from "../pages/UserSide/SavedJobs";
import HiddenJobs from "../pages/UserSide/HiddenJobs";

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
      <Route path="/professionalSummary" element={<ProfessionalSummary />} />
      <Route path="/Qualification" element={<Qualification />} />
      <Route path="/WorkExperience" element={<WorkExperience />} />
      <Route path="/SkillsSpecialization" element={<SkillsSpecialization />} />
      <Route path="/Achievement" element={<Achievement />} />
      <Route path="/qualification-preview" element={<QualificationPreview />} />
      <Route path="/WorkExperience-preview" element={<WorkPreview />} />
      <Route path="/Achievement-preview" element={<AchievementPreview />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      <Route path="/About" element={<About />} />
      <Route path="/location" element={<Location />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Interest" element={<Interest />} />
      <Route path="/RecruiterProfile" element={<RecruiterProfile />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/ProfileRecruiter" element={<ProfileRecruiter />} />
      <Route path="/Job" element={<JobPage />} />
      <Route path="/Notification" element={<NotificationApp />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/AppliedJob" element={<AppliedJob />} />
      <Route path="/SavedJob" element={<SavedJobs />} />
      <Route path="/HiddenJob" element={<HiddenJobs />} />
      <Route
        path="/OrganizationInformation"
        element={<OrganizationInformation />}
      />
    </Routes>
  );
};

export default AppRoutes;
