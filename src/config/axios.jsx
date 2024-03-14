import axios from "axios";

export const USER_LOGIN = "userLogin";
export const TOKEN = "accessToken";

const baseUrl = "https://elearningnew.cybersoft.edu.vn/api/";

const config = {
  baseURL: baseUrl,
  timeout: 30000,
};

const http = axios.create(config);

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  });

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API request failed:", error);
    return Promise.reject(error);
  });

export default http;






// <------------------------------------ ver 2 tested --------------------------------------->

// import axios from "axios";

// export const USER_LOGIN = "userLogin";
// export const TOKEN = "accessToken";

// const baseUrl = "https://elearningnew.cybersoft.edu.vn/api/";

// const config = {
//   baseURL: baseUrl,
//   timeout: 30000, // 30000 milliseconds (30 seconds) should be sufficient
// };

// const http = axios.create(config);

// // Set authorization token for every request before sending
// http.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token")?.replaceAll('"', "");
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// // Log and handle errors globally
// http.interceptors.response.use((response) => {
//   return response;
// }, (error) => {
//   console.error("API request failed:", error);
//   return Promise.reject(error);
// });

// export default http;


// <--------------------------- ver 1 tested ----------------------------->

// import axios from "axios";
// export const USER_LOGIN = "userLogin";
// export const TOKEN = "accessToken";


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


