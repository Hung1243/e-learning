// import axios from "axios";
// const baseUrl = "https://elearningnew.cybersoft.edu.vn/api/";

// const config = {
//   baseUrl,
//   timeout: 3000000,
// };
// const api = axios.create(config);
// api.defaults.baseURL = baseUrl;
// const handleBefore = (config) => {
//   const token = localStorage.getItem("token")?.replaceAll('"', "");
//   config.headers["Authorization"] = `Bearer ${token}`;
//   return config;
// };
// const handleError = (error) => {
//   console.log(error);
//   return;
// };
// api.interceptors.request.use(handleBefore, null);
// // api.interceptors.response.use(null, handleError);

// export default api;


import axios from "axios";

// Create a new instance of Axios
const http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
});

// Redux actions
export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";

// Request interceptor to add authorization headers
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle unauthorized access
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle different error status codes
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        // Unauthorized access
        // Handle unauthorized access here, for example, redirect to login page
        alert("Đăng nhập để vào trang này!");
        // window.location.href = '/login';
        // history.push("/login"); // If you want to use history, import it here
      } else if (status === 403) {
        // Forbidden
        // Handle forbidden access
      } else if (status === 404) {
        // Not found
        // Handle not found error
      } else if (status === 400) {
        // Bad request
        // Handle bad request error
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  }
);

export default http;
