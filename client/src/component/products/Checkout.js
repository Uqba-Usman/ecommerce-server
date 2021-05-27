import React from "react";

function Checkout() {
  return (
    <div className="container">
      <div className="shop-cart">
        <form method="post" className="sep-top-md">
          <div className="row">
            <div className="col-lg-6 no-padding">
              <div className="row">
                <div className="col-lg-12">
                  <h4 className="upper">Billing &amp; Shipping Address</h4>
                </div>
                <div className="col-lg-12 form-group">
                  <label className="sr-only">Country</label>
                </div>
                <div className="col-lg-6 form-group">
                  <label className="sr-only">First Name</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    defaultValue
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="sr-only">Last Name</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    defaultValue
                  />
                </div>
                <div className="col-lg-12 form-group">
                  <label className="sr-only">Company Name</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    defaultValue
                  />
                </div>
                <div className="col-lg-12 form-group">
                  <label className="sr-only">Address</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    defaultValue
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="sr-only">Apartment, suite, unit etc.</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc."
                    defaultValue
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="sr-only">Town / City</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                    defaultValue
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="sr-only">State / County</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="State / County"
                    defaultValue
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="sr-only">Postcode / Zip</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Postcode / Zip"
                    value=""
                    defaultValue
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="sr-only">Email</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value=""
                    defaultValue
                  />
                </div>
                <div className="col-lg-6 form-group">
                  <label className="sr-only">Phone</label>
                  <input
                    value=""
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    defaultValue
                  />
                </div>
                <div className="col-lg-12 form-group">
                  <div className="panel panel-naked">
                    <div className="panel-heading">
                      <a
                        href="#collapseThree"
                        className="btn btn-outline btn-sm"
                        data-toggle="collapse"
                        aria-expanded="false"
                      >
                        Create an account?
                      </a>
                    </div>
                    <div
                      className="panel-collapse collapse"
                      id="collapseThree"
                      aria-expanded="false"
                      style={{ height: 0 }}
                    >
                      <div className="panel-body">
                        <p>
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <div className="form-group sep-top-xs">
                          <label className="sr-only">Password</label>
                          <input
                            value=""
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            defaultValue
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="seperator">
          <i className="fa fa-credit-card" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="upper">Your Order</h4>
            <div className="table table-sm table-striped table-responsive table table-bordered table-responsive">
              <table className="table m-b-0">
                <thead>
                  <tr>
                    <th className="cart-product-thumbnail">Product</th>
                    <th className="cart-product-name">Description</th>
                    <th className="cart-product-subtotal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cart-product-thumbnail">
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
                    <td className="cart-product-subtotal">
                      <span className="amount">$20.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart-product-thumbnail">
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
                    <td className="cart-product-subtotal">
                      <span className="amount">$18.99</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart-product-thumbnail">
                      <div className="cart-product-thumbnail-name">
                        Logo Tshirt
                      </div>
                    </td>
                    <td className="cart-product-description">
                      <p>
                        <span>Logo Tshirt</span>
                        <span>Size: L</span>
                        <span>Color: Grey</span>
                        <span>Gender: Man</span>
                      </p>
                    </td>
                    <td className="cart-product-subtotal">
                      <span className="amount">$18.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart-product-thumbnail">
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
                    <td className="cart-product-subtotal">
                      <span className="amount">$68.97</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <h4>Order Total</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="cart-product-name">
                          <strong>Order Subtotal</strong>
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
              </div>
              <div className="col-lg-12">
                <h4 className="upper">Payment Method</h4>
                <div className="list-group">
                  <input
                    value=""
                    type="radio"
                    name="RadioInputName"
                    defaultValue="Value1"
                    id="Radio1"
                  />
                  <label className="list-group-item" htmlFor="Radio1">
                    Direct Bank Transfer
                  </label>
                  <input
                    value=""
                    type="radio"
                    name="RadioInputName"
                    defaultValue="Value2"
                    id="Radio2"
                  />
                  <label className="list-group-item" htmlFor="Radio2">
                    Cheque Payment
                  </label>
                  <input
                    value=""
                    type="radio"
                    name="RadioInputName"
                    defaultValue="Value3"
                    id="Radio3"
                  />
                  <label className="list-group-item" htmlFor="Radio3">
                    <img
                      width={90}
                      alt="paypal"
                      src="images/shop/paypal-logo.png"
                    />
                  </label>
                </div>
              </div>
              <div className="col-lg-12">
                <a className="btn icon-left float-right mt-3" href="#">
                  <span>Proceed to PayPal</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
