import { useState } from "react";
import mesdoLogo from "../../../assets/mesdo_logo.jpeg";
import HospitalIcon from "../../../assets/HospitalIcon.png";
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
  Link2,
  MapPin,
  ExternalLink,
} from "lucide-react";
import NavItem from "../../../components/profile/NavItem";
import SkillsSpecialization from "../../../components/profile/SkillsSpecialization";
import ProfileSection from "../../../components/profile/ProfileSection";
import WorkExperienceSection from "../../../Components/profile/WorkExperienceSection";
import WorkExperienceForm from "../../../components/profile/WorkExperienceForm";

const peopleatApollo = [
  {
    name: "Alena Baptista",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Mira Curtis",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Ashlynn Rosser",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Alfonso Siphron",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Jakob Dias",
    role: "Dental Surgeon | Apollo Hospitals",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const InfoItem = ({ label, value, isLink = false }) => (
  <div className="flex justify-between items-center">
    <span className="text-[14px] text-gray-600">{label}</span>
    {isLink ? (
      <a
        href={`https://${value}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] text-[#1890FF] hover:underline flex items-center"
      >
        {value}
        <ExternalLink className="w-3 h-3 ml-1" />
      </a>
    ) : (
      <span className="text-[14px] text-gray-900">{value}</span>
    )}
  </div>
);

const MoreInformationForm = ({ infoData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(infoData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Website
        </label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Organization Size
        </label>
        <input
          type="text"
          name="organizationSize"
          value={formData.organizationSize}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type
        </label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Founded
        </label>
        <input
          type="text"
          name="founded"
          value={formData.founded}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Industry
        </label>
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Socials
        </label>
        <input
          type="text"
          name="socials"
          value={formData.socials}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>
      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(formData)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

const AddressSection = ({ addresses, onEdit }) => {
  const mainBranch = addresses.find((addr) => addr.isMain) || addresses[0];
  const otherBranches = addresses.filter((addr) => !addr.isMain);

  const openGoogleMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-7">
      <div
        className="w-full h-48 bg-gray-200 cursor-pointer relative"
        onClick={() => openGoogleMaps(mainBranch.address)}
      >
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
            mainBranch.address
          )}`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Address ({addresses.length})
          </h2>
          <button
            onClick={onEdit}
            className="text-gray-400 hover:text-gray-600"
          >
            <Edit className="w-4 h-4" />
          </button>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-sm">Main Branch</h3>
          <div
            className="flex items-start mt-2 cursor-pointer hover:text-blue-500"
            onClick={() => openGoogleMaps(mainBranch.address)}
          >
            <MapPin className="text-gray-500 mt-1" />
            <p className="ml-2 text-gray-700 font-sm text-[14px]">
              {mainBranch.address}
            </p>
          </div>
        </div>
        {otherBranches.length > 0 && (
          <div className="mb-4">
            <h3 className="text-sm font-sm">Other Branches</h3>
            {otherBranches.map((branch, index) => (
              <div
                key={index}
                className="flex items-start mt-2 cursor-pointer hover:text-blue-500"
                onClick={() => openGoogleMaps(branch.address)}
              >
                <MapPin className="text-gray-500 mt-1" />
                <p className="ml-2 text-gray-700 text-[14px]">
                  {branch.address}
                </p>
              </div>
            ))}
          </div>
        )}
        <a className="text-blue-500 hover:underline flex items-center" href="#">
          See All
          <ChevronRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

const AddressForm = ({ addresses, onSave, onCancel }) => {
  const [formData, setFormData] = useState(addresses);

  const handleChange = (index, field, value) => {
    const newAddresses = [...formData];
    newAddresses[index][field] = value;
    setFormData(newAddresses);
  };

  const addNewAddress = () => {
    setFormData([
      ...formData,
      {
        address: "",
        isMain: false,
      },
    ]);
  };

  const removeAddress = (index) => {
    const newAddresses = formData.filter((_, i) => i !== index);
    setFormData(newAddresses);
  };

  const setAsMain = (index) => {
    const newAddresses = formData.map((addr, i) => ({
      ...addr,
      isMain: i === index,
    }));
    setFormData(newAddresses);
  };

  return (
    <div className="p-6 space-y-4">
      {formData.map((address, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">
              {address.isMain ? "Main Branch" : `Branch ${index + 1}`}
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setAsMain(index)}
                className={`text-xs px-2 py-1 rounded ${
                  address.isMain
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {address.isMain ? "Main" : "Set as Main"}
              </button>
              <button
                onClick={() => removeAddress(index)}
                className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded"
              >
                Remove
              </button>
            </div>
          </div>
          <textarea
            value={address.address}
            onChange={(e) => handleChange(index, "address", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            rows="3"
            placeholder="Enter full address"
          />
        </div>
      ))}

      <button
        onClick={addNewAddress}
        className="flex items-center gap-2 text-blue-500 text-sm mt-2"
      >
        <Plus className="w-4 h-4" />
        Add Another Address
      </button>

      <div className="mt-6 flex justify-end space-x-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(formData)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

const TabsSection = ({ activeTab, setActiveTab }) => {
  const tabs = ["Overview", "Jobs", "People", "Connection"];
  const [isEditing, setIsEditing] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState("About");
  const [aboutData, setAboutData] = useState({
    tagline: "A highly experienced and dedicated Cardiologist...",
    description: `Currently leading a specialized team at MediCare Hospital, 
    providing high-quality patient care and implementing advanced medical techniques. 
    Committed to continuous learning, mentorship, and contributing to the medical 
    community through research publications and healthcare initiatives.`,
  });
  const [moreInfo, setMoreInfo] = useState({
    website: "www.apollo.com",
    organizationSize: "1000-5000",
    type: "Public",
    founded: "1999",
    industry: "Hospital & Healthcare",
    socials: "Hospital & Healthcare",
  });
  const [addresses, setAddresses] = useState([
    {
      address: "Apollo Hospitals Hyderabad Hyderabad, Telangana 500033, IN",
      isMain: true,
    },
    {
      address: "Apollo Hospitals Mumbai Mumbai, Maharashtra 400001, IN",
      isMain: false,
    },
  ]);
  const [editData, setEditData] = useState({ ...aboutData });
  const [editingExperience, setEditingExperience] = useState(null);
  const [userSkills, setUserSkills] = useState([
    "CPR Certified",
    "Patient Care",
    "EMT",
  ]);
  const [experiences, setExperiences] = useState([
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
  ]);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setAboutData(editData);
    setIsEditing(false);
  };

  const handleSaveExperience = (savedExperience) => {
    if (editingExperience) {
      setExperiences(
        experiences.map((exp) =>
          exp.id === savedExperience.id ? savedExperience : exp
        )
      );
    } else {
      setExperiences([
        ...experiences,
        {
          ...savedExperience,
          id: Date.now(),
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
    setActiveModalTab("Jobs");
  };

  //   const handleSaveMoreInfo = (updatedInfo) => {
  //     setMoreInfo(updatedInfo);
  //     setIsEditing(false);
  //   };

  //   const handleSaveAddresses = (updatedAddresses) => {
  //     setAddresses(updatedAddresses);
  //     setIsEditing(false);
  //   };

  const openModal = (tab) => {
    setIsEditing(true);
    setActiveModalTab(tab);
  };

  const ModalTabs = ["About", "Jobs", "Specialities", ,];

  return (
    <div className="mt-6">
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
                    setEditData({ ...aboutData });
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

            {/* Specialities Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Specialities
                </h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Specialities")}
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
                  <p className="text-gray-500 text-sm">
                    No specialities added yet
                  </p>
                )}
              </div>
            </div>

            {/* Jobs Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Jobs</h2>
                <button
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  onClick={() => openModal("Jobs")}
                >
                  <Pencil className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <WorkExperienceSection
                experiences={experiences}
                onEdit={(exp) => {
                  setEditingExperience(exp);
                  setActiveModalTab("Add Job");
                }}
                onAddNew={() => {
                  setEditingExperience(null);
                  setActiveModalTab("Add Job");
                }}
              />
            </div>

            {/* People at Apollo Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[16px] font-semibold text-gray-900">
                  People at Apollo
                </h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <Link2 className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-6">
                {peopleatApollo.map((person, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-[14px] font-medium text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-[14px] text-gray-600">
                          {person.role}
                        </p>
                      </div>
                    </div>
                    <button className="text-[#1890FF] text-[14px] font-medium hover:underline">
                      + Follow
                    </button>
                  </div>
                ))}
                <button className="w-full text-center text-[14px] text-[#1890FF] hover:underline flex items-center justify-center">
                  Show More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Jobs" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Jobs</h3>
            <p className="text-gray-700">No jobs posted yet.</p>
          </div>
        )}
        {activeTab === "People" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">People</h3>
            <p className="text-gray-700">No people information available.</p>
          </div>
        )}
        {activeTab === "Connection" && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Connections</h3>
            <p className="text-gray-700">No connections yet.</p>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/50 bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col md:flex-row gap-6 px-3 py-4">
              {/* Sidebar Menu */}
              <div className="w-full md:w-1/4 lg:w-1/5">
                <h3 className="text-lg font-semibold px-4 py-3 text-gray-800">
                  Overview
                </h3>
                <ul className="">
                  {ModalTabs.map((item, index) => (
                    <li key={index} className="w-full">
                      <button
                        className={`w-full h-14 text-left px-4 py-3 text-sm font-medium border-[1px] border-gray-200 transition-all duration-300
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

              {/* Edit Content */}
              <div className="w-full md:w-3/4 lg:w-4/5 bg-white">
                {activeModalTab === "About" && (
                  <div>
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

                {activeModalTab === "Specialities" && (
                  <div>
                    <div className="flex items-center flex-col justify-between p-4 border-b">
                      <div className="flex flex-row justify-between w-full">
                        <h3 className="text-lg font-semibold">Specialities</h3>
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
                          setUserSkills(updatedSkills);
                          setIsEditing(false);
                        }}
                        onCancel={() => setIsEditing(false)}
                      />
                    </div>
                  </div>
                )}

                {activeModalTab === "Jobs" && (
                  <div>
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="text-lg font-semibold">Jobs</h3>
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
                          setEditingExperience(null);
                          setActiveModalTab("Add Job");
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
                                <h3 className="font-semibold">{exp.title}</h3>
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
                                setActiveModalTab("Add Job");
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

                {activeModalTab === "Add Job" && (
                  <div>
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="text-lg font-semibold">
                        {editingExperience ? "Edit Job" : "Add Job"}
                      </h3>
                      <button
                        onClick={() => setActiveModalTab("Jobs")}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <WorkExperienceForm
                      experience={editingExperience}
                      onSave={handleSaveExperience}
                      onCancel={() => setActiveModalTab("Jobs")}
                    />
                  </div>
                )}

                {/* {activeModalTab === "More Information" && (
                  <div>
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="text-lg font-semibold">
                        More Information
                      </h3>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <MoreInformationForm
                      infoData={moreInfo}
                      onSave={handleSaveMoreInfo}
                      onCancel={() => setIsEditing(false)}
                    />
                  </div>
                )}

                {activeModalTab === "Addresses" && (
                  <div>
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="text-lg font-semibold">Addresses</h3>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <AddressForm
                      addresses={addresses}
                      onSave={handleSaveAddresses}
                      onCancel={() => setIsEditing(false)}
                    />
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfileRecruiter = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [moreInfo, setMoreInfo] = useState({
    website: "www.apollo.com",
    organizationSize: "1000-5000",
    type: "Public",
    founded: "1999",
    industry: "Hospital & Healthcare",
    socials: "Hospital & Healthcare",
  });
  const [addresses, setAddresses] = useState([
    {
      address: "Apollo Hospitals Hyderabad Hyderabad, Telangana 500033, IN",
      isMain: true,
    },
    {
      address: "Apollo Hospitals Mumbai Mumbai, Maharashtra 400001, IN",
      isMain: false,
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState("");

  const handleSaveMoreInfo = (updatedInfo) => {
    setMoreInfo(updatedInfo);
    setIsEditing(false);
  };

  const handleSaveAddresses = (updatedAddresses) => {
    setAddresses(updatedAddresses);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-2 md:px-34 lg:px-44">
      {/* Header */}
      <header className="bg-white shadow-sm fixed inset-x-0 top-0 z-40 ">
        <div className="container mx-auto px-4 py-4 ml-25 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={mesdoLogo} alt="Mesdo Logo" className="h-8 w-auto" />
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
        <div className="w-1/5 bg-white fixed inset-y-0 z-30 p-4 overflow-y-auto mt-20 ml-[-60px]">
          {/* Switch Card */}
          <div className="mx-1 p-3 bg-gray-50 border rounded-lg shadow-sm flex items-center justify-between mb-5 border-[#FFFFFF]">
            <div className="flex items-center space-x-3">
              <img src={HospitalIcon} alt="Hospital Icon"></img>
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
          {/* Profile Section */}
          <ProfileSection />

          {/* Tabs and Content */}
          <div className="flex gap-4">
            <div className="w-2/3">
              <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Right Sidebar */}
            <div className="w-1/3 py-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-[16px] font-semibold text-gray-900">
                    More Information
                  </h2>
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setActiveModalTab("More Information");
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  <InfoItem label="Website" value={moreInfo.website} isLink />
                  <InfoItem
                    label="Organization Size"
                    value={moreInfo.organizationSize}
                  />
                  <InfoItem label="Type" value={moreInfo.type} />
                  <InfoItem label="Founded" value={moreInfo.founded} />
                  <InfoItem label="Industry" value={moreInfo.industry} />
                  <InfoItem label="Socials" value={moreInfo.socials} />
                </div>
              </div>

              <AddressSection
                addresses={addresses}
                onEdit={() => {
                  setIsEditing(true);
                  setActiveModalTab("Addresses");
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/50 bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col md:flex-row gap-6 px-3 py-4">
              {/* Sidebar Menu */}
              <div className="w-full md:w-1/4 lg:w-1/5">
                <h3 className="text-lg font-semibold px-4 py-3 text-gray-800">
                  Overview
                </h3>
                <ul className="">
                  <li className="w-full">
                    <button
                      className={`w-full h-14 text-left px-4 py-3 text-sm font-medium border-[1px] border-gray-200 transition-all duration-300
                        ${
                          activeModalTab === "More Information"
                            ? "bg-[#1890ff] text-white"
                            : "text-gray-700 hover:bg-[#1890ff] hover:text-white"
                        }`}
                      onClick={() => setActiveModalTab("More Information")}
                    >
                      More Information
                    </button>
                  </li>
                  <li className="w-full">
                    <button
                      className={`w-full h-14 text-left px-4 py-3 text-sm font-medium border-[1px] border-gray-200 transition-all duration-300
                        ${
                          activeModalTab === "Addresses"
                            ? "bg-[#1890ff] text-white"
                            : "text-gray-700 hover:bg-[#1890ff] hover:text-white"
                        }`}
                      onClick={() => setActiveModalTab("Addresses")}
                    >
                      Addresses
                    </button>
                  </li>
                </ul>
              </div>

              {/* Edit Content */}
              <div className="w-full md:w-3/4 lg:w-4/5 bg-white">
                {activeModalTab === "More Information" && (
                  <div>
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="text-lg font-semibold">
                        More Information
                      </h3>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <MoreInformationForm
                      infoData={moreInfo}
                      onSave={handleSaveMoreInfo}
                      onCancel={() => setIsEditing(false)}
                    />
                  </div>
                )}

                {activeModalTab === "Addresses" && (
                  <div>
                    <div className="flex items-center justify-between p-4 border-b">
                      <h3 className="text-lg font-semibold">Addresses</h3>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <AddressForm
                      addresses={addresses}
                      onSave={handleSaveAddresses}
                      onCancel={() => setIsEditing(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileRecruiter;
