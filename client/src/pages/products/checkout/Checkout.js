import React from "react";

function Checkout() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");

  const confirm = () => {};
  return (
    <section id="page-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4>Shipping Details</h4>
              </div>

              <div className="col-md-6 ">
                <CustomInput
                  title="Name"
                  value={name}
                  onChange={(val) => setName(val)}
                />
              </div>
              <div className="col-md-6">
                <CustomInput
                  title="Email"
                  value={email}
                  onChange={(val) => setEmail(val)}
                />
              </div>
              <div className="col-md-6">
                <CustomInput
                  title="Phone"
                  value={phone}
                  onChange={(val) => setPhone(val)}
                />
              </div>
              <div className="col-md-6">
                <CustomInput
                  title="Address"
                  value={address}
                  onChange={(val) => setAddress(val)}
                />
              </div>
            </div>
          </div>

          <div className="row container">
            <div className="col-md-12 ">
              <a
                className="btn icon-left float-right mt-3"
                href="/jazzcashCheckout"
              >
                <span>Proceed to Payment</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="seperator">
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
                    type="radio"
                    name="RadioInputName"
                    defaultValue="Value1"
                    id="Radio1"
                  />
                  <label className="list-group-item" htmlFor="Radio1">
                    Direct Bank Transfer
                  </label>
                  <input
                    type="radio"
                    name="RadioInputName"
                    defaultValue="Value2"
                    id="Radio2"
                  />
                  <label className="list-group-item" htmlFor="Radio2">
                    Cheque Payment
                  </label>
                  <input
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
      */}
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

export default Checkout;
