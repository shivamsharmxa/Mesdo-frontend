import { AwardIcon, Edit, PlusCircle, Trash2 } from "lucide-react";

const AchievementPreview = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Qualification Details */}
      <div className="w-full p-12">
        <div className="flex space-x-3">
          <div>
            <div className="bg-blue-200 w-10 h-10  flex justify-center items-center rounded-lg">
              {" "}
              <AwardIcon className="text-gray-500" />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="font-bold py-1"> Certificate of Excellence </h2>
            <p className="text-gray-500 font-semibold">issuer by - Coursera</p>
            <p>Apr 25, 2024</p>
            <ul className="list-disc px-6">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                illo laboriosam
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                illo laboriosam
              </li>
            </ul>
          </div>
          <div className="flex items-start space-x-3">
            <button>
              {" "}
              <Edit size={18} className="text-gray-500 hover:text-gray-700" />
            </button>
            <button>
              {" "}
              <Trash2 size={18} className="text-gray-500 hover:text-gray-700" />
            </button>
          </div>
        </div>

        <button className=" mt-7 flex items-center space-x-2 text-black hover:text-blue-700 transition">
          <PlusCircle size={20} /> <span>Add Achievements</span>
        </button>
        {/* Buttons */}
        <div className="mt-60 flex justify-between items-center">
          <button className="w-[120px] h-[40px] bg-[#F0F0F0] text-[#1890FF] text-sm font-small rounded-md hover:bg-gray-400 transition">
            Skip
          </button>

          <button className="w-[120px] h-[40px] bg-blue-500 text-white text-sm font-small rounded-md hover:bg-blue-600 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementPreview;
