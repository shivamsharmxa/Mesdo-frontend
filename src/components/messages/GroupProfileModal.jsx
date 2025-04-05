import React, { useState } from "react";
import {
  Pencil,
  LogOut,
  Link as LinkIcon,
  Users,
  X,
  Search,
  Trash2,
} from "lucide-react";

const GroupProfileModal = ({ isOpen, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("HealthCare");
  const [description, setDescription] = useState(
    "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Ba"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState([
    {
      id: "1",
      name: "Dr. Rajeev Bhatt",
      role: "Dental Surgeon",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
      isAdmin: true,
    },
    {
      id: "2",
      name: "Dr. Riya Sharma",
      role: "Cardiologist",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    },
  ]);

  if (!isOpen) return null;

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleRemoveMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleAddMember = () => {
    const newMember = {
      id: Date.now().toString(),
      name: "New Member",
      role: "General Physician",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex shadow-lg overflow-hidden">
        {/* Left Section - Group Details */}
        <div className="w-[320px] p-6 border-r border-gray-200 flex flex-col">
          <div className="relative mb-6">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop"
              alt={name}
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />
          </div>

          {isEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg h-24"
              />
              <button
                onClick={handleSave}
                className="w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-gray-600"
                >
                  <Pencil size={16} />
                </button>
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          )}

          <div className="mt-6">
            <span className="text-gray-600 text-sm">Group Link:</span>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 text-sm block"
            >
              https://groupinvite.com
            </a>
          </div>
        </div>

        {/* Right Section - Members List */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Members ({members.length})
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 mb-4 space-y-4">
            <button
              onClick={handleAddMember}
              className="w-full bg-blue-100 text-blue-600 rounded-lg py-3 flex items-center gap-3 px-4"
            >
              <Users size={20} /> Add Members
            </button>
            <button className="w-full bg-blue-100 text-blue-600 rounded-lg py-3 flex items-center gap-3 px-4">
              <LinkIcon size={20} /> Invite to Group via Link
            </button>
          </div>

          <div className="px-6 flex-1 overflow-y-auto">
            <div className="space-y-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveMember(member.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupProfileModal;
