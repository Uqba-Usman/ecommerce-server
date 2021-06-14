import React, { useState } from "react";
import InputField from "../../../component/InputField";
import orderService from "../../../services/OrderService";
import Joi from "@hapi/joi";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const cookies = new Cookies();

function JazzcashCheckout(props) {
  console.log("Props: ", props);
  console.log("DATA COMING: ", props.history.location.data);
  const [order, setOrder] = React.useState(
    cookies.get("cart") ? cookies.get("cart") : []
  );

  console.log("ORDER: ", order);
  const [data, setData] = React.useState({
    jazzcashPhoneNo: "",
    jazzcashCNIC: "",
  });
  const [error, setError] = React.useState();
  const handleChange = async (e) => {
    setError("");

    let old = { ...data };
    old[e.target.name] = e.target.value;
    console.log("Old", old);
    await setData(old);
  };

  const formatJoiError = (error) => {
    const errorToReturn = {};
    errorToReturn._original = error._original;
    errorToReturn.details = {};
    error.details.forEach((detail) => {
      errorToReturn.details[detail.path] = detail.message;
    });
    console.log("ErrorToReturn: ", errorToReturn);

    return errorToReturn;
  };

  const validateData = (data) => {
    const schema = Joi.object({
      jazzcashPhoneNo: Joi.string().required().messages({
        "string.empty": "Phone No is not allowed to be empty",
      }),
      jazzcashCNIC: Joi.string().required().messages({
        "string.empty": "CNIC is not allowed to be empty",
      }),
    }).options({ abortEarly: false });

    return schema.validate(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let { error } = validateData(data);
    console.log("Result", error);
    if (error) {
      let errorData = formatJoiError(error);
      console.log(errorData);
      setError({ errorData: errorData || null });
      console.log(error);
      return;
    }

    const sendData = {
      jazzcashDetail: data,
      orderProducts: order,
      shippingDetail: props.history.location.data,
      orderTotal: getSubtotal(),
    };

    orderService
      .orderProduct(sendData)
      .then((res) => {
        console.log("Res: ", res);
        toast.success("Order Complete");
        props.history.push({
          pathname: "/checkoutComplete",
          sendData,
        });
      })
      .catch((err) => {
        console.log("ERROR: ", err);
        toast.error("Error Occured In Payment");
        // toast.error(err);
      });

    console.log("Validate Successfully");
  };

  const getSubtotal = () => {
    var calculateTotal = 0;
    for (var i = 0; i < order.length; i++) {
      console.log("QP", Number(order[i].quantity));
      calculateTotal += order[i].quantity * Number(order[i].price);
    }
    console.log("calculateTotal: ", calculateTotal);
    return calculateTotal;
  };

  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    console.log("Object.keys(data[0]): ", data);
    console.log("ARRAY: ", array);
    const keys = Object.keys(array[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  // Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  const Export = ({ onExport }) => (
    <button onClick={(e) => onExport(e.target.value)}>Export</button>
  );
  const actionsMemo = () => {
    const filteredItems = cookies.get("cart") ? cookies.get("cart") : [];
    downloadCSV(filteredItems);
  };

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
                    {order.map((or, index) => (
                      <tr key={index}>
                        <td className="cart-product-thumbnail">
                          <div className="cart-product-thumbnail-name">
                            {or.title}
                          </div>
                        </td>
                        <td className="cart-product-description">
                          <p>{or.description}</p>
                        </td>
                        <td className="cart-product-subtotal">
                          <span className="amount">
                            {`Rs.${Number(or.price) * or.quantity}`}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <button className="btn btn-info" onClick={actionsMemo}>
                  Export Receipt
                </button>
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
                            <span className="amount">{`Rs.${getSubtotal()}`}</span>
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
                              <strong>{`Rs.${getSubtotal()}`}</strong>
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
                    <InputField
                      name="jazzcashPhoneNo"
                      label="Phone No"
                      error={error}
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12 ">
                    <InputField
                      name="jazzcashCNIC"
                      label="CNIC Last 6 digits"
                      error={error}
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <a
                    onClick={handleSubmit}
                    className="btn icon-left float-right mt-3"
                    // href="/checkoutComplete"
                    href="#"
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
