import React from "react";
import { AwardIcon, Edit, PlusCircle, Trash2 } from "lucide-react";

const AchievementPreview = ({ achievements = [], onEdit, onDelete, onAdd }) => {
  return (
    <div className="space-y-6">
      {achievements.length > 0 ? (
        achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg"
          >
            <div className="bg-blue-200 w-10 h-10 flex justify-center items-center rounded-lg">
              <AwardIcon className="text-gray-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{achievement.title}</h3>
              <p className="text-gray-500 text-sm">
                Issued by - {achievement.issuer}
              </p>
              <p className="text-gray-500 text-sm">{achievement.date}</p>
              <p className="mt-2 text-sm">{achievement.description}</p>
              <ul className="list-disc px-6 mt-2 text-sm">
                {achievement.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(achievement)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => onDelete(achievement.id)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-sm">No achievements added yet.</p>
      )}

      {/* Add Achievement Button */}
      <button
        onClick={onAdd}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
      >
        <PlusCircle size={20} />
        <span>Add Achievement</span>
      </button>
    </div>
  );
};

export default AchievementPreview;
