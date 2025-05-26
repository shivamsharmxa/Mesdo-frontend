// lib/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Change as per your backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
