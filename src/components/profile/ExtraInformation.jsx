import { useState, useEffect } from "react";
import {
  AwardIcon,
  BookOpen,
  Edit,
  PlusCircle,
  Trash2,
  X,
  ChevronRight,
} from "lucide-react";
import PublicationForm from "./PublicationForm";

const ExtraInformation = ({
  initialLanguages = [],
  initialPublications = [],
  onSave,
  onCancel,
}) => {
  const [languages, setLanguages] = useState(initialLanguages);
  const [publications, setPublications] = useState(initialPublications);
  const [languageInput, setLanguageInput] = useState("");
  const [editingPublication, setEditingPublication] = useState(null);
  const [showPublicationForm, setShowPublicationForm] = useState(false);

  // Sync with parent's initial data
  useEffect(() => {
    setLanguages(initialLanguages);
    setPublications(initialPublications);
  }, [initialLanguages, initialPublications]);

  // Language functions
  const addLanguage = (e) => {
    if (e.key === "Enter" && languageInput.trim()) {
      setLanguages([...languages, languageInput.trim()]);
      setLanguageInput("");
    }
  };

  const removeLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  // Publication functions
  const handleSavePublication = (publicationData) => {
    if (editingPublication) {
      // Update existing publication
      setPublications(
        publications.map((pub) =>
          pub === editingPublication ? publicationData : pub
        )
      );
    } else {
      // Add new publication
      setPublications([...publications, publicationData]);
    }
    setEditingPublication(null);
    setShowPublicationForm(false);
  };

  const handleEditPublication = (pub) => {
    setEditingPublication(pub);
    setShowPublicationForm(true);
  };

  const handleDeletePublication = (index) => {
    setPublications(publications.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    onSave({
      languages,
      publications,
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}

      {/* Content */}
      <div className="flex-1 overflow-auto">
        {showPublicationForm ? (
          <PublicationForm
            achievement={editingPublication}
            onSave={handleSavePublication}
            onCancel={() => {
              setEditingPublication(null);
              setShowPublicationForm(false);
            }}
          />
        ) : (
          <div className="p-4">
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

            {/* Publications Section */}
            <section className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Publications</h2>
                <button
                  onClick={() => {
                    setEditingPublication(null);
                    setShowPublicationForm(true);
                  }}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <PlusCircle size={20} />
                  <span>Add Publication</span>
                </button>
              </div>

              <div className="space-y-4">
                {publications.length > 0 ? (
                  publications.map((pub, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <BookOpen className="w-5 h-5 text-blue-500 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-gray-600">{pub.issuer}</p>
                        <p className="text-sm text-gray-500">{pub.date}</p>
                        <p className="text-sm text-gray-700 mt-2">
                          {pub.description}
                        </p>
                        {pub.highlights?.length > 0 && (
                          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                            {pub.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditPublication(pub)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeletePublication(index)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No publications added yet
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Footer Buttons - Only show when not in form mode */}
      {!showPublicationForm && (
        <div className="p-4 border-t flex justify-between">
          <button
            onClick={onCancel}
            className="w-[120px] h-[40px] bg-gray-100 text-blue-500 text-sm rounded-md hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className="w-[120px] h-[40px] bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default ExtraInformation;
