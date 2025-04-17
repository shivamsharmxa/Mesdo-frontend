import { useState } from "react";

const Preferences = () => {
  const [language, setLanguage] = useState("English");
  const [profilePhotos, setProfilePhotos] = useState("All members");
  const [feedView, setFeedView] = useState("Most relevant posts");

  const unfollowedPeople = [
    {
      id: 1,
      name: "Dr. Rajeev Bhatia",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Dr. Rajeev Bhatia",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Dr. Rajeev Bhatia",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Dr. Rajeev Bhatia",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-lg px-8 py-6 shadow-sm max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Your Preferences
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Please update your profile preferences here
      </p>

      {/* Language */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Language
        </label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full max-w-sm border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </select>
      </div>

      {/* Showing profile photos */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Showing profile photos
        </label>
        <select
          value={profilePhotos}
          onChange={(e) => setProfilePhotos(e.target.value)}
          className="w-full max-w-sm border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          <option>All members</option>
          <option>Only connections</option>
          <option>No one</option>
        </select>
      </div>

      {/* Preferred Feed View */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Feed View
        </label>
        <select
          value={feedView}
          onChange={(e) => setFeedView(e.target.value)}
          className="w-full max-w-sm border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        >
          <option>Most relevant posts</option>
          <option>Most recent posts</option>
        </select>
      </div>

      {/* Unfollowed People */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-700">
            People you unfollowed
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View All
          </a>
        </div>

        <ul className="space-y-3">
          {unfollowedPeople.map((person) => (
            <li
              key={person.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="text-sm text-gray-800 font-medium">
                  {person.name}
                </p>
              </div>
              <button className="text-sm font-medium text-blue-600 hover:underline">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Preferences;
