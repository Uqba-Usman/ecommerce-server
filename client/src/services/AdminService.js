import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class AdminService extends GenericService {
  constructor() {
    super();
  }
  adminLogin = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("/api/user/admin/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          console.log("TOKEN", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  userLogin = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("/api/user/login", { email, password })
        .then((token) => {
          localStorage.setItem("token", token);
          console.log("TOKEN", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  userSignup = (name, email, password) =>
    this.post("/api/user/signup", { name, email, password });

  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role === "admin") return true;
      else return false;
    } else return false;
  };
}
let adminService = new AdminService();
export default adminService;
