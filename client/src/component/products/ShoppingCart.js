import React from "react";

function ShoppingCart() {
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
            <tbody>
              <tr>
                <td className="cart-product-remove">
                  <a href="#">
                    <i className="fa fa-times" />
                  </a>
                </td>
                <td className="cart-product-thumbnail">
                  <a href="#">
                    <img
                      src="images/shop/products/1.jpg"
                      alt="Bolt Sweatshirt"
                    />
                  </a>
                  <div className="cart-product-thumbnail-name">
                    Bolt Sweatshirt
                  </div>
                </td>
                <td className="cart-product-description">
                  <p>
                    <span>Bolt Sweatshirt</span>
                    <span>Size: M</span>
                    <span>Color: Blue</span>
                    <span>Gender: Women</span>
                  </p>
                </td>
                <td className="cart-product-price">
                  <span className="amount">$20.00</span>
                </td>
                <td className="cart-product-quantity">
                  <div className="quantity">
                    <input type="button" className="minus" defaultValue="-" />
                    <input
                      type="text"
                      className="qty"
                      defaultValue={1}
                      name="quantity"
                    />
                    <input type="button" className="plus" defaultValue="+" />
                  </div>
                </td>
                <td className="cart-product-subtotal">
                  <span className="amount">$20.00</span>
                </td>
              </tr>
              <tr>
                <td className="cart-product-remove">
                  <a href="#">
                    <i className="fa fa-times" />
                  </a>
                </td>
                <td className="cart-product-thumbnail">
                  <a href="#">
                    <img
                      alt="Consume Tshirt"
                      src="images/shop/products/2.jpg"
                    />
                  </a>
                  <div className="cart-product-thumbnail-name">
                    Consume Tshirt
                  </div>
                </td>
                <td className="cart-product-description">
                  <p>
                    <span>Consume Tshirt</span>
                    <span>Size: S</span>
                    <span>Color: Blue</span>
                    <span>Gender: Women</span>
                  </p>
                </td>
                <td className="cart-product-price">
                  <span className="amount">$18.99</span>
                </td>
                <td className="cart-product-quantity">
                  <div className="quantity">
                    <input type="button" className="minus" defaultValue="-" />
                    <input
                      type="text"
                      className="qty"
                      defaultValue={1}
                      name="quantity"
                    />
                    <input type="button" className="plus" defaultValue="+" />
                  </div>
                </td>
                <td className="cart-product-subtotal">
                  <span className="amount">$18.99</span>
                </td>
              </tr>
              <tr>
                <td className="cart-product-remove">
                  <a href="#">
                    <i className="fa fa-times" />
                  </a>
                </td>
                <td className="cart-product-thumbnail">
                  <a href="#">
                    <img src="images/shop/products/3.jpg" alt="Logo Tshirt" />
                  </a>
                  <div className="cart-product-thumbnail-name">Logo Tshirt</div>
                </td>
                <td className="cart-product-description">
                  <p>
                    <span>Logo Tshirt</span>
                    <span>Size: L</span>
                    <span>Color: Grey</span>
                    <span>Gender: Man</span>
                  </p>
                </td>
                <td className="cart-product-price">
                  <span className="amount">$9.00</span>
                </td>
                <td className="cart-product-quantity">
                  <div className="quantity">
                    <input type="button" className="minus" defaultValue="-" />
                    <input
                      type="text"
                      className="qty"
                      defaultValue={2}
                      name="quantity"
                    />
                    <input type="button" className="plus" defaultValue="+" />
                  </div>
                </td>
                <td className="cart-product-subtotal">
                  <span className="amount">$18.00</span>
                </td>
              </tr>
              <tr>
                <td className="cart-product-remove">
                  <a href="#">
                    <i className="fa fa-times" />
                  </a>
                </td>
                <td className="cart-product-thumbnail">
                  <a href="#">
                    <img
                      src="images/shop/products/5.jpg"
                      alt="Grey Sweatshirt"
                    />
                  </a>
                  <div className="cart-product-thumbnail-name">
                    Grey Sweatshirt
                  </div>
                </td>
                <td className="cart-product-description">
                  <p>
                    <span>Grey Sweatshirt</span>
                    <span>Size: L</span>
                    <span>Color: Grey</span>
                    <span>Gender: Man</span>
                  </p>
                </td>
                <td className="cart-product-price">
                  <span className="amount">$22.99</span>
                </td>
                <td className="cart-product-quantity">
                  <div className="quantity">
                    <input type="button" className="minus" defaultValue="-" />
                    <input
                      type="text"
                      className="qty"
                      defaultValue={3}
                      name="quantity"
                    />
                    <input type="button" className="plus" defaultValue="+" />
                  </div>
                </td>
                <td className="cart-product-subtotal">
                  <span className="amount">$68.97</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <hr className="space" />
          <div className="col-lg-6"></div>
          <div className="col-lg-6 p-r-10 ">
            <div className="table-responsive">
              <h4>Cart Subtotal</h4>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="cart-product-name">
                      <strong>Cart Subtotal</strong>
                    </td>
                    <td className="cart-product-name text-right">
                      <span className="amount">$125.96</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart-product-name">
                      <strong>Shipping</strong>
                    </td>
                    <td className="cart-product-name  text-right">
                      <span className="amount">Free Shipping</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart-product-name">
                      <strong>Coupon</strong>
                    </td>
                    <td className="cart-product-name  text-right">
                      <span className="amount">-20%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart-product-name">
                      <strong>Total</strong>
                    </td>
                    <td className="cart-product-name text-right">
                      <span className="amount color lead">
                        <strong>$100.76</strong>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="#" className="btn icon-left float-right">
              <span>Proceed to Checkout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
