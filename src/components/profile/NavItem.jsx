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

export default NavItem;
