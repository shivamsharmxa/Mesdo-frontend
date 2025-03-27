import { GraduationCap } from "lucide-react";

function EducationItem({ title, institute, date, description }) {
  return (
    <div className="flex items-start space-x-3">
      <GraduationCap className="text-blue-500 w-5 h-5 mt-1" />
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{institute}</p>
        <p className="text-xs text-gray-500">{date}</p>
        <p className="text-sm text-gray-700 mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default EducationItem;
