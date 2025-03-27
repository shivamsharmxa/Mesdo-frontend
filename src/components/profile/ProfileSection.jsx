import { MessageCircle, MoreHorizontal } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="w-full">
      {/* Cover Photo */}
      <div className="bg-blue-500 h-48 rounded-t-lg relative">
        <img
          src="https://picsum.photos/1200/300"
          alt="Cover Photo"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Profile Info */}
      <div className="bg-white p-6 rounded-b-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mr-6 -mt-2 border-4 border-white"
              src="https://picsum.photos/100"
              width="100"
              height="100"
            />
            <div>
              <h2 className="text-2xl font-semibold">Dr. Rahul Sharma</h2>
              <p className="text-gray-600 text-sm">
                Heart Specialist at Medico
              </p>
            </div>
          </div>
          <div className="flex mt-4 items-center">
            <button className="bg-gray-200 p-2 rounded mr-2 hover:bg-gray-300 transition duration-300">
              <MoreHorizontal className="text-gray-700 w-5 h-5" />
            </button>
            <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded flex mr-2 hover:bg-blue-600 transition duration-300">
              <span className="w-4 h-4 mr-1">+</span> Follow
            </button>
            <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded flex items-center mr-2 hover:bg-gray-300 transition duration-300">
              <MessageCircle className="w-4 h-4 mr-1" /> Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
