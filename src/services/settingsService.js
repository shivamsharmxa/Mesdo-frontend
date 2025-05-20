import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5004";

// Get auth token from localStorage
const getAuthToken = () => {
  const token = localStorage.getItem("token");
  console.log("Current token:", token); // Debug log
  return token;
};

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Request headers:", config.headers); // Debug log
    } else {
      console.warn("No auth token found!"); // Debug log
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", {
      status: error.response?.status,
      data: error.response?.data,
      headers: error.config?.headers,
    });
    return Promise.reject(error);
  }
);

// Account Settings
export const getAccountSettings = async () => {
  try {
    const response = await api.get(`/api/settings/account`);
    return response.data;
  } catch (error) {
    console.error("getAccountSettings error:", error);
    throw error;
  }
};

export const updateAccountSettings = async (data) => {
  const response = await api.put(`/api/settings/account`, data);
  return response.data;
};

export const updateProfileImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("profilePicture", imageFile);
  const response = await api.put(
    `/api/settings/account/profile-picture`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

// Privacy Settings
export const getPrivacySettings = async () => {
  const response = await api.get(`/api/settings/privacy`);
  return response.data;
};

export const updatePrivacySettings = async (data) => {
  const response = await api.put(`/api/settings/privacy`, data);
  return response.data;
};

// Notification Settings
export const getNotificationSettings = async () => {
  const response = await api.get(`/api/settings/notifications`);
  return response.data;
};

export const updateNotificationSettings = async (data) => {
  const response = await api.put(`/api/settings/notifications`, data);
  return response.data;
};

// Preferences Settings
export const getPreferencesSettings = async () => {
  const response = await api.get(`/api/settings/preferences`);
  return response.data;
};

export const updatePreferencesSettings = async (data) => {
  const response = await api.put(`/api/settings/preferences`, data);
  return response.data;
};

// Appearance Settings
export const getAppearanceSettings = async () => {
  const response = await api.get(`/api/settings/appearance`);
  return response.data;
};

export const updateAppearanceSettings = async (data) => {
  const response = await api.put(`/api/settings/appearance`, data);
  return response.data;
};
