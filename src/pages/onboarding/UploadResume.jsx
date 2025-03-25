import { useState, useCallback } from "react";
import { ChevronRight, FileInput, Settings } from "lucide-react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-[653px] text-center">
        <h2 className="text-[28px] font-semibold text-gray-900 mb-2">
          Upload Resume
        </h2>
        <p className="text-base text-[#8C8C8C]">
          Include all of your relevant experience and dates in this section.
        </p>

        {/* Upload Area */}
        <label
          htmlFor="resumeUpload"
          className={`mt-8 w-full h-[378px]   bg-[#F7F7F7] border border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
            isDragging
              ? "border-[#1890FF] bg-blue-50"
              : "border-[#D9D9D9] hover:border-[#1890FF]"
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            {/* Replaced SVG with Lucide FileInput Icon */}
            <FileInput size={50} className="text-[#000000] mb-4 opacity-70" />

            {file ? (
              <p className="text-base text-gray-700">{file.name}</p>
            ) : (
              <>
                <p className="text-base text-gray-900">
                  <span className="underline font-medium">Click to upload</span>
                  <span className="text-[#646262] font-sm">
                    {" "}
                    or Drag and drop
                  </span>
                </p>
                <p
                  className="text-sm  mt-1"
                  style={{ color: "rgba(0, 0, 0, 0.4)" }}
                >
                  Maximum file size 50MB
                </p>
              </>
            )}
          </div>
        </label>
        <input
          id="resumeUpload"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
          accept=".pdf,.doc,.docx"
        />

        {/* Next Button */}
        <button className="mt-6 w-40 h-[44px] bg-[#1890FF] text-white font-medium rounded-lg hover:bg-blue-500 transition-colors">
          Next
        </button>
      </div>

      {/* Setup Manually Button */}
      <div className="fixed bottom-6 right-6">
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#595959] bg-white border border-[#D9D9D9] rounded-lg hover:text-[#1890FF] hover:border-[#1890FF] transition-colors group">
          <Settings
            size={16}
            className="text-[#8C8C8C] group-hover:text-[#1890FF]"
          />
          <span>Setup Manually</span>
          <ChevronRight
            size={16}
            className="text-[#8C8C8C] group-hover:text-[#1890FF]"
          />
        </button>
      </div>
    </div>
  );
};

export default UploadResume;
