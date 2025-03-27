const AddQualification = () => {
  return (
    <div className="space-y-6 my-4">
      {/* Qualification Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="qualification"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Qualification
          </label>
          <select
            id="qualification"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="BSc">BSc</option>
            <option value="MSc">MSc</option>
            <option value="PhD">PhD</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="course"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Course
          </label>
          <select
            id="course"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
          </select>
        </div>
      </div>

      {/* Specialization and Passing Year */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="specialization"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Specialization
          </label>
          <select
            id="specialization"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="passingYear"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Passing Year
          </label>
          <input
            type="date"
            id="passingYear"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* University Section */}
      <div>
        <label
          htmlFor="university"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          University
        </label>
        <select
          id="university"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select</option>
          <option value="IIT">IIT</option>
          <option value="NIT">NIT</option>
          <option value="IIIT">IIIT</option>
        </select>
      </div>

      {/* Skill Section */}
      <div>
        <label
          htmlFor="skill"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Skill
        </label>
        <input
          type="text"
          id="skill"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description Section */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default AddQualification;
