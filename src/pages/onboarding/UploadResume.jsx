import { useState } from "react";
import { CloudUpload, Linkedin, Settings } from "lucide-react";

const UploadResume = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 font-inter relative bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900">Upload Resume</h2>
      <p className="text-sm mt-2 text-[#8C8C8C]">
        Include all of your relevant experience and dates in this section.
      </p>

      {/* Drag and Drop Upload Section */}
      <label
        htmlFor="resumeUpload"
        className="mt-6 w-[600px] h-90 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 transition bg-white shadow-sm hover:shadow-md"
      >
        <CloudUpload size={36} className="text-gray-500 mb-2" />
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
        accept=".pdf,.doc,.docx"
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
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition transform hover:scale-105">
          <Settings size={16} />
          <span>Setup Manually</span>
        </button>
      </div>
    </div>
  );
};

export default UploadResume;
