import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import {
  getNotificationSettings,
  updateNotificationSettings,
} from "../../services/settingsService";
import { toast } from "react-hot-toast";
import PropTypes from "prop-types";

const Notification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [quietHours, setQuietHours] = useState(true);
  const [fromTime, setFromTime] = useState("22:00");
  const [toTime, setToTime] = useState("08:00");
  const [weekendOnly, setWeekendOnly] = useState(true);

  const [notifications, setNotifications] = useState({
    groupNotifications: true,
    emailNotifications: true,
    soundNotifications: true,
    jobPostNotifications: true,
    pageNotifications: true,
  });

  useEffect(() => {
    fetchNotificationSettings();
  }, []);

  const fetchNotificationSettings = async () => {
    try {
      setIsLoading(true);
      const data = await getNotificationSettings();
      setQuietHours(data.quietHours);
      setFromTime(data.fromTime);
      setToTime(data.toTime);
      setWeekendOnly(data.weekendOnly);
      setNotifications(data.notifications);
    } catch (error) {
      console.error("Error fetching notification settings:", error);
      toast.error("Failed to load notification settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await updateNotificationSettings({
        quietHours,
        fromTime,
        toTime,
        weekendOnly,
        notifications,
      });
      toast.success("Notification settings saved successfully");
    } catch (error) {
      console.error("Error saving notification settings:", error);
      toast.error("Failed to save notification settings");
    } finally {
      setIsSaving(false);
    }
  };

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const NotificationItem = ({ label, description, checked, onChange }) => (
    <div className="flex items-start gap-3 mb-4 ml-60">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={isSaving}
        className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );

  NotificationItem.propTypes = {
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg px-8 py-6 shadow-sm">
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
    );
  }

  return (
    <div className="bg-white rounded-lg px-8 py-6 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            Your Notifications
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Please update your notification preferences here
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

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-md font-semibold text-gray-900 mb-4">
          Notifications
        </h3>

        <NotificationItem
          label="Allow Group Notifications"
          description="You will be notified when a new group arrives."
          checked={notifications.groupNotifications}
          onChange={() => handleNotificationChange("groupNotifications")}
        />

        <NotificationItem
          label="Email Notification"
          description="You will be notified when a new email arrives."
          checked={notifications.emailNotifications}
          onChange={() => handleNotificationChange("emailNotifications")}
        />

        <NotificationItem
          label="Sound Notification"
          description="You will be notified with sound when someone messages you."
          checked={notifications.soundNotifications}
          onChange={() => handleNotificationChange("soundNotifications")}
        />

        <NotificationItem
          label="Allow Job Post Notifications"
          description="You will be notified with sound when any job opening alerts."
          checked={notifications.jobPostNotifications}
          onChange={() => handleNotificationChange("jobPostNotifications")}
        />

        <NotificationItem
          label="Allow Page Notifications"
          description="You will be notified with sound when any job opening alerts."
          checked={notifications.pageNotifications}
          onChange={() => handleNotificationChange("pageNotifications")}
        />

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-md font-semibold text-gray-900">
                Quiet Hours
              </h4>
              <p className="text-sm text-gray-500">
                Set specific times when notifications are muted to avoid
                disturbances during your chosen time
              </p>
            </div>
            <Switch
              checked={quietHours}
              onChange={setQuietHours}
              disabled={isSaving}
              className={`${
                quietHours ? "bg-blue-600" : "bg-gray-300"
              } relative inline-flex h-[20px] w-[40px] items-center rounded-full transition-colors duration-200 focus:outline-none disabled:opacity-50`}
            >
              <span
                className={`${
                  quietHours ? "translate-x-5" : "translate-x-1"
                } inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          {quietHours && (
            <div className="mt-4 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700 font-medium">
                  From
                </label>
                <input
                  type="time"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                  disabled={isSaving}
                  className="border px-2 py-1 rounded-md text-sm shadow-sm disabled:opacity-50"
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700 font-medium">To</label>
                <input
                  type="time"
                  value={toTime}
                  onChange={(e) => setToTime(e.target.value)}
                  disabled={isSaving}
                  className="border px-2 py-1 rounded-md text-sm shadow-sm disabled:opacity-50"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={weekendOnly}
                  onChange={() => setWeekendOnly(!weekendOnly)}
                  disabled={isSaving}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded disabled:opacity-50"
                />
                <label className="text-sm text-gray-700 font-medium">
                  Weekends
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
