import { useState } from "react";
import { ArrowLeft } from "lucide-react";

function Interest() {
  const [interests, setInterests] = useState([
    { id: "1", label: "Programming", selected: true },
    { id: "2", label: "Programming", selected: false },
    { id: "3", label: "Programming", selected: false },
    { id: "4", label: "Programming", selected: false },
    { id: "5", label: "Learning", selected: false },
    { id: "6", label: "Learning", selected: false },
    { id: "7", label: "Learning", selected: false },
    { id: "8", label: "Learning", selected: false },
    { id: "9", label: "Healthcare system", selected: false },
    { id: "10", label: "Healthcare system", selected: false },
    { id: "11", label: "Healthcare system", selected: false },
    { id: "12", label: "Healthcare system", selected: false },
    { id: "13", label: "Nature", selected: false },
    { id: "14", label: "Nature", selected: true },
    { id: "15", label: "Nature", selected: false },
    { id: "16", label: "Nature", selected: false },
    { id: "17", label: "Programming", selected: false },
    { id: "18", label: "Programming", selected: false },
    { id: "19", label: "Programming", selected: false },
    { id: "20", label: "Programming", selected: false },
    { id: "21", label: "Healthcare", selected: false },
    { id: "22", label: "Healthcare", selected: false },
    { id: "23", label: "Healthcare", selected: true },
    { id: "24", label: "Healthcare", selected: false },
    { id: "25", label: "Programming", selected: false },
    { id: "26", label: "Programming", selected: false },
  ]);

  const toggleInterest = (id) => {
    setInterests(
      interests.map((interest) =>
        interest.id === id
          ? { ...interest, selected: !interest.selected }
          : interest
      )
    );
  };

  const selectedCount = interests.filter((i) => i.selected).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Steps */}
      <div className="relative w-full">
        {/* Background Track */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100" />
      </div>

      <div className="p-6">
        {/* Back Button */}
        <button className="mb-8 hover:bg-gray-100 p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <h1 className="text-2xl font-semibold text-center text-gray-900 mb-2">
            What are you interested in?
          </h1>
          <p className="text-gray-600 text-sm text-center mb-8">
            Choose 3 or more
          </p>

          {/* Interest Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {interests.map((interest) => (
              <button
                key={interest.id}
                onClick={() => toggleInterest(interest.id)}
                className={`
                  px-4 py-2 rounded-full border transition-all
                  ${
                    interest.selected
                      ? "bg-[#1890FF] text-white border-[#1890FF] hover:bg-[#0D6EFD]"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                  }
                  flex items-center gap-2
                `}
              >
                {interest.label}
                <span className="text-lg leading-none">
                  {interest.selected ? "−" : "+"}
                </span>
              </button>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mb-8">
            <button className="text-blue-600 hover:underline">Show More</button>
          </div>

          {/* Finish Button */}
          <button
            className={`
              w-full py-3 rounded-lg transition-all
              ${
                selectedCount >= 3
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }
            `}
            disabled={selectedCount < 3}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Interest;
