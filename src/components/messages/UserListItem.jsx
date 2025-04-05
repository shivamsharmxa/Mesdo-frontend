import { Users } from "lucide-react";

const UserListItem = ({ user, selectedUser, onClick, isGroup }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center py-3 px-4 cursor-pointer hover:bg-gray-50 ${
        selectedUser?.id === user.id ? "bg-gray-50" : ""
      }`}
    >
      <div className="relative">
        <img
          src={user.image}
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        {!isGroup && user.online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
        {isGroup && (
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <Users size={12} className="text-white" />
          </div>
        )}
      </div>
      <div className="ml-3 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{user.name}</h3>
          <span className="text-sm text-gray-500">{user.time}</span>
        </div>
        <p className="text-gray-500 text-sm truncate">{user.lastMessage}</p>
      </div>
    </div>
  );
};
export default UserListItem;
