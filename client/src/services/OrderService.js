import GenericService from "./GenericService";
import axiosInstance from "./axiosInstance";
// import jwtService from "app/services/jwtService";
class OrderService extends GenericService {
  constructor() {
    super();
  }

  orderProduct = (data) => this.post("/api/order", data);
  addFeedback = (data) => this.post("/api/order/feedback", data);
}
const orderService = new OrderService();
export default orderService;
