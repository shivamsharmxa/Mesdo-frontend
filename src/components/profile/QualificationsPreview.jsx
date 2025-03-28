import { AwardIcon, Edit, PlusCircle, Trash2 } from "lucide-react";

const QualificationsPreview = ({ qualifications, onEdit, onDelete }) => {
  return (
    <div className="space-y-6">
      {qualifications.map((qualification, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 p-4 border border-gray-300 rounded-lg"
        >
          <div className="bg-blue-200 w-10 h-10 flex justify-center items-center rounded-lg">
            <AwardIcon className="text-gray-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold">{qualification.qualification}</h3>
            <p className="text-gray-500">{qualification.course}</p>
            <p className="text-gray-500 text-sm">{qualification.passingYear}</p>
            <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm">
              <li>{qualification.specialization}</li>
              <li>{qualification.university}</li>
              <li>{qualification.skill}</li>
            </ul>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(qualification)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Edit qualification"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => onDelete(qualification.id)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Delete qualification"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}

      {/* Add New Qualification Button */}
      <button
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
        onClick={() => onEdit(null)}
      >
        <PlusCircle size={20} />
        <span>Add Qualification</span>
      </button>
    </div>
  );
};

export default QualificationsPreview;
