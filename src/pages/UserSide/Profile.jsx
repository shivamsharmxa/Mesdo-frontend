import { useState } from "react";
import mesdoLogo from "../../assets/mesdo_logo.jpeg";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Overview"); // State to manage active tab
  const tabs = ["Overview", "Social Activity", "Applied Jobs", "Saved"];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={mesdoLogo} alt="Logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-semibold">Mesdo</span>
          </div>
          <div className="flex items-center flex-grow mx-4">
            <div className="relative w-full pl-48">
              <input
                className="w-full px-4 py-2 border text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                placeholder="Job title, skills, profile"
                type="text"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-bell text-xl text-gray-500 mr-4"></i>
            <img
              alt="User profile picture"
              className="w-10 h-10 rounded-full"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/mjnzuz-z-y1Fmo5e0SW2spzUAb5hmXzqGeX1_-9gcAE.jpg"
              width="40"
            />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/5 bg-white h-screen p-4">
          <div className="flex items-center mb-6">
            <img
              alt="Logo"
              className="w-10 h-10 rounded-full"
              height="40"
              src={mesdoLogo}
              width="40"
            />
            <span className="ml-2 text-xl font-semibold">Mesdo</span>
          </div>
          <nav>
            <ul>
              <li className="mb-4">
                <a
                  className="flex items-center text-gray-700 hover:text-blue-500"
                  href="#"
                >
                  <i className="fas fa-home mr-3"></i> Dashboard
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-gray-700 hover:text-blue-500"
                  href="#"
                >
                  <i className="fas fa-user-md mr-3"></i> Doctors
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-gray-700 hover:text-blue-500"
                  href="#"
                >
                  <i className="fas fa-calendar-alt mr-3"></i> Appointments
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-gray-700 hover:text-blue-500"
                  href="#"
                >
                  <i className="fas fa-file-alt mr-3"></i> Reports
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-gray-700 hover:text-blue-500"
                  href="#"
                >
                  <i className="fas fa-cog mr-3"></i> Settings
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="flex items-center text-gray-700 hover:text-blue-500"
                  href="#"
                >
                  <i className="fas fa-sign-out-alt mr-3"></i> Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-4/5 p-6 flex">
          <div className="w-2/3">
            {/* Cover Photo */}
            <div className="bg-blue-500 h-48 rounded-t-lg relative">
              <img
                src="https://placehold.co/1200x300"
                alt="Cover Photo"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Profile Section */}
            <div className="bg-white p-6 rounded-b-lg shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    alt="Profile Picture"
                    className="w-24 h-24 rounded-full mr-6 -mt-2 border-4 border-white"
                    height="100"
                    src="https://placehold.co/100x100"
                    width="100"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold">Dr. Rahul Sharma</h2>
                    <p className="text-gray-600 text-sm">
                      Heart Specialist at Medico
                    </p>
                  </div>
                </div>
                <div className="flex mt-4">
                  <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-300">
                    Follow
                  </button>
                  <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-300">
                    Message
                  </button>
                </div>
              </div>

              {/* Tabs Section */}
              <div className="mt-20 ">
                <div className="flex border-b">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`px-12 py-2 text-sm font-medium rounded-lg transition duration-300
              ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                  {activeTab === "Overview" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">About</h3>
                      <p className="text-gray-700 mb-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur. Quis auctor eu
                        nisl amet consectetur et. Nisl sit pellentesque sit in
                        euismod. Sit amet risus sit lorem. Lorem ipsum dolor sit
                        amet consectetur. Quis auctor eu nisl amet consectetur
                        et. Nisl sit pellentesque sit in euismod. Sit amet risus
                        sit lorem.
                      </p>
                      <p className="text-gray-700 mb-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur. Quis auctor eu
                        nisl amet consectetur et. Nisl sit pellentesque sit in
                        euismod. Sit amet risus sit lorem. Lorem ipsum dolor sit
                        amet consectetur. Quis auctor eu nisl amet consectetur
                        et. Nisl sit pellentesque sit in euismod. Sit amet risus
                        sit lorem.
                      </p>

                      {/* Work Experience Section */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">
                          Work Experience
                        </h3>
                        <div className="bg-gray-100 p-4 rounded mb-4">
                          <h4 className="font-semibold">
                            Heart Specialist at Medico
                          </h4>
                          <p className="text-gray-600">Jan 2020 - Present</p>
                          <p className="text-gray-700 text-sm">
                            Lorem ipsum dolor sit amet consectetur. Quis auctor
                            eu nisl amet consectetur et. Nisl sit pellentesque
                            sit in euismod. Sit amet risus sit lorem.
                          </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                          <h4 className="font-semibold">
                            Cardiologist at HealthCare
                          </h4>
                          <p className="text-gray-600">Jan 2015 - Dec 2019</p>
                          <p className="text-gray-700 text-sm">
                            Lorem ipsum dolor sit amet consectetur. Quis auctor
                            eu nisl amet consectetur et. Nisl sit pellentesque
                            sit in euismod. Sit amet risus sit lorem.
                          </p>
                        </div>
                      </div>

                      {/* Education Section */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Education
                        </h3>
                        <div className="bg-gray-100 p-4 rounded mb-4">
                          <h4 className="font-semibold">
                            MBBS from XYZ University
                          </h4>
                          <p className="text-gray-600">2010 - 2015</p>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur. Quis auctor
                            eu nisl amet consectetur et. Nisl sit pellentesque
                            sit in euismod. Sit amet risus sit lorem.
                          </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                          <h4 className="font-semibold">
                            MD from ABC University
                          </h4>
                          <p className="text-gray-600">2015 - 2018</p>
                          <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur. Quis auctor
                            eu nisl amet consectetur et. Nisl sit pellentesque
                            sit in euismod. Sit amet risus sit lorem.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "Social Activity" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Social Activity
                      </h3>
                      <p className="text-gray-700">No recent activity.</p>
                    </div>
                  )}
                  {activeTab === "Applied Jobs" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Applied Jobs
                      </h3>
                      <p className="text-gray-700">No jobs applied yet.</p>
                    </div>
                  )}
                  {activeTab === "Saved" && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Saved Items
                      </h3>
                      <p className="text-gray-700">No saved items.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/3 ml-6">
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold mb-4">About the Doctor</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur. Quis auctor eu nisl amet
                consectetur et. Nisl sit pellentesque sit in euismod. Sit amet
                risus sit lorem.
              </p>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Quis auctor eu nisl amet
                consectetur et. Nisl sit pellentesque sit in euismod. Sit amet
                risus sit lorem.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4 text-md">
                People you might know
              </h3>
              <ul>
                <li className="flex items-center mb-4">
                  <img
                    alt="Person 1"
                    className="w-10 h-10 rounded-full mr-4"
                    height="40"
                    src="https://placehold.co/40x40"
                    width="40"
                  />
                  <div>
                    <h4 className="font-semibold">Adam Ranjitha</h4>
                    <p className="text-gray-600 text-sm">Cardiologist</p>
                  </div>
                  <button className="ml-auto text-[#1890FF] px-4 py-2 rounded transition duration-300">
                    + Follow
                  </button>
                </li>
                <li className="flex items-center mb-4">
                  <img
                    alt="Person 2"
                    className="w-10 h-10 rounded-full mr-4"
                    height="40"
                    src="https://placehold.co/40x40"
                    width="40"
                  />
                  <div>
                    <h4 className="font-semibold">Aditi Sharma</h4>
                    <p className="text-gray-600 text-sm">Neurologist</p>
                  </div>
                  <button className="ml-auto text-[#1890FF] px-4 py-2 rounded transition duration-300">
                    + Follow
                  </button>
                </li>
                <li className="flex items-center mb-4">
                  <img
                    alt="Person 3"
                    className="w-10 h-10 rounded-full mr-4"
                    height="40"
                    src="https://placehold.co/40x40"
                    width="40"
                  />
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-gray-600 text-sm">Orthopedic</p>
                  </div>
                  <button className="ml-auto text-[#1890FF] px-4 py-2 rounded transition duration-300">
                    + Follow
                  </button>
                </li>
                <li className="flex items-center mb-4">
                  <img
                    alt="Person 4"
                    className="w-10 h-10 rounded-full mr-4"
                    height="40"
                    src="https://placehold.co/40x40"
                    width="40"
                  />
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-gray-600 text-sm">Pediatrician</p>
                  </div>
                  <button className="ml-auto text-[#1890FF] px-4 py-2 rounded transition duration-300">
                    + Follow
                  </button>
                </li>
                <li className="flex items-center">
                  <img
                    alt="Person 5"
                    className="w-10 h-10 rounded-full mr-4"
                    height="40"
                    src="https://placehold.co/40x40"
                    width="40"
                  />
                  <div>
                    <h4 className="font-semibold">Chase Collins</h4>
                    <p className="text-gray-600 text-sm">Dermatologist</p>
                  </div>
                  <button className="ml-auto text-[#1890FF] px-4 py-2 rounded transition duration-300">
                    + Follow
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
