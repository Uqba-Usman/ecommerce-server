import React, { useState } from "react";

function JazzcashCheckout() {
  const [phoneNo, setPhoneNo] = useState("");
  const [cnic, setCnic] = useState("");
  return (
    <section id="shop-checkout">
      <div className="container">
        <div className="shop-cart">
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
                        <span className="amount">20.00</span>
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
                        <span className="amount">18.99</span>
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
                        <span className="amount">18.00</span>
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
                        <span className="amount">68.97</span>
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
                            <span className="amount">Rs.125.96</span>
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
                            <strong>Total</strong>
                          </td>
                          <td className="cart-product-name text-right">
                            <span className="amount color lead">
                              <strong>Rs.100.76</strong>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-lg-12">
                  <h4 className="upper">Payment Details</h4>
                  <p>Pay with Jazzcash</p>
                  <div className="col-md-12 ">
                    <CustomInput
                      title="Phone Number"
                      value={phoneNo}
                      onChange={(val) => setPhoneNo(val)}
                    />
                  </div>
                  <div className="col-md-12 ">
                    <CustomInput
                      title="Last 6 digit of CNIC"
                      value={cnic}
                      onChange={(val) => setCnic(val)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <a
                    className="btn icon-left float-right mt-3"
                    href="/checkoutComplete"
                  >
                    <span>Buy</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CustomInput = ({ title, value, onChange }) => (
  <div className=" form-group ">
    <label className="form-label ">{title}</label>
    <input
      className="form-control form-border"
      type="text"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      // className="form-control"
    />
  </div>
);

export default JazzcashCheckout;
