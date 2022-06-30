import axios from "axios";

// buat base URL
export const API = axios.create({
  baseURL: "",
});
// http://localhost:5000/api/v1/

// Set Authorization Token Header
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
// export const API = () => {
//   const baseUrl = ""
  
//   const executeAPI = async (endpoint, config) => {
//     const response = await fetch(baseUrl + endpoint, config);
//     const data = await response.json();
//     return data;
//   };

//   return {
//     get: executeAPI,
//     post: executeAPI,
//     patch: executeAPI,
//     delete: executeAPI,
//   };
// };