import React from "react";
import CartProduct from "../../../component/products/CartProduct";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function ShoppingCart() {
  const [data, setData] = React.useState(
    cookies.get("cart") ? cookies.get("cart") : []
  );

  return (
    <div className="container">
      <div className="shop-cart">
        <div className="table table-sm table-striped table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="cart-product-remove" />
                <th className="cart-product-thumbnail">Product</th>
                <th className="cart-product-name">Description</th>
                <th className="cart-product-price">Unit Price</th>
                <th className="cart-product-quantity">Quantity</th>
                <th className="cart-product-subtotal">Total</th>
              </tr>
            </thead>
            {data.length === 0 ? (
              <p> No book in your cart</p>
            ) : (
              data.map((book, index) => <CartProduct key={index} book={book} />)
            )}
          </table>
          <a href="#" className="btn icon-left float-right">
            <span>Proceed to Checkout</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
