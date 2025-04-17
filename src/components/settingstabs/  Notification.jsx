import { useState } from "react";
import { Switch } from "@headlessui/react";

const Notification = () => {
  const [quietHours, setQuietHours] = useState(true);
  const [fromTime, setFromTime] = useState("22:00");
  const [toTime, setToTime] = useState("08:00");

  const [weekendOnly, setWeekendOnly] = useState(true);

  const NotificationItem = ({ label, description, checked, onChange }) => (
    <div className="flex items-start gap-3 mb-4 ml-60">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg px-8 py-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">
        Your Notifications
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Please update your notification preferences here
      </p>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-md font-semibold text-gray-900 mb-4">
          Notifications
        </h3>

        <NotificationItem
          label="Allow Group Notifications"
          description="You will be notified when a new group arrives."
          onChange={() => {}}
        />

        <NotificationItem
          label="Email Notification"
          description="You will be notified when a new email arrives."
          onChange={() => {}}
        />

        <NotificationItem
          label="Sound Notification"
          description="You will be notified with sound when someone messages you."
          onChange={() => {}}
        />

        <NotificationItem
          label="Allow Job Post Notifications"
          description="You will be notified with sound when any job opening alerts."
          onChange={() => {}}
        />

        <NotificationItem
          label="Allow Page Notifications"
          description="You will be notified with sound when any job opening alerts."
          onChange={() => {}}
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
              className={`${
                quietHours ? "bg-blue-600" : "bg-gray-300"
              } relative inline-flex h-[20px] w-[40px] items-center rounded-full transition-colors duration-200 focus:outline-none`}
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
                  className="border px-2 py-1 rounded-md text-sm shadow-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700 font-medium">To</label>
                <input
                  type="time"
                  value={toTime}
                  onChange={(e) => setToTime(e.target.value)}
                  className="border px-2 py-1 rounded-md text-sm shadow-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={weekendOnly}
                  onChange={() => setWeekendOnly(!weekendOnly)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
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
