import { Briefcase, Pencil } from "lucide-react";

function WorkExperienceSection({ experiences = [], onEdit, onAddNew }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onAddNew}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        ></button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-600">{exp.institution}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate} -{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                  {/* Render description as HTML */}
                  <div
                    className="mt-2 text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                  />

                  <div className="flex gap-2 mt-2">
                    {exp.tags &&
                      exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => onEdit(exp)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperienceSection;
