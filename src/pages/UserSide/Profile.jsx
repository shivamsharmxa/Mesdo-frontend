import { useState } from "react";
import mesdoLogo from "../../assets/mesdo_logo.jpeg";
import HospitalIcon from "../../assets/HospitalIcon.png";
import {
  Bell,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Plus,
  Search,
  Settings,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  Globe,
  ChevronRight,
  X,
  ShieldCheck,
  Ellipsis,
  PlusCircle,
  PlusIcon,
  Edit,
  Trash2,
  AwardIcon,
} from "lucide-react";
import QualificationsPreview from "../../components/profile/QualificationsPreview";
import NavItem from "../../components/profile/NavItem";
import WorkExperience from "../../Components/profile/AddWorkExperience";
import SkillsSpecialization from "../../components/profile/SkillsSpecialization";
import CertificateList from "../../Components/profile/CertificateList";
import ProfileSection from "../../components/profile/ProfileSection";
import EducationItem from "../../Components/profile/EducationItem";
import WorkExperienceSection from "../../Components/profile/WorkExperienceSection";

import AchievementPreview from "../../Components/profile/AchievementPreview";
import ExtraInformation from "../../Components/profile/ExtraInformation";
import AddQualification from "../../Components/profile/AddQualification";

import WorkExperienceForm from "../../components/profile/WorkExperienceForm";
import QualificationForm from "../../components/profile/QualificationForm";

import AwardForm from "../../components/profile/AwardForm";

const people = [
  {
    name: "Alena Baptista",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Mira Curtis",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Ashlynn Rosser",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Alfonso Siphron",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Jakob Dias",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Chance Calzoni",
    role: "Dental Surgeon | Apollo",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

function ExperienceItem1() {
  return (
    <div className="flex items-start space-x-3">
      <Briefcase className="text-blue-500 w-10 h-10 mt-1" />
      <div>
        <p className="text-sm font-semibold text-gray-800">
          10 years of Experience
        </p>
        <p className="text-sm text-gray-600">
          Lorem ipsum description Lorem ipsum description Lorem ipsum
          description
        </p>
      </div>
    </div>
  );
}
function ExperienceItem2() {
  return (
    <div className="flex items-start space-x-3">
      <Briefcase className="text-blue-500 w-10 h-10 mt-1" />
      <div>
        <p className="text-sm font-semibold text-gray-800">B.D.S & M.D.S</p>
        <p className="text-sm text-gray-600">
          Lorem ipsum description Lorem ipsum description Lorem ipsum
          description
        </p>
      </div>
    </div>
  );
}
const TabsSection = ({
  activeTab,
  setActiveTab,
  experience,
  onSave,
  onCancel,
}) => {
  const tabs = ["Overview", "Social Activity", "Applied Jobs", "Saved"];
  const [isEditing, setIsEditing] = useState(false);

  const [activeModalTab, setActiveModalTab] = useState("About");

  const [aboutData, setAboutData] = useState({
    tagline: "A highly experienced and dedicated Cardiologist...",
    description: `Currently leading a specialized team at MediCare Hospital, 
    providing high-quality patient care and implementing advanced medical techniques. 
    Committed to continuous learning, mentorship, and contributing to the medical 
    community through research publications and healthcare initiatives.`,
  });

  // Local state for editing (so changes don’t immediately reflect)
  const [editData, setEditData] = useState({ ...aboutData });
  const [editingExperience, setEditingExperience] = useState(null);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [userSkills, setUserSkills] = useState([
    "CPR Certified",
    "Patient Care",
    "EMT",
  ]);
  const [userLanguage, setUserLanguage] = useState([
    "Hindi",
    "English",
    "Spanish",
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qualifications, setQualifications] = useState([]);
  const [editingQualification, setEditingQualification] = useState(null);
  const [editingAward, setEditingAward] = useState(null);
  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: "Certificate of Excellence",
      issuer: "Coursera",
      date: "2024-04-25",
      description:
        "Recognized for outstanding performance in the Advanced React course.",
      highlights: [
        "Completed the course with a top 5% rank.",
        "Gained expertise in Redux and React Hooks.",
      ],
    },
    {
      id: 2,
      title: "Best Frontend Developer Award",
      issuer: "Techieshubhdeep IT Solutions",
      date: "2023-12-10",
      description:
        "Awarded for exceptional contributions to frontend development projects.",
      highlights: [
        "Successfully delivered 5+ major client projects.",
        "Enhanced application performance by 30%.",
      ],
    },
    {
      id: 3,
      title: "JavaScript Mastery",
      issuer: "Udemy",
      date: "2022-11-15",
      description:
        "Completed advanced JavaScript training with hands-on projects.",
      highlights: [
        "Built 3 full-stack applications using JavaScript.",
        "Mastered concepts like closures, promises, and async/await.",
      ],
    },
  ]);

  const [editingAchievement, setEditingAchievement] = useState(null);
  const [activeAchievementTab, setActiveAchievementTab] = useState("Preview");
  const [userLanguages, setUserLanguages] = useState([]);

  // Save or Update Achievement
  const handleSaveAchievement = (newAchievement) => {
    if (editingAchievement) {
      // Update existing achievement
      setAchievements(
        achievements.map((achievement) =>
          achievement.id === editingAchievement.id
            ? { ...newAchievement, id: editingAchievement.id }
            : achievement
        )
      );
    } else {
      // Add new achievement
      setAchievements([...achievements, { ...newAchievement, id: Date.now() }]);
    }

    // Reset editing state and modal tab
    setEditingAchievement(null);
    setActiveAchievementTab("Preview");
  };

  // Edit Achievement
  const handleEditAchievement = (achievement) => {
    setEditingAchievement(achievement);
    setActiveAchievementTab("Edit");
  };

  // Delete Achievement
  const handleDeleteAchievement = (id) => {
    const updatedAchievements = achievements.filter(
      (achievement) => achievement.id !== id
    );
    setAchievements(updatedAchievements);
  };

  // Cancel Action
  const handleAward = () => {
    setEditingAchievement(null);
    setActiveAchievementTab("Preview");
  };

  const [activeQualificationTab, setActiveQualificationTab] =
    useState("Preview");

  const handleSaveQualification = (savedQualification) => {
    if (editingQualification) {
      // Update existing qualification
      setQualifications(
        qualifications.map((qual) =>
          qual.id === savedQualification.id ? savedQualification : qual
        )
      );
    } else {
      // Add new qualification
      setQualifications([
        ...qualifications,
        { ...savedQualification, id: Date.now() },
      ]);
    }
    setEditingQualification(null);
    setActiveQualificationTab("Preview");
  };

  const handleEditQualification = (qualification) => {
    setEditingQualification(qualification);
    setActiveQualificationTab("Edit");
  };

  const handleDeleteQualification = (id) => {
    setQualifications(
      qualifications.filter((qualification) => qualification.id !== id)
    );
  };
  const [experiences, setExperiences] = useState([
    // Your initial experiences data here
    {
      id: 1,
      title: "Dental Surgeon",
      type: "Full-Time",
      institution: "AIIMS",
      location: "Delhi, India",
      date: "Mar, 23 - Apr 25",
      description: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Ipsum blandit neque malesuada phasellus elit cursus.",
      ],
      tags: ["Lorem ipsum", "Lorem ipsum"],
    },
    // Add more experiences if needed
  ]);

  // Handle input changes in the modal
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Save changes and update the About section
  const handleSave = () => {
    setAboutData(editData); // Update the state with edited data
    setIsEditing(false); // Close the modal
  };
  const handleSaveExperience = (savedExperience) => {
    if (editingExperience) {
      // Update existing experience
      setExperiences(
        experiences.map((exp) =>
          exp.id === savedExperience.id ? savedExperience : exp
        )
      );
    } else {
      // Add new experience - make sure this has all required fields
      setExperiences([
        ...experiences,
        {
          ...savedExperience,
          id: Date.now(), // Generate unique ID
          title: savedExperience.title || "",
          institution: savedExperience.institution || "",
          type: savedExperience.type || "",
          location: savedExperience.location || "",
          startDate: savedExperience.startDate || "",
          endDate: savedExperience.currentlyWorking
            ? ""
            : savedExperience.endDate || "",
          currentlyWorking: savedExperience.currentlyWorking || false,
          description: savedExperience.description || "",
          tags: savedExperience.tags || [],
        },
      ]);
    }
    setEditingExperience(null);
    setActiveModalTab("Work Experience"); // Return to list view
  };

  // Function to open the modal
  const openModal = (tab) => {
    setIsEditing(true);
    setActiveModalTab(tab);
  };

  const ModalTabs = [
    "About",
    "Work Experience",
    "Qualification",
    "Certifications",
    "Skills",
    "Awards & Achievements",
    "Extra Information",
  ];

  // const skills = [
  //   "Laser Surgery",
  //   "Dental Implants",
  //   "Orthodontics",
  //   "Root Canal",
  //   "Cosmetic Dentistry",
  // ];

  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "CPR Certification",
      issuer: "Medical Board",
      date: "2023",
      image: "https://picsum.photos/100/60?random=1",
      size: "1.5 MB",
    },
    {
      id: 2,
      title: "Advanced Training",
      issuer: "Dental Association",
      date: "2022",
      image: "https://picsum.photos/100/60?random=2",
      size: "2.3 MB",
    },
  ]);
  // Handle certificate updates
  const handleSaveCertificates = (updatedCertificates) => {
    setCertificates(updatedCertificates);
    setIsEditingCertificates(false);
  };
  const [isEditingCertificates, setIsEditingCertificates] = useState(false);

  const [publications, setPublications] = useState([
    {
      title: "Advanced Techniques in Dental Surgery",
      issuer: "Journal of Dental Medicine",
      date: "2023-05-15",
      description: "Published research on innovative surgical methods",
      highlights: ["Peer-reviewed publication", "Cited 15+ times"],
    },
    // Add more initial publications if needed
  ]);

  return (
    <div className="mt-6">
      {/* Tabs Container with Border */}
      <div className="border border-gray-200 rounded-lg p-2 bg-white">
        <div className="grid grid-cols-4 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-300
            ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "text-gray-500 hover:text-gray-700"
            }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "Overview" && (
          <div>
            {/* About Section */}
            <div className="bg-white rounded-md shadow-sm p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-800">About</h2>
                <button
                  onClick={() => {
                    setEditData({ ...aboutData }); // Set existing values in input
                    setActiveModalTab("About");
                    setIsEditing(true);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Pencil className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {aboutData.tagline}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                {aboutData.description}
              </p>
            </div>

            {isEditing && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/50 bg-opacity-50 p-4">
                <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                  <div className="flex flex-col md:flex-row gap-6  px-3 py-4">
                    {/* Sidebar Menu */}
                    <div className="w-full md:w-1/4 lg:w-1/5 ">
                      <h3 className="text-lg font-semibold  px-4 py-3 text-gray-800">
                        Overview
                      </h3>
                      <ul className="">
                        {ModalTabs.map((item, index) => (
                          <li key={index} className="w-full ">
                            <button
                              className={`w-full h-14 text-left px-4 py-3 text-sm font-medium border-[1px] border-gray-200    transition-all duration-300
              ${
                activeModalTab === item
                  ? "bg-[#1890ff] text-white"
                  : "text-gray-700 hover:bg-[#1890ff] hover:text-white"
              }`}
                              onClick={() => setActiveModalTab(item)}
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Edit Modal */}
                    <div className="w-full md:w-3/4 lg:w-4/5 bg-white ">
                      {activeModalTab === "About" && (
                        <div>
                          {" "}
                          <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">About</h3>
                            <button
                              onClick={() => setIsEditing(false)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="p-6 space-y-4">
                            {/* Tagline Input */}
                            <div className="flex flex-col gap-2">
                              <label
                                htmlFor="tagline"
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                Tagline
                              </label>
                              <input
                                type="text"
                                id="tagline"
                                name="tagline"
                                value={editData.tagline}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                              />
                            </div>

                            {/* Description Input */}
                            <div className="flex flex-col gap-2">
                              <label
                                htmlFor="description"
                                className="text-sm font-medium text-gray-700"
                              >
                                Description
                              </label>
                              <textarea
                                id="description"
                                name="description"
                                rows="5"
                                value={editData.description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            {/* Buttons */}
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeModalTab === "Work Experience" && (
                        <div>
                          <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">
                              Work Experience
                            </h3>
                            <button
                              onClick={() => setIsEditing(false)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="flex justify-end my-4">
                            <button
                              className="flex items-center gap-2 cursor-pointer bg-blue-500 text-white px-3 py-2 rounded-lg"
                              onClick={() => {
                                setEditingExperience(null); // Clear any previous edit
                                setActiveModalTab("Add Work Experience");
                              }}
                            >
                              <Plus size={15} />
                              Add New
                            </button>
                          </div>

                          <div className="space-y-4 p-4">
                            {experiences.map((exp) => (
                              <div
                                key={exp.id}
                                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex gap-3">
                                    <Briefcase className="w-5 h-5 text-blue-500" />
                                    <div>
                                      <h3 className="font-semibold">
                                        {exp.title}
                                      </h3>
                                      <p className="text-sm text-gray-600">
                                        {exp.institution}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {exp.type}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        {exp.startDate} -{" "}
                                        {exp.currentlyWorking
                                          ? "Present"
                                          : exp.endDate}
                                      </p>
                                      <p className="text-sm text-gray-600">
                                        {exp.location}
                                      </p>
                                      <div
                                        className="mt-2"
                                        dangerouslySetInnerHTML={{
                                          __html: exp.description,
                                        }}
                                      />
                                      <div className="flex gap-2 mt-2">
                                        {exp.tags.map((tag, index) => (
                                          <span
                                            key={index}
                                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                          >
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => {
                                      setEditingExperience(exp);
                                      setActiveModalTab("Add Work Experience");
                                    }}
                                    className="text-gray-500 hover:text-gray-700"
                                  >
                                    <Pencil className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeModalTab === "Add Work Experience" && (
                        <div>
                          {" "}
                          <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">
                              {editingExperience
                                ? "Edit Work Experience"
                                : "Add Work Experience"}
                            </h3>
                            <button
                              onClick={() =>
                                setActiveModalTab("Work Experience")
                              }
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          <WorkExperienceForm
                            experience={editingExperience}
                            onSave={handleSaveExperience} // Use the proper save handler
                            onCancel={() =>
                              setActiveModalTab("Work Experience")
                            }
                          />
                        </div>
                      )}
                      {activeModalTab === "Qualification" && (
                        <div>
                          {" "}
                          <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">
                              Qualification
                            </h3>
                            <button
                              onClick={() => setIsEditing(false)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          <div>
                            <div className="w-full flex justify-end p-4">
                              {" "}
                              <button
                                className="flex items-center gap-2 cursor-pointer bg-blue-500 text-white px-3 py-2 rounded-lg"
                                onClick={() =>
                                  setActiveModalTab("Add Qualification")
                                }
                              >
                                {" "}
                                <PlusCircle size={15} />
                                Add
                              </button>
                            </div>
                            <div>
                              {activeQualificationTab === "Edit" ? (
                                <QualificationForm
                                  qualification={editingQualification}
                                  onSave={handleSaveQualification}
                                  onCancel={() =>
                                    setActiveQualificationTab("Preview")
                                  }
                                />
                              ) : (
                                <QualificationsPreview
                                  qualifications={qualifications}
                                  onEdit={handleEditQualification}
                                  onDelete={handleDeleteQualification}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeModalTab === "Add Qualification" && (
                        <div>
                          {" "}
                          <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">
                              Qualification
                            </h3>
                            <button
                              onClick={() => setIsEditing(false)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          <AddQualification />
                        </div>
                      )}

                      {activeModalTab === "Certifications" && (
                        <div>
                          {" "}
                          <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">
                              Certification
                            </h3>
                            <button
                              onClick={() => setIsEditing(false)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          <CertificateList
                            certificates={certificates}
                            onSave={handleSaveCertificates}
                            onCancel={() => setIsEditingCertificates(false)}
                          />
                        </div>
                      )}
                      {activeModalTab === "Skills" && (
                        <div>
                          <div className="flex items-center flex-col justify-between p-4 border-b">
                            <div className="flex flex-row justify-between w-full">
                              <h3 className="text-lg font-semibold">Skills</h3>
                              <button
                                onClick={() => setIsEditing(false)}
                                className="text-gray-500 hover:text-gray-700"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                            <SkillsSpecialization
                              initialSkills={userSkills}
                              onSaveSkills={(updatedSkills) => {
                                setUserSkills(updatedSkills); // Update the state
                                setIsEditing(false); // Close the modal
                              }}
                              onCancel={() => setIsEditing(false)}
                            />
                          </div>
                        </div>
                      )}
                      {activeModalTab === "Awards & Achievements" && (
                        <div>
                          {" "}
                          <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">
                              Awards & Achievements
                            </h3>
                            <button
                              onClick={() => setIsEditing(false)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          {activeAchievementTab === "Edit" ? (
                            <AwardForm
                              achievement={editingAchievement}
                              onSave={handleSaveAchievement}
                              onCancel={handleAward}
                            />
                          ) : (
                            <AchievementPreview
                              achievements={achievements}
                              onEdit={handleEditAchievement}
                              onDelete={handleDeleteAchievement}
                              onAdd={() => setActiveAchievementTab("Edit")}
                            />
                          )}
                        </div>
                      )}
                      {activeModalTab === "Extra Information" && (
                        <div>
                          {" "}
                          <div className="flex items-center justify-between p-4 border-b">
                            <h3 className="text-lg font-semibold">
                              Extra Information
                            </h3>
                            <button
                              onClick={() => setIsEditing(false)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          <ExtraInformation
                            initialLanguages={userLanguages}
                            initialPublications={publications} // Pass your publications array
                            onSave={({ languages, publications }) => {
                              setUserLanguages(languages);
                              setPublications(publications); // Update parent state
                              setIsEditing(false);
                            }}
                            onCancel={() => setIsEditing(false)}
                          />
                        </div>
                      )}
                      {activeModalTab === "Work Experience preview" && (
                        <div>
                          <h1>Hello work experience preview</h1>
                        </div>
                      )}
                      {activeModalTab === ""}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Work Experience Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Work Experience
                </h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Work Experience")}
                >
                  <Pencil className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <WorkExperienceSection
                experiences={experiences}
                onEdit={(exp) => {
                  setEditingExperience(exp);
                  setActiveModalTab("Add Work Experience");
                }}
                onAddNew={() => {
                  setEditingExperience(null);
                  setActiveModalTab("Add Work Experience");
                }}
              />
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Education
                </h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Qualification")}
                >
                  <Pencil className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 border border-gray-300 rounded-lg"
                  >
                    <div className="bg-blue-200 w-10 h-10 flex justify-center items-center rounded-lg">
                      <AwardIcon className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">
                        {qualification.qualification}
                      </h3>
                      <p className="text-gray-500">{qualification.course}</p>
                      <p className="text-gray-500 text-sm">
                        {qualification.passingYear}
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
                        <li>{qualification.specialization}</li>
                        <li>{qualification.university}</li>
                        <li>{qualification.skill}</li>
                      </ul>
                    </div>
                    <div className="flex space-x-2"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Skills/Specialization Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Skills / Specialization
                </h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Skills")}
                >
                  <Pencil className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {userSkills.length > 0 ? (
                  userSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No skills added yet</p>
                )}
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Certificates
                </h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Certifications")}
                >
                  <Pencil className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-[100px] h-[60px] object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards and Achievements Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Awards & Achievements
                </h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Awards & Achievements")}
                >
                  <Pencil className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="space-y-4">
                {achievements.length > 0 ? (
                  achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-start space-x-4 p-4 rounded-lg shadow-sm p-4 bg-gray-50"
                    >
                      <div className="bg-blue-200 w-10 h-10 flex justify-center items-center rounded-lg">
                        <AwardIcon className="text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-gray-500 text-sm">
                          Issued by - {achievement.issuer}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {achievement.date}
                        </p>
                        <p className="mt-2 text-sm">
                          {achievement.description}
                        </p>
                        <ul className="list-disc px-6 mt-2 text-sm">
                          {achievement.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">
                    No achievements added yet.
                  </p>
                )}
              </div>
            </div>

            {/* Publications Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-lg font-semibold text-gray-800">
                  Publications
                </h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Extra Information")}
                >
                  <Pencil className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 rounded-lg shadow-sm p-4 bg-gray-50"
                  >
                    <BookOpen className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">{pub.title}</h3>
                      <p className="text-sm text-gray-600">{pub.journal}</p>
                      <p className="text-sm text-gray-500">{pub.date}</p>
                      <a
                        href={pub.link}
                        className="text-sm text-blue-500 hover:text-blue-600 inline-flex items-center mt-1"
                      >
                        View publication{" "}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Languages
                </h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Extra Information")}
                >
                  <Pencil className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {userLanguage.length > 0 ? (
                  userLanguage.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">
                    No languages added yet
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        {activeTab === "Social Activity" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Activity</h3>
            <p className="text-gray-700">No recent activity.</p>
          </div>
        )}
        {activeTab === "Applied Jobs" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Applied Jobs</h3>
            <p className="text-gray-700">No jobs applied yet.</p>
          </div>
        )}
        {activeTab === "Saved" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Saved Items</h3>
            <p className="text-gray-700">No saved items.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-gray-100 min-h-screen px-2 md:px-34 lg:px-44">
      {/* Header */}
      <header className="bg-white shadow-sm fixed inset-x-0 top-0 z-40 ">
        <div className="container mx-auto px-4 py-4 ml-25 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={mesdoLogo}
              alt="Mesdo Logo"
              className="h-8 w-auto" // Adjust height as needed
            />
            <span className="text-xl font-semibold text-gray-800">Mesdo</span>
          </div>
          <div className="flex items-center flex-grow mx-4 ml-44">
            <div className="relative w-full">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1890FF]"
                size={18}
              />
              <input
                className="w-full pl-12 px-4 py-2 border border-[#E4E5E8] text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-20"
                placeholder="Job title, skills, profile"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Bell className="text-gray-500 mr-4" />
            <img
              alt="User profile picture"
              className="w-10 h-10 rounded-full"
              src="https://picsum.photos/40"
              width="40"
              height="40"
            />
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <div className="w-1/5 bg-white fixed inset-y-0  z-30 p-4 overflow-y-auto mt-20 ml-[-60px]">
          {/* Switch Card */}
          <div className="mx-1 p-3 bg-gray-50 border rounded-lg shadow-sm flex items-center justify-between mb-5 border-[#FFFFFF]">
            <div className="flex items-center space-x-3">
              <img src={HospitalIcon}></img>
              <div>
                <h2 className="text-sm font-medium text-gray-800">Hospital</h2>
                <p className="text-[11px] text-gray-500 cursor-pointer hover:underline">
                  Switch to personal
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-5 h-5 bg-blue-100 text-blue-500 rounded-full">
              <span className="text-[11px]">▼</span>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Main Menu
            </h3>
            <ul className="space-y-2">
              <NavItem icon={<Settings size={18} />} text="Dashboard" />
              <NavItem
                icon={<Settings size={18} />}
                text="Profile"
                active={true}
              />
              <NavItem icon={<Settings size={18} />} text="Recruitment" />
              <NavItem icon={<Settings size={18} />} text="Feed" />
              <NavItem icon={<Settings size={18} />} text="Messages" />
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Others
            </h3>
            <ul className="space-y-2">
              <NavItem icon={<Settings size={18} />} text="Candidate Search" />
              <NavItem icon={<Settings size={18} />} text="Analytics" />
            </ul>
          </div>

          <div className="mb-5">
            <h3 className="text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Preferences
            </h3>
            <ul className="space-y-2">
              <NavItem icon={<Settings size={18} />} text="Help Center" />
              <NavItem icon={<Settings size={18} />} text="Settings" />
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-4/5 ml-[23%] mt-7 mr-7">
          {/* Profile Section (Full Width) */}
          <ProfileSection />

          {/* Tabs and Content (Standard Layout) */}
          <div className="flex gap-4">
            <div className="w-2/3  ">
              <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Right Sidebar */}
            <div className="w-1/3 py-6">
              <div className="bg-white rounded-md shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  About the Doctor
                </h2>
                <div className="space-y-4">
                  <ExperienceItem1 />
                  <ExperienceItem2 />
                </div>
              </div>
              <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  People you might know
                </h3>
                <ul className="space-y-4">
                  {people.map((person, index) => (
                    <li key={index} className="flex items-center">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          {person.name}
                        </h4>
                        <p className="text-xs text-gray-500">{person.role}</p>
                      </div>
                      <button className="ml-auto text-blue-500 text-sm font-medium flex items-center gap-1 hover:text-blue-600 transition">
                        <Plus size={14} />
                        Follow
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
