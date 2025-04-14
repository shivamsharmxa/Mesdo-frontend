import { useEffect, useState } from "react";
import { Bell, MessageCircle, Briefcase, X } from "lucide-react";

// Dummy categories (used as tabs)
const TABS = [
  { key: "all", label: "All", icon: null },
  { key: "mentions", label: "Mentions", icon: <MessageCircle size={18} /> },
  { key: "jobs", label: "Jobs", icon: <Briefcase size={18} /> },
  { key: "posts", label: "My Posts", icon: <Bell size={18} /> },
];

export function NotificationPopup({
  onClose,
  autoClose = true,
  duration = 5000,
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([]);

  // Simulated backend fetch - Replace with real API integration
  const fetchPopupNotifications = async () => {
    const data = [
      {
        id: 1,
        type: "all",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
        title: "Dr. Krishna and 3 others have added comments on your post",
        description:
          "15 more opening at your alerted company within the last hour, Apply Now!",
        time: "Today at 9:42 AM",
      },
      {
        id: 2,
        type: "mentions",
        avatar: "",
        title: "Your account is pending verification",
        description: "Verify your account for continued experience",
        time: "Today at 9:42 AM",
      },
    ];
    setNotifications(data);
  };

  useEffect(() => {
    fetchPopupNotifications();
  }, []);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  if (!isVisible) return null;

  const filtered = notifications.filter(
    (n) => activeTab === "all" || n.type === activeTab
  );

  return (
    <div className="fixed top-4 right-4 w-[400px] bg-white rounded-lg shadow-lg animate-slide-in z-50">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 px-4 pt-3 border-b">
        {TABS.map(({ key, label, icon }) => (
          <button
            key={key}
            className={`flex items-center space-x-1 pb-2 text-sm font-medium ${
              activeTab === key
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div className="flex items-start space-x-4" key={item.id}>
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Bell size={20} className="text-gray-500" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">{item.time}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 text-center">No notifications</p>
        )}
      </div>
    </div>
  );
}

// Keyframe animation for slide-in
const styles = `
@keyframes slide-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}
`;
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
