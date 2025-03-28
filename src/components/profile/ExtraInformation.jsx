import { useState, useEffect } from "react";
import { AwardIcon, Edit, PlusCircle, Trash2, X } from "lucide-react";
import PublicationForm from "./PublicationForm";

const ExtraInformation = ({ initialLanguages = [], onSave, onCancel }) => {
  const [languages, setLanguages] = useState(initialLanguages);
  const [languageInput, setLanguageInput] = useState("");

  // Update internal state when initialLanguages changes
  useEffect(() => {
    setLanguages(initialLanguages);
  }, [initialLanguages]);

  const addLanguage = (e) => {
    if (e.key === "Enter" && languageInput.trim()) {
      setLanguages([...languages, languageInput.trim()]);
      setLanguageInput("");
    }
  };

  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    onSave(languages); // Pass just the languages array
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {/* Languages Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Languages</h2>
          <div className="flex flex-col w-full">
            <input
              type="text"
              placeholder="Add a language and press Enter"
              value={languageInput}
              onChange={(e) => setLanguageInput(e.target.value)}
              onKeyDown={addLanguage}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none mb-3"
            />
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm"
                >
                  {language}
                  <button
                    onClick={() => removeLanguage(index)}
                    className="ml-2 text-gray-600 hover:text-gray-900"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publishings Section */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Publishings</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4   rounded-lg">
              <div className="bg-blue-200 w-10 h-10 flex justify-center items-center rounded-lg">
                <AwardIcon className="text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Certificate of Excellence</h3>
                <p className="text-gray-500">Issued by - Coursera</p>
                <p className="text-gray-500 text-sm">Apr 25, 2024</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit illo laboriosam.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit illo laboriosam.
                  </li>
                </ul>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Edit publication"
                >
                  <Edit size={18} />
                </button>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Delete publication"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition">
              <PlusCircle size={20} />
              <span>Add Achievements</span>
            </button>
          </div>
        </section>
      </div>

      {/* Footer Buttons */}
      <div className="p-4 border-t flex justify-between">
        <button
          onClick={handleContinue}
          className="w-[120px] h-[40px] bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
export default ExtraInformation;
