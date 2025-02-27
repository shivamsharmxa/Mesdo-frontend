export default function Resume() {
  const resumeUrl =
    "https://drive.google.com/file/d/1O1hQO4WXM0dsdcG0sZoTl3Jr7DR4x1c5/preview"; // Embedded URL

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-4 md:p-6 rounded-md shadow-sm w-full max-w-4xl">
        <iframe
          src={resumeUrl}
          title="Resume Preview"
          className="w-full h-[80vh]"
        />
      </div>
    </div>
  );
}
