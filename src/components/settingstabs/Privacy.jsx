import React, { useState } from "react";
import PropTypes from "prop-types";

const dropdownOptions = {
  invitationsToConnect: [
    "Everyone on Mesdo",
    "Only people in my network",
    "No one",
  ],
  invitationsFromNetwork: [
    "Allow Page invitations",
    "Only from connections",
    "No invitations",
  ],
  messages: ["Allow Message Requests", "Only from connections", "No one"],
};

const Privacy = () => {
  // Dropdown states
  const [invitesConnect, setInvitesConnect] = useState(
    dropdownOptions.invitationsToConnect[0]
  );
  const [invitesFromNetwork, setInvitesFromNetwork] = useState(
    dropdownOptions.invitationsFromNetwork[0]
  );
  const [messages, setMessages] = useState(dropdownOptions.messages[0]);

  // Toggle states
  const [shareProfile, setShareProfile] = useState(true);
  const [signalInterest, setSignalInterest] = useState(true);
  const [focusedInbox, setFocusedInbox] = useState(true);
  const [readReceipts, setReadReceipts] = useState(true);
  const [harmfulDetection, setHarmfulDetection] = useState(true);

  // Dropdown component
  const Dropdown = ({ value, setValue, options }) => (
    <select
      className="w-full md:w-[320px] border border-gray-100 rounded-xl px-4 py-2 bg-[#F8FAFC] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option} className="text-sm">
          {option}
        </option>
      ))}
    </select>
  );

  Dropdown.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  // Toggle component
  const Toggle = ({ enabled, setEnabled }) => (
    <button
      type="button"
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none shadow-sm ${
        enabled ? "bg-blue-400" : "bg-gray-200"
      }`}
      onClick={() => setEnabled(!enabled)}
      aria-pressed={enabled}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          enabled ? "translate-x-4" : "translate-x-1"
        }`}
      />
    </button>
  );

  Toggle.propTypes = {
    enabled: PropTypes.bool.isRequired,
    setEnabled: PropTypes.func.isRequired,
  };

  return (
    <div className="bg-[#F7F9FB] min-h-screen py-8 px-2 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-6 md:p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">
          Your Privacy Settings
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Please update your privacy settings preferences here
        </p>

        {/* Who can reach you */}
        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-900 mb-3">
            Who can reach you
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <label className="w-full md:w-56 text-gray-600 font-normal text-sm">
                Invitations to Connect
              </label>
              <Dropdown
                value={invitesConnect}
                setValue={setInvitesConnect}
                options={dropdownOptions.invitationsToConnect}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <label className="w-full md:w-56 text-gray-600 font-normal text-sm">
                Invitations to Connect from Network
              </label>
              <Dropdown
                value={invitesFromNetwork}
                setValue={setInvitesFromNetwork}
                options={dropdownOptions.invitationsFromNetwork}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <label className="w-full md:w-56 text-gray-600 font-normal text-sm">
                Messages
              </label>
              <Dropdown
                value={messages}
                setValue={setMessages}
                options={dropdownOptions.messages}
              />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-100" />

        {/* Job Seeking Permissions */}
        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-900 mb-3">
            Job Seeking Permissions
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between bg-[#F8FAFC] rounded-xl px-4 py-3 shadow-sm">
              <span className="text-gray-700 text-sm">
                Share your profile when you click Apply for a job
              </span>
              <Toggle enabled={shareProfile} setEnabled={setShareProfile} />
            </div>
            <div className="flex items-center justify-between bg-[#F8FAFC] rounded-xl px-4 py-3 shadow-sm">
              <span className="text-gray-700 text-sm">
                Signal your interest to recruiters in the company you are
                interested in
              </span>
              <Toggle enabled={signalInterest} setEnabled={setSignalInterest} />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-100" />

        {/* Messages */}
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-3">Messages</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between bg-[#F8FAFC] rounded-xl px-4 py-3 shadow-sm">
              <span className="text-gray-700 text-sm">Focused Inbox</span>
              <Toggle enabled={focusedInbox} setEnabled={setFocusedInbox} />
            </div>
            <div className="flex items-center justify-between bg-[#F8FAFC] rounded-xl px-4 py-3 shadow-sm">
              <span className="text-gray-700 text-sm">
                Read receipts and typing indicator
              </span>
              <Toggle enabled={readReceipts} setEnabled={setReadReceipts} />
            </div>
            <div className="flex items-center justify-between bg-[#F8FAFC] rounded-xl px-4 py-3 shadow-sm">
              <span className="text-gray-700 text-sm">
                Automatic detection of harmful content
              </span>
              <Toggle
                enabled={harmfulDetection}
                setEnabled={setHarmfulDetection}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
