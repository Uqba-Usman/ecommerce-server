import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import PoloLayout from "./component/polo/pololayout/PoloLayout";
import RBNavbar from "./RBNavbar/RBNavbar";
import PoloTopBar from "./component/polo/pololayout/PoloTopBar";
import Products from "./component/products/Products";
import ProductDetail from "./pages/products/productDetail/ProductDetail";
import ShoppingCart from "./pages/products/shoppingCart/ShoppingCart";
import AddNewProduct from "./pages/admin/AddNewProduct";
import AdminTable from "./pages/admin/adminTable/AdminTable";
import UpdateProduct from "./pages/products/updateProduct/UpdateProduct";
import Checkout from "./pages/products/checkout/Checkout";
import SUpload from "./SUpload";
import SDownload from "./SDownload";
import EasypaisaTest from "./EasypaisaTest";
import JazzcashCheckout from "./pages/JazzcashCheckout";
import CheckoutComplete from "./pages/products/checkout/CheckoutComplete";
// import AddNewProduct from "./component/products/AddNewProduct";
function App() {
  return (
    <Router>
      <PoloTopBar />
      <RBNavbar />
      <div
        id="page-content"
        className="m-t-20 m-b-20"
        style={{ minHeight: "200px" }}
      >
        <Switch>
          <Route
            path="/products/updateProduct/:id"
            component={UpdateProduct}
            exact
          />
          <Route path="/checkoutComplete" component={CheckoutComplete} exact />
          <Route path="/jazzcashCheckout" component={JazzcashCheckout} exact />
          <Route path="/easypaisa-test" component={EasypaisaTest} exact />
          <Route path="/sdownload" component={SDownload} exact />
          <Route path="/supload" component={SUpload} exact />
          <Route path="/productsTable" component={AdminTable} exact />
          <Route path="/addNewProduct" component={AddNewProduct} exact />
          <Route path="/shoppingCart" component={ShoppingCart} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/addNewProduct" component={AddNewProduct} exact />
          <Route
            path="/products/productDetail/:id"
            component={ProductDetail}
            exact
          />
          <Route path="/" component={Products} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
