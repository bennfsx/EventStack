import axios from "axios";

// Create an instance of axios with the API base URL
const axiosAPI = axios.create({
  baseURL: "https://asia-southeast1-qrfyp2024.cloudfunctions.net/fyp-api",
});

export default axiosAPI;
