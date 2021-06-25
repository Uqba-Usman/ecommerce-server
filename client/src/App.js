import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import RBNavbar from "./RBNavbar/RBNavbar";
import Products from "./pages/products/products/Products";
import ProductDetail from "./pages/products/productDetail/ProductDetail";
import ShoppingCart from "./pages/products/shoppingCart/ShoppingCart";
import AddNewProduct from "./pages/admin/AddNewProduct";
import AdminTable from "./pages/admin/adminTable/AdminTable";
import UpdateProduct from "./pages/products/updateProduct/UpdateProduct";
import ShippingDetails from "./pages/products/shippingDetails/ShippingDetails";
import JazzcashCheckout from "./pages/products/jazzcashCheckout/JazzcashCheckout";
import CheckoutComplete from "./pages/products/checkout/CheckoutComplete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./pages/admin/AdminLogin";
import adminService from "./services/AdminService";
import RBTopbar from "./RBNavbar/RBTopbar";
import RBFooter from "./RBNavbar/RBFooter";
import Login from "./pages/register/Login";
import Signup from "./pages/register/Signup";
import Contact from "./pages/contact/Contact";

import QueryList from "./pages/query/QueryList";
import QueryChat from "./pages/query/QueryChat";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <RBTopbar />
      <RBNavbar />
      <div>
        {/* id="page-content" className="m-t-20 m-b-20"  style={{ minHeight: "200px" }} */}
        <Switch>
          {adminService.isAdmin() ? (
            <Switch>
              {" "}
              <Route
                path="/products/updateProduct/:id"
                component={UpdateProduct}
                exact
              />
              <Route path="/productsTable" component={AdminTable} exact />
              <Route path="/addNewProduct" component={AddNewProduct} exact />
              <Route path="/queryChat/:name" component={QueryChat} exact />
              <Route path="/adminQueryPanel" component={QueryList} exact />
            </Switch>
          ) : (
            <Switch>
              <Route path="/adminLogin" component={AdminLogin} exact />
              <Route
                path="/checkoutComplete"
                component={CheckoutComplete}
                exact
              />
              <Route
                path="/jazzcashCheckout"
                component={JazzcashCheckout}
                exact
              />
              <Route path="/shoppingCart" component={ShoppingCart} exact />
              <Route
                path="/shippingDetails"
                component={ShippingDetails}
                exact
              />
              <Route
                path="/products/productDetail/:id"
                component={ProductDetail}
                exact
              />
              {/* <Route path="/queryChat/:name" component={QueryChat} exact />
              <Route path="/adminQueryPanel" component={QueryList} exact /> */}
              <Route path="/contact" component={Contact} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/signup" component={Signup} exact />
              <Route path="/" component={Products} exact />
            </Switch>
          )}
          {/* <Route
            path="/products/updateProduct/:id"
            component={UpdateProduct}
            exact
          /> */}
          {/* <Route path="/adminLogin" component={AdminLogin} exact /> */}
          {/* <Route path="/contact" component={Contact} exact /> */}
          {/* <Route path="/checkoutComplete" component={CheckoutComplete} exact />
          <Route path="/jazzcashCheckout" component={JazzcashCheckout} exact /> */}
          {/* <Route path="/easypaisa-test" component={EasypaisaTest} exact /> */}
          {/* <Route path="/sdownload" component={SDownload} exact />
          <Route path="/supload" component={SUpload} exact /> */}
          {/* <Route path="/productsTable" component={AdminTable} exact />
          <Route path="/addNewProduct" component={AddNewProduct} exact /> */}
          {/* <Route path="/shoppingCart" component={ShoppingCart} exact />
          <Route path="/shippingDetails" component={ShippingDetails} exact /> */}
          {/* <Route path="/addNewProduct" component={AddNewProduct} exact /> */}
          {/* <Route
            path="/products/productDetail/:id"
            component={ProductDetail}
            exact
          />
          <Route path="/" component={Products} exact /> */}
        </Switch>
      </div>
      <RBFooter />
    </Router>
  );
}

export default App;
