import { useState, useEffect } from "react";
import { ArrowLeft, Link as LinkIcon } from "lucide-react";
import PropTypes from "prop-types";

const dummyUsers = [
  {
    id: 1,
    name: "Dr. Rajeev Bhatt",
    role: "Dental Surgeon",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Riya Sharma",
    role: "Cardiologist",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Dr. Aman Verma",
    role: "Orthopedic",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Dr. Priya Singh",
    role: "Neurologist",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    id: 5,
    name: "Dr. Karan Patel",
    role: "Pediatrician",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const NewGroupModal = ({
  isOpen,
  onClose,
  onCreate,
  groupName: externalGroupName = "",
  setGroupName: externalSetGroupName = () => {},
  description: externalDescription = "",
  setDescription: externalSetDescription = () => {},
  users = dummyUsers,
}) => {
  // Internal state to ensure we always have state even if props don't update
  const [internalGroupName, setInternalGroupName] = useState(externalGroupName);
  const [internalDescription, setInternalDescription] =
    useState(externalDescription);
  const [showSuccess, setShowSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);

  // Use either the prop or internal state
  const groupName = externalGroupName || internalGroupName;
  const description = externalDescription || internalDescription;

  // Update both internal state and external state if provided
  const handleGroupNameChange = (e) => {
    const value = e.target.value;
    setInternalGroupName(value);
    externalSetGroupName(value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setInternalDescription(value);
    externalSetDescription(value);
  };

  // Only reset state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedMembers([]);
      setSearch("");
      setInternalGroupName(externalGroupName);
      setInternalDescription(externalDescription);
      setShowSuccess(false);
      setIsCreatingGroup(false);
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleMember = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedMembers.length >= 2) setStep(2);
  };

  const handleCreate = () => {
    // Prevent multiple clicks
    if (isCreatingGroup) return;

    // Validate group name
    if (!groupName?.trim()) return;

    setIsCreatingGroup(true);

    const newGroup = {
      id: `group-${Date.now()}`,
      name: groupName.trim(),
      description: (description || "").trim(),
      lastMessage: "Group created",
      time: "Just now",
      image: "/group-default.png",
      isGroup: true,
      members: selectedMembers,
    };

    // Call the onCreate function from props
    onCreate(newGroup);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setIsCreatingGroup(false);
      onClose();
    }, 1200);
  };

  // Success message view
  if (showSuccess) {
    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg px-8 py-6 text-center">
          <h3 className="text-lg font-semibold text-green-600 mb-2">
            Group has been created!
          </h3>
        </div>
      </div>
    );
  }

  // Step 1: Select Members
  if (step === 1) {
    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl w-full max-w-md">
          <div className="p-4 flex items-center gap-4 border-b">
            <button
              onClick={handleClose}
              className="hover:bg-gray-100 p-1 rounded-full"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-semibold">New Group</h2>
          </div>
          <div className="p-6">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg border-[#E4E5E8] bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="max-h-60 overflow-y-auto space-y-2 mb-4">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between hover:bg-gray-50 rounded-lg px-2 py-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar || user.image}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.role}</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(user.id)}
                    onChange={() => handleToggleMember(user.id)}
                    className="w-5 h-5 accent-[#1890FF]"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleContinue}
              disabled={selectedMembers.length < 2}
              className={`w-full font-medium rounded-lg py-2 flex items-center gap-3 px-4 justify-center text-white ${
                selectedMembers.length >= 2
                  ? "bg-[#1890FF] hover:bg-blue-600"
                  : "bg-blue-200 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Group Details
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md">
        {/* Header */}
        <div className="p-4 flex items-center gap-4">
          <button
            onClick={() => setStep(1)}
            className="hover:bg-gray-100 p-1 rounded-full"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-semibold">New Group</h2>
        </div>
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Group Icon */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <LinkIcon className="text-blue-500" size={24} />
            </div>
            <span className="text-gray-500">
              Add Group Icon <span className="text-gray-400">(Optional)</span>
            </span>
          </div>
          {/* Group Name */}
          <div className="space-y-2">
            <label className="block font-medium">Group Name</label>
            <input
              type="text"
              placeholder="Group name"
              value={groupName}
              onChange={handleGroupNameChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          {/* Group Description */}
          <div className="space-y-2">
            <label className="block font-medium">Group Description</label>
            <textarea
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 h-32 resize-none"
            />
          </div>
        </div>
        {/* Footer */}
        <div className="p-4 flex gap-3">
          <button
            onClick={() => setStep(1)}
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={handleCreate}
            disabled={!groupName?.trim() || isCreatingGroup}
            className={`flex-1 px-4 py-2 rounded-lg ${
              groupName?.trim() && !isCreatingGroup
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isCreatingGroup ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

NewGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  groupName: PropTypes.string,
  setGroupName: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  users: PropTypes.array,
};

export default NewGroupModal;
