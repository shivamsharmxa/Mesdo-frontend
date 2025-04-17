import { useState, useEffect } from "react";

const Appearance = () => {
  const [theme, setTheme] = useState("light");

  // Apply theme to HTML root
  useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.className = systemTheme;
    } else {
      document.documentElement.className = theme;
    }
  }, [theme]);

  return (
    <div className="bg-white rounded-lg px-8 py-6 shadow-sm max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-1">Your</h2>
      <p className="text-sm text-gray-500 mb-6">
        Please update how your experience looks for this device.
      </p>

      <hr className="mb-6" />

      <div className="space-y-4">
        <div className="text-sm text-gray-700 font-medium">Appearance</div>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="system"
            checked={theme === "system"}
            onChange={() => setTheme("system")}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span className="text-gray-800 text-sm">Device Settings</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={() => setTheme("light")}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span className="text-gray-800 text-sm">Light Mode</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
            className="form-radio h-4 w-4 text-blue-600"
          />
          <span className="text-gray-800 text-sm">Dark Mode</span>
        </label>
      </div>
    </div>
  );
};

export default Appearance;
