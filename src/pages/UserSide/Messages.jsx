import { useState, useRef } from "react";
import {
  Search,
  MoreVertical,
  ArrowLeft,
  Paperclip,
  Clock,
  Send,
  Bell,
  Settings,
  Smile,
} from "lucide-react";
import EmojiPicker from "emoji-picker-react";

const users = [
  {
    id: 1,
    name: "Dr. Rajeev Bhatt",
    lastMessage: "Hello guys, we have discussed......",
    time: "Today",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150",
    online: true,
    messages: [
      {
        id: 1,
        text: "Hello guys, we have discussed about post-corona vacation plan and our decision is to go to Bali. We will have a very big party after this corona ends! These are some images about our destination",
        time: "08:35 AM",
        sender: "Dr. Rajeev Bhatt",
        type: "received",
      },
      {
        id: 2,
        text: "That sounds amazing! I can't wait for the trip. The beaches in Bali are beautiful.",
        time: "08:35 AM",
        sender: "You",
        type: "sent",
      },
      {
        id: 3,
        text: "We should start planning the activities we want to do there.",
        time: "08:36 AM",
        sender: "Dr. Rajeev Bhatt",
        type: "received",
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Sarah Wilson",
    lastMessage: "Let's discuss the patient's treatment...",
    time: "Yesterday",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150",
    online: true,
    messages: [
      {
        id: 1,
        text: "Let's discuss the patient's treatment plan for the upcoming surgery.",
        time: "14:20 PM",
        sender: "Dr. Sarah Wilson",
        type: "received",
      },
      {
        id: 2,
        text: "I've reviewed the case. We should schedule a meeting with the team.",
        time: "14:25 PM",
        sender: "You",
        type: "sent",
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    lastMessage: "The conference details are...",
    time: "2 days ago",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150",
    online: false,
    messages: [
      {
        id: 1,
        text: "The medical conference is scheduled for next month. Will you be attending?",
        time: "09:15 AM",
        sender: "Dr. Michael Chen",
        type: "received",
      },
      {
        id: 2,
        text: "Yes, I've already registered. Looking forward to your presentation.",
        time: "09:20 AM",
        sender: "You",
        type: "sent",
      },
    ],
  },
];

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

function Messages() {
  const [inputMessage, setInputMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState("Personal");
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const fileInputRef = useRef(null);
  const emojiPickerRef = useRef(null);

  // Handle emoji selection
  const onEmojiClick = (emojiData) => {
    setInputMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle send message
  const handleSendMessage = () => {
    if (inputMessage.trim() === "" && !selectedFile) return;

    // In a real app, you would send this to your backend
    console.log("Message:", inputMessage);
    if (selectedFile) {
      console.log("File:", selectedFile.name);
      // You would upload the file here
    }

    // Clear inputs
    setInputMessage("");
    setSelectedFile(null);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="fixed top-2 left-0 right-0 h-16 bg-white border-b border-gray-200 flex justify-between items-center px-4 z-10">
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
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150"
            width="40"
            height="40"
          />
        </div>
      </div>

      {/* Left Sidebar */}
      <div className="w-70 ml-6  bg-white fixed inset-y-0 left-0 z-30 p-4 overflow-y-auto mt-24">
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
            <NavItem icon={<Settings size={18} />} text="Profile" />
            <NavItem icon={<Settings size={18} />} text="Recruitment" />
            <NavItem icon={<Settings size={18} />} text="Feed" />
            <NavItem
              icon={<Settings size={18} />}
              text="Messages"
              active={true}
            />
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

      {/* Messages Section */}
      <div className="flex-1 ml-80 flex h-[calc(100vh-64px)] mt-25">
        {/* Message List */}
        <div className="w-[360px] bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold mb-4">Messages</h1>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none"
              />
            </div>

            {/* Message Tabs */}
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

          <div className="flex-1 overflow-y-auto">
            {/* Message List */}
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`flex items-center py-3 px-4 cursor-pointer hover:bg-gray-50 ${
                  selectedUser.id === user.id ? "bg-gray-50" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {user.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{user.name}</h3>
                    <span className="text-sm text-gray-500">{user.time}</span>
                  </div>
                  <p className="text-gray-500 text-sm truncate">
                    {user.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex mr-7 flex-col bg-white">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={selectedUser.image}
                    alt={selectedUser.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {selectedUser.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="ml-3">
                  <h2 className="font-semibold">{selectedUser.name}</h2>
                  <p className="text-sm text-gray-500">
                    Last seen today at 6pm
                  </p>
                </div>
              </div>
              <MoreVertical className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex items-center justify-center">
              <div className="bg-blue-100 text-sm rounded-lg py-1 px-3">
                Today, March 16
              </div>
            </div>

            {/* Message Groups */}
            <div className="space-y-4">
              {selectedUser.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.type === "sent" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={
                        message.type === "sent"
                          ? "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150"
                          : selectedUser.image
                      }
                      alt={message.sender}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div
                    className={`flex flex-col ${
                      message.type === "sent" ? "items-end" : ""
                    } gap-1`}
                  >
                    <div className="flex items-center gap-2">
                      {message.type === "sent" ? (
                        <>
                          <span className="text-sm text-gray-500">
                            {message.time}
                          </span>
                          <span className="font-semibold">
                            {message.sender}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="font-semibold">
                            {message.sender}
                          </span>
                          <span className="text-sm text-gray-500">
                            {message.time}
                          </span>
                          <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
                        </>
                      )}
                    </div>
                    <div
                      className={`${
                        message.type === "sent"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      } rounded-lg p-3 max-w-[600px]`}
                    >
                      <p>{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
            {/* File preview */}
            {selectedFile && (
              <div className="mb-2 flex items-center justify-between bg-blue-50 p-2 rounded">
                <div className="flex items-center">
                  <Paperclip className="text-blue-500 mr-2" size={16} />
                  <span className="text-sm truncate max-w-xs">
                    {selectedFile.name}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            )}

            <div className="flex items-center gap-2">
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*, .pdf, .doc, .docx, .txt"
              />

              {/* Attachment button */}
              <button
                onClick={() => fileInputRef.current.click()}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
              >
                <Paperclip size={20} />
              </button>

              {/* Emoji button with picker */}
              <div className="relative" ref={emojiPickerRef}>
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                >
                  <Smile size={20} />
                </button>
                {showEmojiPicker && (
                  <div className="absolute bottom-10 left-0 z-10">
                    <EmojiPicker
                      onEmojiClick={onEmojiClick}
                      width={300}
                      height={400}
                    />
                  </div>
                )}
              </div>

              {/* Message input */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="w-full p-3 pr-16 bg-gray-50 rounded-lg focus:outline-none"
                />
              </div>

              {/* Send button */}
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage && !selectedFile}
                className={`p-2 rounded-full ${
                  inputMessage || selectedFile
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
