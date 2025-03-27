import { AwardIcon, Edit, PlusCircle, Trash2 } from "lucide-react";
import React from "react";

const QualificationsPreview = () => {
  return (
    <div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                illo laboriosam.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                illo laboriosam.
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
        {/* <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition">
          <PlusCircle size={20} />
          <span>Add Achievements</span>
        </button> */}
      </div>
    </div>
  );
};

export default QualificationsPreview;
