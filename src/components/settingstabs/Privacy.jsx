import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getPrivacySettings,
  updatePrivacySettings,
} from "../../services/settingsService";
import { toast } from "react-hot-toast";

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
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

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

  useEffect(() => {
    fetchPrivacySettings();
  }, []);

  const fetchPrivacySettings = async () => {
    try {
      setIsLoading(true);
      const data = await getPrivacySettings();
      setInvitesConnect(data.invitesConnect);
      setInvitesFromNetwork(data.invitesFromNetwork);
      setMessages(data.messages);
      setShareProfile(data.shareProfile);
      setSignalInterest(data.signalInterest);
      setFocusedInbox(data.focusedInbox);
      setReadReceipts(data.readReceipts);
      setHarmfulDetection(data.harmfulDetection);
    } catch (error) {
      console.error("Error fetching privacy settings:", error);
      toast.error("Failed to load privacy settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await updatePrivacySettings({
        invitesConnect,
        invitesFromNetwork,
        messages,
        shareProfile,
        signalInterest,
        focusedInbox,
        readReceipts,
        harmfulDetection,
      });
      toast.success("Privacy settings saved successfully");
    } catch (error) {
      console.error("Error saving privacy settings:", error);
      toast.error("Failed to save privacy settings");
    } finally {
      setIsSaving(false);
    }
  };

  // Dropdown component
  const Dropdown = ({ value, setValue, options }) => (
    <select
      className="w-full md:w-[320px] border border-gray-100 rounded-xl px-4 py-2 bg-[#F8FAFC] text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={isSaving}
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
      disabled={isSaving}
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

  if (isLoading) {
    return (
      <div className="bg-[#F7F9FB] min-h-screen py-8 px-2 md:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-6 md:p-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F9FB] min-h-screen py-8 px-2 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Your Privacy Settings
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Please update your privacy settings preferences here
            </p>
          </div>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>

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
