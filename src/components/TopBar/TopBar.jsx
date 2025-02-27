import PropTypes from "prop-types";

export default function Topbar() {
  // Status indicators data
  const statuses = [
    { label: "Active", count: 2, color: "bg-green-500" },
    { label: "On Hold", count: 0, color: "bg-yellow-400" },
    { label: "Closed", count: 4, color: "bg-red-500" },
    { label: "Drafts Hold", count: 1, color: "bg-gray-400" },
  ];

  // Button Component
  const Button = ({ className, children, variant = "filled", ...props }) => {
    let buttonClass =
      "px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all";

    Button.propTypes = {
      className: PropTypes.string,
      children: PropTypes.node.isRequired,
      variant: PropTypes.oneOf(["filled", "outline", "link"]),
    };

    if (variant === "outline") {
      buttonClass +=
        " border border-gray-300 bg-white text-gray-700 hover:bg-gray-100";
    } else if (variant === "link") {
      buttonClass += " text-blue-600 hover:underline";
    } else {
      buttonClass += " bg-blue-600 text-white hover:bg-blue-700";
    }

    return (
      <button className={`${buttonClass} ${className}`} {...props}>
        {children}
      </button>
    );
  };

  return (
    <header className="flex justify-between items-center mb-6">
      {/* Left Section - Title & Status Indicators */}
      <div>
        {/* Title */}
        <h2 className="font-inter font-semibold text-[32px] leading-[38.73px] text-gray-900">
          Recruitment
        </h2>

        {/* Status Indicators */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
          {statuses.map((status, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${status.color}`}></span>
              {status.label} ({status.count})
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Create New Job Button */}
      <Button
        className="bg-[#1890FF] text-white"
        onClick={() => (window.location.href = "/create")}
      >
        + Create New Job
      </Button>
    </header>
  );
}
