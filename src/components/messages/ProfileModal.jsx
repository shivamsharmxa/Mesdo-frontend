import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  X,
  ChevronDown,
  ChevronUp,
  MailCheck,
} from "lucide-react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const ProfileModal = ({ isOpen, onClose, profile }) => {
  const [activeTab, setActiveTab] = useState("Media");
  const [isMediaExpanded, setIsMediaExpanded] = useState(true);
  const [isInterestsExpanded, setIsInterestsExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-full max-w-4xl h-auto bg-white shadow-xl overflow-hidden rounded-lg flex"
          >
            {/* Left Side - Profile Info */}
            <div className="w-1/2 bg-[#F5F7FA] p-6 flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative mb-4"
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </motion.div>

              <h1 className="text-xl font-bold">{profile.name}</h1>
              <p className="text-gray-600">
                {profile.title} | {profile.hospital}
              </p>
              <div className="mt-6 space-y-4 text-gray-700 w-full text-left">
                <div className="flex items-center gap-4">
                  <MapPin size={18} className="flex-shrink-0" />
                  <h3 className="text-md font-medium w-16">Location</h3>
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="flex-shrink-0" />
                  <h3 className="text-md font-medium w-16">Phone</h3>
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <MailCheck size={18} className="flex-shrink-0" />
                  <h3 className="text-md font-medium w-16">Email</h3>
                  <span>{profile.email}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Media & Interests */}
            <div className="w-2/3 p-6 flex flex-col">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <X size={24} />
              </button>

              {/* Media Section */}
              <div className="border-b pb-4">
                <button
                  className="w-full flex justify-between items-center text-lg font-semibold"
                  onClick={() => setIsMediaExpanded(!isMediaExpanded)}
                >
                  Media
                  {isMediaExpanded ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isMediaExpanded ? "auto" : 0,
                    opacity: isMediaExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4">
                    <div className="flex gap-4 mb-4">
                      {["Media", "PDF", "Links"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 py-1 rounded-md text-sm font-medium transition ${
                            activeTab === tab
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {profile.media.map((item, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden"
                        >
                          <img
                            src={item}
                            alt={`Media ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Interests Section */}
              <div className="mt-4">
                <button
                  className="w-full flex justify-between items-center text-lg font-semibold"
                  onClick={() => setIsInterestsExpanded(!isInterestsExpanded)}
                >
                  Interests
                  {isInterestsExpanded ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isInterestsExpanded ? "auto" : 0,
                    opacity: isInterestsExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 text-gray-600">
                    <p>User interests would appear here...</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hospital: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    media: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProfileModal;
