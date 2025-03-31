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
}) => {
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);

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
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none"
            />
          </div>

          {/* Create Message Button */}
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setShowCreateGroupModal(true)} // Connect to state
            aria-label="Create new message"
          >
            <img src={CreateMessage} alt="Create message" className="w-5 h-5" />
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
          <span className="ml-2 text-gray-600">Messages</span>
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <UserListItem
            key={user.id}
            user={user}
            selectedUser={selectedUser}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </div>

      {/* Modal - moved outside all other containers */}
      <CreateGroupModal
        isOpen={showCreateGroupModal}
        onClose={() => setShowCreateGroupModal(false)}
        users={users}
      />
    </div>
  );
};

export default MessageList;
