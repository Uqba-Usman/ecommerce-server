import axios from "axios";
let axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  // withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
// axiosInstance.defaults.headers.common["x-auth-token"] = localStorage.getItem(
//   "jwt_access_token"
// )
//   ? localStorage.getItem("jwt_access_token").toString()
//   : "";

// axiosInstance.defaults.headers.common["companyId"] = localStorage.getItem(
//   "companyId"
// )
//   ? localStorage.getItem("companyId").toString()
//   : "";

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
// axiosInstance.interceptors.response.use(
//   response => successHandler(response),
//   error => errorHandler(error)
// );
// localStorage.setItem("next", "hello");
// localStorage.setItem("lastname", "Smith");

const errorHandler = (error) => {
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  return response;
};
export default axiosInstance;
