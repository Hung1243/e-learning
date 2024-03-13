import axios from "axios";
const baseUrl = "https://elearningnew.cybersoft.edu.vn/api/";

const config = {
  baseUrl,
  timeout: 3000000,
};
const api = axios.create(config);
api.defaults.baseURL = baseUrl;
const handleBefore = (config) => {
  const token = localStorage.getItem("token")?.replaceAll('"', "");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
};
const handleError = (error) => {
  console.log(error);
  return;
};
api.interceptors.request.use(handleBefore, null);
// api.interceptors.response.use(null, handleError);

export default api;


// import axios from "axios";
// export const http = axios.create({
//   baseURL: 'https://elearningnew.cybersoft.edu.vn',
//   timeout: 30000,

// })

// http.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     'TokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM'
//   }
//   const getToken = () => {
//     let credentials = localStorage.getItem('credentials');
//     credentials = JSON.parse(credentials);
//     return credentials && credentials.accessToken;
//   };
//   const token = getToken();
//   // console.log(token)
//   if (token) {
//     config.headers = {
//       ...config.headers,
//       "Authorization": `Bearer ${token}`
//     }
//   };
//   return config
// }, (errors) => {
//   return Promise.reject(errors)
// })
