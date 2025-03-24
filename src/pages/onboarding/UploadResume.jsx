import { useState, useCallback } from "react";
import { ChevronRight, CloudUpload, Settings } from "lucide-react";

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 font-inter relative bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900">Upload Resume</h2>
      <p className="text-sm mt-2 text-[#8C8C8C]">
        Include all of your relevant experience and dates in this section.
      </p>

      {/* Drag and Drop Upload Section */}
      <label
        htmlFor="resumeUpload"
        className={`mt-6 w-[600px] h-90 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition bg-white shadow-sm hover:shadow-md ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-500"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <CloudUpload
          size={36}
          className={`mb-2 ${isDragging ? "text-blue-500" : "text-gray-500"}`}
        />
        {file ? (
          <p className="text-base text-gray-700">{file.name}</p>
        ) : (
          <>
            <p className="text-base font-semibold text-gray-700">
              <span className="underline">Click to upload</span>{" "}
              <span className="text-sm text-black/50">or Drag and drop</span>
            </p>
            <p className="text-sm text-black/50 ">Maximum file size 50MB</p>
          </>
        )}
      </label>
      <input
        id="resumeUpload"
        type="file"
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* Next Button */}
      <div>
        <button className="mt-6 px-6 py-2 w-34 h-11 bg-[#1890FF] text-white font-semibold rounded-md hover:bg-blue-500 transition">
          Next
        </button>
      </div>

      {/* Setup Manually Button at Bottom Right */}
      <div className="absolute bottom-6 right-6">
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg border border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50 shadow-xs hover:shadow-sm">
          <Settings size={16} className="text-gray-500" />
          <span>Setup Manually</span>
          <ChevronRight size={16} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default UploadResume;
