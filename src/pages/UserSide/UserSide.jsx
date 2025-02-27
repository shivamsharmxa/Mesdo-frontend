import { useState } from "react";
import { Home, User, Briefcase, Bell, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("feed");
  const [isUser, setIsUser] = useState(true); // State to track the mode (User/Recruiter)
  const navigate = useNavigate(); // Initialize navigate

  const handleSwitchChange = () => {
    const newMode = !isUser;
    setIsUser(newMode); // Toggle mode
    if (newMode) {
      navigate("/usermode"); // Redirect to User Mode
    } else {
      navigate("/"); // Redirect to Recruiter Mode
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-xl font-bold mb-6">User Dashboard</h1>

        {/* Switch for User/Recruiter */}
        <div className="mb-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <span className="text-sm">
              {isUser ? "User Mode" : "Recruiter Mode"}
            </span>
            <div
              onClick={handleSwitchChange}
              className={`relative inline-block w-12 h-6 transition-all rounded-full ${
                isUser ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                  isUser ? "transform translate-x-6" : ""
                }`}
              />
            </div>
          </label>
        </div>

        <nav className="space-y-4">
          <button
            onClick={() => setActiveTab("feed")}
            className={`flex items-center gap-4 p-2 rounded-lg text-gray-700 transition hover:bg-gray-200 ${
              activeTab === "feed" ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            <Home size={20} /> Feed
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-4 p-2 rounded-lg text-gray-700 transition hover:bg-gray-200 ${
              activeTab === "profile" ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            <User size={20} /> Profile
          </button>
          <button
            onClick={() => setActiveTab("jobs")}
            className={`flex items-center gap-4 p-2 rounded-lg text-gray-700 transition hover:bg-gray-200 ${
              activeTab === "jobs" ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            <Briefcase size={20} /> Jobs
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`flex items-center gap-4 p-2 rounded-lg text-gray-700 transition hover:bg-gray-200 ${
              activeTab === "notifications" ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            <Bell size={20} /> Notifications
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center gap-4 p-2 rounded-lg text-gray-700 transition hover:bg-gray-200 ${
              activeTab === "messages" ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            <MessageSquare size={20} /> Messages
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeTab === "feed" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Feed</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white shadow rounded-md">
                <h3 className="font-semibold">Post Title</h3>
                <p className="text-gray-600">This is a sample post content.</p>
              </div>
              <div className="p-4 bg-white shadow rounded-md">
                <h3 className="font-semibold">Another Post</h3>
                <p className="text-gray-600">
                  This is another sample post content.
                </p>
              </div>
            </div>
          </section>
        )}
        {activeTab === "profile" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="p-6 bg-white shadow rounded-md">
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-gray-600">Frontend Developer</p>
              <p className="text-gray-600">Location: New York, USA</p>
            </div>
          </section>
        )}
        {activeTab === "jobs" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Jobs</h2>
            <div className="p-4 bg-white shadow rounded-md">
              <h3 className="font-semibold">Frontend Developer</h3>
              <p className="text-gray-600">Company: Tech Corp</p>
            </div>
          </section>
        )}
        {activeTab === "notifications" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <ul className="space-y-4">
              <li className="p-4 bg-white shadow rounded-md">
                <p className="text-gray-600">
                  You have a new job recommendation.
                </p>
              </li>
            </ul>
          </section>
        )}
        {activeTab === "messages" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Messages</h2>
            <div className="p-4 bg-white shadow rounded-md">
              <p className="text-gray-600">You have no new messages.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
