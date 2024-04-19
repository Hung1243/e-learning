import axios from "axios";

export const USER_LOGIN = "userLogin";

const baseUrl = "https://elearningnew.cybersoft.edu.vn/api/";

const config = {
  baseURL: baseUrl,
  timeout: 30000,
};

const http = axios.create(config);

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("AccessToken")?.replace(/"/g, "");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["TokenCybersoft"] =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjE1LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODQwOTYwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE4NTU3MjAwfQ.vY7VplGBpsG599RYLEeMeajQNALOV5QUJ2dGV6Ow_q4";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API request failed:", error);
    return Promise.reject(error);
  }
);

export default http;
