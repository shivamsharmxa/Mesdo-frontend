import { useState } from "react";
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
} from "lucide-react";

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

function WorkExperienceSection() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Dental Surgeon",
      type: "Full-Time",
      institution: "All India Institute of Medical Science (AIIMS)",
      location: "Delhi, India",
      date: "Mar, 23 - Apr 25",
      description: [
        "Lorem ipsum dolor sit amet consectetur. Vitae egestas sollicitudin luctus velit eu nulla non.",
        "Ipsum blandit neque malesuada phasellus elit cursus. Enim dignissim aliquam a fermentum vivamus est non eleifend ac.",
      ],
      tags: ["Lorem ipsum", "Lorem ipsum"],
    },
    {
      id: 2,
      title: "Dental Surgeon",
      type: "Full-Time",
      institution: "All India Institute of Medical Science (AIIMS)",
      location: "Delhi, India",
      date: "Mar, 23 - Apr 25",
      description: [
        "Lorem ipsum dolor sit amet consectetur. Vitae egestas sollicitudin luctus velit eu nulla non.",
        "Ipsum blandit neque malesuada phasellus elit cursus. Enim dignissim aliquam a fermentum vivamus est non eleifend ac.",
      ],
      tags: ["Lorem ipsum", "Lorem ipsum"],
    },
  ]);

  const [editingExperience, setEditingExperience] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const [newTag, setNewTag] = useState("");

  const handleEdit = (experience) => {
    setEditingExperience({ ...experience });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingExperience) {
      setExperiences(
        experiences.map((exp) =>
          exp.id === editingExperience.id ? editingExperience : exp
        )
      );
      setIsEditing(false);
      setEditingExperience(null);
    }
  };
  const handleAddDescription = () => {
    if (newDescription.trim()) {
      setEditingExperience({
        ...editingExperience,
        description: [...editingExperience.description, newDescription.trim()],
      });
      setNewDescription("");
    }
  };

  const handleRemoveDescription = (index) => {
    setEditingExperience({
      ...editingExperience,
      description: editingExperience.description.filter((_, i) => i !== index),
    });
  };
  const handleAddTag = () => {
    if (newTag.trim() && editingExperience) {
      setEditingExperience({
        ...editingExperience,
        tags: [...(editingExperience.tags || []), newTag.trim()],
      });
      setNewTag("");
    }
  };

  const handleRemoveTag = (index) => {
    if (editingExperience) {
      setEditingExperience({
        ...editingExperience,
        tags: editingExperience.tags.filter((_, i) => i !== index),
      });
    }
  };
  const EditorButton = ({ icon: Icon, onClick }) => (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded transition-colors"
    >
      <Icon className="w-4 h-4 text-gray-600" />
    </button>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Work Experience ({experiences.length})
        </h2>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Pencil className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {isEditing && (
        <div className="absolute inset-0 z-10 bg-white p-6 rounded-lg shadow-xl border border-gray-200">
          {/* Blurred Background */}

          {/* Edit Modal */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Edit Work Experience</h3>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={editingExperience.title}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Employment Type
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={editingExperience.type}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        type: e.target.value,
                      })
                    }
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institution
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  value={editingExperience.institution}
                  onChange={(e) =>
                    setEditingExperience({
                      ...editingExperience,
                      institution: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={editingExperience.location}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        location: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date Range
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={editingExperience.date}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        date: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <div className="space-y-2 mb-3">
                  {editingExperience.description.map((desc, index) => (
                    <div key={index} className="flex items-center">
                      <span className="flex-1 px-3 py-2 bg-gray-50 rounded text-sm">
                        {desc}
                      </span>
                      <button
                        onClick={() => handleRemoveDescription(index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Add new description point"
                  />
                  <button
                    onClick={handleAddDescription}
                    className="px-3 py-2 bg-blue-500 text-white rounded-md text-sm"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {editingExperience.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(index)}
                        className="ml-1 text-gray-500 hover:text-red-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add new tag"
                  />
                  <button
                    onClick={handleAddTag}
                    className="px-3 py-2 bg-blue-500 text-white rounded-md text-sm"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 p-4 border-t">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <div>
                  <h3 className="font-semibold">{experience.title}</h3>
                  <p className="text-sm text-gray-600">
                    {experience.institution}
                  </p>
                  <p className="text-sm text-gray-500">{experience.date}</p>
                  <div className="mt-2">
                    {experience.description.map((desc, index) => (
                      <p key={index} className="text-sm text-gray-700 mb-1">
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {experience.tags.map((tag, index) => (
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
                onClick={() => handleEdit(experience)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function ExperienceItem() {
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

function EducationItem({ title, institute, date, description }) {
  return (
    <div className="flex items-start space-x-3">
      <GraduationCap className="text-blue-500 w-5 h-5 mt-1" />
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{institute}</p>
        <p className="text-xs text-gray-500">{date}</p>
        <p className="text-sm text-gray-700 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

const ProfileSection = () => {
  return (
    <div className="w-full">
      {/* Cover Photo */}
      <div className="bg-blue-500 h-48 rounded-t-lg relative">
        <img
          src="https://picsum.photos/1200/300"
          alt="Cover Photo"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Profile Info */}
      <div className="bg-white p-6 rounded-b-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mr-6 -mt-2 border-4 border-white"
              src="https://picsum.photos/100"
              width="100"
              height="100"
            />
            <div>
              <h2 className="text-2xl font-semibold">Dr. Rahul Sharma</h2>
              <p className="text-gray-600 text-sm">
                Heart Specialist at Medico
              </p>
            </div>
          </div>
          <div className="flex mt-4 items-center">
            <button className="bg-gray-200 p-2 rounded mr-2 hover:bg-gray-300 transition duration-300">
              <MoreHorizontal className="text-gray-700 w-5 h-5" />
            </button>
            <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded flex mr-2 hover:bg-blue-600 transition duration-300">
              <span className="w-4 h-4 mr-1">+</span> Follow
            </button>
            <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded flex items-center mr-2 hover:bg-gray-300 transition duration-300">
              <MessageCircle className="w-4 h-4 mr-1" /> Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabsSection = ({ activeTab, setActiveTab }) => {
  const tabs = ["Overview", "Social Activity", "Applied Jobs", "Saved"];

  const skills = [
    "Laser Surgery",
    "Dental Implants",
    "Orthodontics",
    "Root Canal",
    "Cosmetic Dentistry",
  ];

  const certificates = [
    {
      id: 1,
      title: "Certificate 1",
      issuer: "Dental Association",
      date: "2023",
      image: "https://picsum.photos/100/60",
    },
    {
      id: 2,
      title: "Certificate 2",
      issuer: "Medical Board",
      date: "2022",
      image: "https://picsum.photos/100/60",
    },
  ];

  const awards = [
    {
      title: "Best Dental Surgeon",
      issuer: "Medical Excellence Awards",
      date: "2023",
      description:
        "Recognized for outstanding contribution in dental surgery and patient care",
    },
    {
      title: "Research Excellence",
      issuer: "Dental Research Institute",
      date: "2022",
      description: "Award for innovative research in dental implant techniques",
    },
  ];

  const publications = [
    {
      title: "Advanced Techniques in Dental Surgery",
      journal: "Journal of Dental Medicine",
      date: "2023",
      link: "#",
    },
    {
      title: "Innovation in Dental Implants",
      journal: "International Dental Research",
      date: "2022",
      link: "#",
    },
  ];

  const languages = [
    { language: "English", proficiency: "Native" },
    { language: "Hindi", proficiency: "Professional" },
    { language: "Spanish", proficiency: "Intermediate" },
  ];

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
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                About
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                A highly experienced and dedicated Cardiologist with over 10
                years of expertise in diagnosing and treating complex heart
                conditions. Passionate about advancing patient care through
                innovative treatments and cutting-edge research in
                cardiovascular health.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                Currently leading a specialized team at MediCare Hospital,
                providing high-quality patient care and implementing advanced
                medical techniques. Committed to continuous learning,
                mentorship, and contributing to the medical community through
                research publications and healthcare initiatives.
              </p>
            </div>

            {/* Work Experience Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <WorkExperienceSection />
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Education
              </h2>
              <div className="space-y-4">
                <EducationItem
                  title="MBBS"
                  institute="XYZ University"
                  date="2010 - 2015"
                  description="Lorem ipsum dolor sit amet consectetur. Quis auctor eu nisl amet consectetur et. Nisl sit pellentesque sit in euismod. Sit amet risus sit lorem."
                />
                <EducationItem
                  title="MD"
                  institute="ABC University"
                  date="2015 - 2018"
                  description="Lorem ipsum dolor sit amet consectetur. Quis auctor eu nisl amet consectetur et. Nisl sit pellentesque sit in euismod. Sit amet risus sit lorem."
                />
              </div>
            </div>
            {/* Skills/Specialization Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Skills / Specialization
                </h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Certificates
                </h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <Pencil className="w-4 h-4" />
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
                <button className="text-gray-400 hover:text-gray-600">
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {award.title}
                      </h3>
                      <p className="text-sm text-gray-600">{award.issuer}</p>
                      <p className="text-sm text-gray-500">{award.date}</p>
                      <p className="text-sm text-gray-700 mt-1">
                        {award.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications Section */}
            <div className="bg-white rounded-md shadow-sm p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Publications
                </h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="flex items-start space-x-3">
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
                <button className="text-gray-400 hover:text-gray-600">
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">
                          {lang.language}
                        </span>
                        <span className="text-sm text-gray-600">
                          {lang.proficiency}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm fixed inset-x-0 top-0 z-40 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Mesdo</span>
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
        <div className="w-1/5 bg-white fixed inset-y-0 left-0 z-30 p-4 overflow-y-auto mt-20 ml-7">
          {/* Switch Card */}
          <div className="mx-1 p-3 bg-gray-50 border rounded-lg shadow-sm flex items-center justify-between mb-5 border-[#FFFFFF]">
            <div className="flex items-center space-x-3">
              <Settings className="h-8 w-8 text-blue-500" />
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
          <div className="flex">
            <div className="w-2/3 p-6">
              <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Right Sidebar */}
            <div className="w-1/3 p-6">
              <div className="bg-white rounded-md shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  About the Doctor
                </h2>
                <div className="space-y-4">
                  <ExperienceItem />
                  <ExperienceItem />
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

const NavItem = ({ icon, text, active = false }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-all
            ${
              active
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
      >
        {icon}
        <span>{text}</span>
      </a>
    </li>
  );
};

export default Profile;
