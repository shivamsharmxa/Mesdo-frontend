import React, { useState, useEffect } from "react";
import {
  Users,
  Link as LinkIcon,
  Trash2,
  X,
  SearchIcon,
  Search,
} from "lucide-react";
import GroupDetails from "./GroupDetails"; // import your GroupDetails component

const GroupProfileModal = ({ isOpen, onClose }) => {
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

  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAddMembersMode, setIsAddMembersMode] = useState(false);
  const [allUsers] = useState([
    {
      id: "1",
      name: "Dr. Rajeev Bhatt",
      role: "Dental Surgeon",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
    },
    {
      id: "2",
      name: "Dr. Riya Sharma",
      role: "Cardiologist",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "3",
      name: "Dr. Aman Verma",
      role: "Orthopedic",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: "4",
      name: "Dr. Priya Singh",
      role: "Neurologist",
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      id: "5",
      name: "Dr. Karan Patel",
      role: "Pediatrician",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
  ]);
  const [selectedToAdd, setSelectedToAdd] = useState([]);
  const [searchAddQuery, setSearchAddQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsAddMembersMode(false);
      setSelectedToAdd([]);
      setSearchQuery("");
      setSearchAddQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDeleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
    setSelectedMember(null);
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex shadow-lg overflow-hidden">
        {/* Left Section */}
        <GroupDetails />

        {/* Right Section */}
        <div className="flex-1 flex flex-col relative">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              Members ({members.length})
            </h2>
            <div className="flex items-center gap-4">
              {isDeleteMode ? (
                <button
                  onClick={() => setIsDeleteMode(false)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              ) : (
                <button
                  onClick={() => setIsDeleteMode(true)}
                  className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
                >
                  <Trash2 size={16} /> Remove
                </button>
              )}
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="px-6 pt-4">
            <div className="relative">
              <Search
                className="absolute  left-3 top-1/2 -translate-y-1/2 text-[#1890FF]"
                size={18}
              />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg border-[#E4E5E8] bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => setIsAddMembersMode(true)}
              className="w-full  text-black-600 font-sm rounded-lg py-2 flex items-center gap-3 px-4 font-medium"
            >
              <Users size={18} className="text-[#1890FF]" /> Add Members
            </button>
            <button className="w-full  text-black-600 rounded-lg py-2 flex items-center gap-3 px-4 font-medium">
              <LinkIcon size={18} className="text-[#1890FF]" /> Invite to Group
              via Link
            </button>
          </div>

          {/* Members List */}
          <div className="px-6 flex-1 overflow-y-auto space-y-4 pb-4">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between hover:bg-gray-50 rounded-lg px-2 py-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>

                {isDeleteMode && (
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
                {!isDeleteMode && member.isAdmin && (
                  <span className="text-xs text-gray-500 ml-2">Admin</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Are you sure you want to remove {selectedMember.name} from the
              group?
            </h2>
            <p className="text-gray-500 mb-8">
              They will not be receiving any further messages or information
              from this group anymore.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleDeleteMember(selectedMember.id)}
                className="flex-1 bg-red-500 text-white font-semibold rounded-lg py-3 hover:bg-red-600"
              >
                Remove
              </button>
              <button
                onClick={() => setSelectedMember(null)}
                className="flex-1 border border-gray-300 rounded-lg py-3 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddMembersMode && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <div className="flex items-center mb-4">
              <button
                onClick={() => setIsAddMembersMode(false)}
                className="mr-2"
              >
                <X size={20} />
              </button>
              <h2 className="text-lg font-semibold">New Group</h2>
            </div>
            <div className="relative mb-4">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1890FF]"
                size={18}
              />
              <input
                type="text"
                placeholder="Search"
                value={searchAddQuery}
                onChange={(e) => setSearchAddQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg border-[#E4E5E8] bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="w-full bg-[#1890FF] text-white font-medium rounded-lg py-2 flex items-center justify-center gap-2 mb-4 disabled:opacity-50"
              onClick={() => {
                setMembers([
                  ...members,
                  ...allUsers.filter(
                    (u) =>
                      selectedToAdd.includes(u.id) &&
                      !members.some((m) => m.id === u.id)
                  ),
                ]);
                setIsAddMembersMode(false);
                setSelectedToAdd([]);
              }}
              disabled={selectedToAdd.length === 0}
            >
              <Users size={18} /> Add {selectedToAdd.length} Member
              {selectedToAdd.length !== 1 ? "s" : ""}
            </button>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {allUsers
                .filter((u) =>
                  u.name.toLowerCase().includes(searchAddQuery.toLowerCase())
                )
                .map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {user.name}
                        </h3>
                        <p className="text-sm text-gray-500">{user.role}</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedToAdd.includes(user.id)}
                      onChange={() => {
                        setSelectedToAdd((selectedToAdd) =>
                          selectedToAdd.includes(user.id)
                            ? selectedToAdd.filter((id) => id !== user.id)
                            : [...selectedToAdd, user.id]
                        );
                      }}
                      className="w-5 h-5 accent-[#1890FF]"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupProfileModal;
