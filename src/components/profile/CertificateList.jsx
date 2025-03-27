import { Ellipsis, ShieldCheck } from "lucide-react";
import { useState } from "react";

const CertificateList = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const certificates = [
    { name: "Certificate 1", size: "1.5 MB" },
    { name: "Certificate 2", size: "2.3 MB" },
    { name: "Certificate 3", size: "1.2 MB" },
    { name: "Certificate 4", size: "3.0 MB" },
  ];

  // Handle dropdown toggle
  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  // Handle Download Action
  const handleDownload = (certName) => {
    alert(`Downloading ${certName}...`);
  };

  // Handle Delete Action
  const handleDelete = (certName) => {
    alert(`Deleting ${certName}...`);
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="relative flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
        >
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-500" size={24} />
            <div>
              <p className="text-sm font-medium text-gray-700">{cert.name}</p>
              <p className="text-xs text-gray-500">{cert.size}</p>
            </div>
          </div>

          {/* Right Section - Ellipsis Button */}
          <button
            onClick={() => toggleDropdown(index)}
            className="text-gray-600 hover:text-black"
          >
            <Ellipsis size={24} />
          </button>

          {/* Dropdown Menu */}
          {dropdownIndex === index && (
            <div className="absolute right-4 top-12 bg-white border border-gray-200 rounded-lg shadow-lg w-50 z-10">
              <button
                onClick={() => handleDownload(cert.name)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                📥 Download Document
              </button>
              <button
                onClick={() => handleDelete(cert.name)}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
              >
                🗑️ Delete Document
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CertificateList;
