const UserListItem = ({ user, selectedUser, onClick }) => {
  return (
    <div
      onClick={onClick}
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
        <p className="text-gray-500 text-sm truncate">{user.lastMessage}</p>
      </div>
    </div>
  );
};

export default UserListItem;
