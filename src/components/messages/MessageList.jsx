import UserListItem from "./UserListItem";
import { Search, ArrowLeft } from "lucide-react";
import CreateMessage from "../../assets/CreateMessage.png";
import CreateGroupModal from "./CreateGroupModal";
import { useState } from "react";

const MessageList = ({
  users,
  selectedUser,
  setSelectedUser,
  activeTab,
  setActiveTab,
  onCreateGroup,
}) => {
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);

  // Filter users based on active tab
  const filteredUsers = users.filter((user) => {
    switch (activeTab) {
      case "Jobs":
        return user.category === "job"; // Assuming users have a category field
      case "Groups":
        return user.isGroup; // Assuming groups have isGroup flag
      case "Personal":
      default:
        return !user.isGroup && user.category !== "job";
    }
  });

  return (
    <div className="w-[360px] bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold mb-4">Messages</h1>

        <div className="flex items-center gap-2 mb-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1890FF] w-5 h-5" />
            <input
              type="text"
              placeholder={`Search ${activeTab.toLowerCase()}...`}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none"
            />
          </div>

          {/* Show create button only for Groups tab */}

          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setShowCreateGroupModal(true)} // Opens CreateGroupModal
            aria-label="Create new chat or group"
          >
            <img src={CreateMessage} alt="Create" className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          {["Personal", "Jobs", "Groups"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center mb-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
          <span className="ml-2 text-gray-600">{activeTab} Messages</span>
        </div>
      </div>

      {/* User List - shows different content based on active tab */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "Groups" && filteredUsers.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p className="mb-2">No groups yet</p>
            <button
              onClick={onCreateGroup}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Create new group"
            >
              <img src={CreateMessage} alt="Create group" className="w-5 h-5" />
            </button>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            No {activeTab.toLowerCase()} messages
          </div>
        ) : (
          filteredUsers.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              selectedUser={selectedUser}
              onClick={() => setSelectedUser(user)}
              isGroup={activeTab === "Groups"} // Pass group flag to list item
            />
          ))
        )}
      </div>

      {/* Group Creation Modal - only relevant for Groups tab */}
      <CreateGroupModal
        isOpen={showCreateGroupModal}
        onClose={() => setShowCreateGroupModal(false)}
        users={users}
      />
    </div>
  );
};

export default MessageList;
