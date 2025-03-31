import { MoreVertical } from "lucide-react";

const ChatHeader = ({ selectedUser, onProfileClick }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={onProfileClick}
        >
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
            <p className="text-sm text-gray-500">Last seen today at 6pm</p>
          </div>
        </div>
        <MoreVertical className="w-6 h-6 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHeader;
