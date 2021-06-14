import React, { useEffect, useState } from "react";
import productService from "../../../services/ProductService";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
const cookies = new Cookies();

function ProductDetail(props) {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  console.log("PARAM ID", id);
  useEffect(() => {
    productService
      .getSingleProduct(id)
      .then((result) => setProduct(result))
      .catch((error) => console.log("Error", error));
  }, []);

  const [quantity, setQuantity] = React.useState(1);
  const handleIncrement = () => {
    const inc = quantity + 1;
    setQuantity(inc);
  };
  const handleDecrement = () => {
    if (Number(quantity) === 1) return;
    const dec = quantity - 1;

    setQuantity(dec);
    console.log(quantity);
  };

  const handleCart = async () => {
    var cart = [];
    if (cookies.get("cart")) cart = cookies.get("cart");
    console.log("Product: ", product);
    const newCart = { ...product, quantity };
    await delete newCart.selectedFile;
    console.log("newCart: ", newCart);

    if (cart.some((exist) => exist._id === newCart._id)) {
      var index = cart.findIndex((c) => c._id == newCart._id);
      console.log("product already exist in cart at index", index);
      if (cart[index].quantity == newCart.quantity) {
        console.log("Quantity is Same", props);
        return props.history.push("/shoppingCart");
      } else if (cart[index].quantity != newCart.quantity) {
        console.log("Quantity is not Same");
        cart[index] = newCart;
        await cookies.set("cart", cart, { path: "/" });
        return props.history.push("/shoppingCart");
      }
    }

    cart.push(newCart);
    const result = await cookies.set("cart", cart, { path: "/" });
    console.log("RESU: ", result);

    const saveCookieData = cookies.get("cart");
    console.log("saveCookieData", saveCookieData);
    return props.history.push("/shoppingCart");
  };

  return (
    <div className="container">
      <div className="product">
        <div className="row m-b-40">
          <div className="col-lg-5">
            <div className="product-image">
              {/* Carousel slider */}

              <a
                // href="/polo/images/shop/products/product-large.jpg"
                href={product.selectedFile}
                data-lightbox="image"
                title="Shop product image!"
              >
                <img
                  alt="Shop product image!"
                  // src="/polo/images/shop/products/1.jpg"
                  src={product.selectedFile}
                />
              </a>

              {/* Carousel slider */}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="product-description">
              <div className="product-category">{product.category}</div>
              <div className="product-title">
                <h3>
                  <a href="#">{product.title}</a>
                </h3>
              </div>
              <div className="product-price">
                <ins>Rs.{product.price}</ins>
              </div>
              <div className="product-rate">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
              </div>
              <div className="product-reviews">
                <a href="#">3 customer reviews</a>
              </div>
              <div className="seperator m-b-10" />
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
              </p>

              <div className="seperator m-t-20 m-b-10" />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h6>Select quantity</h6>
                <div className="cart-product-quantity">
                  <div className="quantity m-l-5">
                    <input
                      type="button"
                      className="minus"
                      defaultValue="-"
                      onClick={handleDecrement}
                    />
                    <input type="text" className="qty" value={quantity} />
                    <input
                      type="button"
                      className="plus"
                      defaultValue="+"
                      onClick={handleIncrement}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h6>Place Order</h6>
                <a
                  className="btn btn-info"
                  // href="/shoppingCart"
                  onClick={handleCart}
                >
                  <i className="icon-shopping-cart" /> Place Order
                </a>
              </div>
              {/* <button className="btn btn-info">Place Order</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
