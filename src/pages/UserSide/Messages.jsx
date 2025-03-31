import { useState } from "react";
import TopNavigation from "../../components/messages/TopNavigation";
import Sidebar from "../../components/messages/Sidebar";
import MessageList from "../../components/messages/MessageList";
import ChatHeader from "../../components/messages/ChatHeader";
import MessageBubble from "../../components/messages/MessageBubble";
import MessageInput from "../../components/messages/MessageInput";
import { users } from "../../data/messages";
import ProfileModal from "../../components/messages/ProfileModal";

function Messages() {
  const [activeTab, setActiveTab] = useState("Personal");
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileUser, setProfileUser] = useState(null);

  //Mock Profile Data
  const [profileData] = useState({
    name: "Dr. Rajeev Bhatt",
    title: "Cardiologist",
    hospital: "City Medical Center",
    location: "New York, USA",
    phone: "+1 (555) 123-4567",
    email: "rajeev.bhatt@example.com",
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150",
    media: [
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
    ],
  });

  const handleSendMessage = (message, file) => {
    if (message.trim() === "" && !file) return;
    console.log("Message:", message);
    if (file) {
      console.log("File:", file.name);
    }
  };
  const handleProfileClick = (user) => {
    setProfileUser(user);
    setShowProfileModal(true);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNavigation />

      <div className="flex flex-1 overflow-hidden pt-16 mb-7 mr-20 ml-18">
        {" "}
        {/* pt-16 to account for the top navigation */}
        <Sidebar />
        <div className="flex flex-1 ml-[300px] mt-9 mb-5">
          {" "}
          {/* ml-[280px] to account for sidebar width */}
          <MessageList
            users={users}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
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
                {selectedUser.messages.map((message) => (
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
      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        profile={profileData}
      />
    </div>
  );
}

export default Messages;
