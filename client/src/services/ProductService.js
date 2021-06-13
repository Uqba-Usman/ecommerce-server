import GenericService from "./GenericService";
import axiosInstance from "./axiosInstance";
// import jwtService from "app/services/jwtService";
class ProductService extends GenericService {
  constructor() {
    super();
  }
  getAllProducts = () => this.get("/api/products");
  getSingleProduct = (id) => this.get("/api/products/" + id);
  newProduct = (data) => this.post("/api/products", data);
  updateProduct = (id, data) => this.put("/api/products/" + id, data);
  deleteProduct = (id) => this.delete("/api/products/" + id);
}
const productService = new ProductService();
export default productService;
