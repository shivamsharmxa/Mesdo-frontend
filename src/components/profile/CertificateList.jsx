import { Ellipsis, ShieldCheck, Plus } from "lucide-react";
import { useState, useRef } from "react";

const CertificateList = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [certificates, setCertificates] = useState([
    { id: 1, name: "CPR Certification.pdf", size: "1.5 MB" },
    { id: 2, name: "Medical License.pdf", size: "2.3 MB" },
    { id: 3, name: "Advanced Training.jpg", size: "1.2 MB" },
    { id: 4, name: "Specialization.docx", size: "3.0 MB" },
  ]);
  const fileInputRef = useRef(null);

  // Handle dropdown toggle
  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  // Handle Download Action
  const handleDownload = (certId) => {
    const cert = certificates.find((c) => c.id === certId);
    alert(`Downloading ${cert.name}...`);
    setDropdownIndex(null);
  };

  // Handle Delete Action
  const handleDelete = (certId) => {
    if (window.confirm("Are you sure you want to delete this certificate?")) {
      setCertificates(certificates.filter((cert) => cert.id !== certId));
    }
    setDropdownIndex(null);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const newCertificates = Array.from(files).map((file, index) => ({
        id: Date.now() + index, // Generate unique ID
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        file,
      }));

      setCertificates([...certificates, ...newCertificates]);
    }
    // Reset file input
    e.target.value = null;
  };

  return (
    <div className="w-full space-y-4">
      {/* Add Certificate Button - Properly aligned */}
      <div className="flex justify-end px-4">
        <button
          onClick={() => fileInputRef.current.click()}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={16} />
          Add Certificate
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          multiple
          className="hidden"
        />
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className="relative flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3 truncate">
              <ShieldCheck className="flex-shrink-0 text-blue-500" size={20} />
              <div className="truncate">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {cert.name}
                </p>
                <p className="text-xs text-gray-500">{cert.size}</p>
              </div>
            </div>

            {/* Right Section - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <Ellipsis size={20} />
              </button>

              {/* Dropdown Menu */}
              {dropdownIndex === index && (
                <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-10">
                  <button
                    onClick={() => handleDownload(cert.id)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <span>📥</span> Download
                  </button>
                  <button
                    onClick={() => handleDelete(cert.id)}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <span>🗑️</span> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {certificates.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No certificates added yet
        </div>
      )}
    </div>
  );
};

export default CertificateList;
