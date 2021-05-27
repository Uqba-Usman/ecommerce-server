import GenericService from "./GenericService";
import axiosInstance from "./axiosInstance";
// import jwtService from "app/services/jwtService";
class ProductService extends GenericService {
  constructor() {
    super();
  }
  getAllProducts = () => this.get("/products");
  getSingleProduct = (id) => this.get("/products/" + id);
  newProduct = (data) => this.post("/products", data);
  updateProduct = (id, data) => this.put("/products/" + id, data);
  deleteProduct = (id) => this.delete("/products/" + id);
}
const productService = new ProductService();
export default productService;
