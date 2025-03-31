import { MessageCircle, MoreHorizontal, Pencil } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="w-full">
      {/* Cover Photo */}
      <div className="h-[200px] relative">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Info Container */}
      <div className="bg-white px-8 py-4 shadow-sm">
        <div className="flex justify-between items-center">
          {/* Profile Info Left */}
          <div className="flex items-center gap-6">
            {/* Profile Picture */}
            <div className="relative -mt-16">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Dr. Rahul Sharma"
                className="w-[140px] h-[140px] rounded-full border-4 border-white object-cover"
              />
              <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </div>

            {/* Name and Title */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Dr. Rahul Sharma
              </h1>
              <p className="text-gray-600 mt-1">
                Dental Surgeon | Apollo Hospital
              </p>
              <p className="text-blue-500 mt-2 text-sm cursor-pointer hover:underline">
                533 Connections
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <Pencil className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
            <button className="h-10 bg-[#1890FF] text-white px-5 rounded-lg flex items-center gap-1 hover:bg-gray-200 transition-colors font-medium">
              <span className="text-lg leading-none">+</span>
              Follow
            </button>
            <button className="h-10 bg-gray-100 text-gray-900 px-5 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors font-medium">
              <MessageCircle className="w-4 h-4" />
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
