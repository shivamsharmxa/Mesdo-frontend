import { useState } from "react";
import TopNavigation from "../../components/messages/TopNavigation";
import Sidebar from "../../components/messages/Sidebar";
import MessageList from "../../components/messages/MessageList";
import ChatHeader from "../../components/messages/ChatHeader";
import MessageBubble from "../../components/messages/MessageBubble";
import MessageInput from "../../components/messages/MessageInput";
import { users } from "../../data/messages";
import ProfileModal from "../../components/messages/ProfileModal";
import NewGroupModal from "../../components/messages/NewGroupModal"; // Import the new modal
import GroupProfileModal from "../../components/messages/GroupProfileModal";

function Messages() {
  const [activeTab, setActiveTab] = useState("Personal");
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileUser, setProfileUser] = useState(null);
  const [showGroupModal, setShowGroupModal] = useState(false); // State for group modal
  const [groupName, setGroupName] = useState(""); // State for group name
  const [groupDescription, setGroupDescription] = useState(""); // State for group description
  const [groups, setGroups] = useState([]); // State to store created groups
  const [showGroupProfileModal, setShowGroupProfileModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Combine regular users and groups for display
  const allConversations = [...users, ...groups];

  const handleSendMessage = (message, file) => {
    if (message.trim() === "" && !file) return;
    console.log("Message:", message);
    if (file) {
      console.log("File:", file.name);
    }
  };

  const handleProfileClick = (user) => {
    if (user.isGroup) {
      setSelectedGroup(user);
      setShowGroupProfileModal(true);
    } else {
      setProfileUser(user);
      setShowProfileModal(true);
    }
  };

  const handleCreateGroup = (newGroup) => {
    const completeGroup = {
      ...newGroup,
      id: `group-${Date.now()}`,
      lastMessage: "Group created",
      time: "Just now",
      image: "/group-default.png",
      isGroup: true,
      messages: [],
      online: false,
    };

    setGroups([...groups, completeGroup]);
    // setSelectedUser(completeGroup); // Do not auto-select the new group after creation
    setActiveTab("Groups");
    setShowGroupModal(false);
    setGroupName("");
    setGroupDescription("");
  };
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNavigation />

      <div className="flex flex-1 overflow-hidden pt-16 mb-7 mr-20 ml-18">
        <Sidebar />
        <div className="flex flex-1 ml-[300px] mt-9 mb-5">
          <MessageList
            users={allConversations}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onCreateGroup={() => {
              setShowGroupModal(true); // ✅ Open modal
              setGroupName(""); // ✅ Reset state
              setGroupDescription(""); // ✅ Reset state
            }}
          />

          <div className="flex-1 flex flex-col bg-white border-l border-gray-200">
            <ChatHeader
              selectedUser={selectedUser}
              onProfileClick={() => handleProfileClick(selectedUser)}
            />

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex items-center justify-center">
                <div className="bg-blue-100 text-sm rounded-lg py-1 px-3">
                  Today, March 16
                </div>
              </div>

              <div className="space-y-4">
                {selectedUser.messages?.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    selectedUser={selectedUser}
                  />
                ))}
              </div>
            </div>

            <MessageInput onSend={handleSendMessage} />
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        profile={profileUser}
      />

      {/* Group Profile Modal */}
      <GroupProfileModal
        isOpen={showGroupProfileModal}
        onClose={() => setShowGroupProfileModal(false)}
        group={selectedGroup}
      />

      {/* New Group Modal */}
      <NewGroupModal
        isOpen={showGroupModal}
        onClose={() => {
          setShowGroupModal(false);
          setGroupName(""); // ✅ Reset state properly
          setGroupDescription("");
        }}
        onCreate={handleCreateGroup}
        groupName={groupName} // ✅ Ensure this is passed
        setGroupName={setGroupName} // ✅ Ensure this is passed
        description={groupDescription} // ✅ Ensure this is passed
        setDescription={setGroupDescription} // ✅ Ensure this is passed
      />
    </div>
  );
}

export default Messages;
