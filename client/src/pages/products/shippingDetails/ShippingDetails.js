import React from "react";
import InputField from "../../../component/InputField";
import Joi from "@hapi/joi";

function Checkout(props) {
  const [data, setData] = React.useState({
    name: "",
    phone: "",
    email: "",
    address: "",
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
      name: Joi.string().required().messages({
        "string.empty": "Name is not allowed to be empty",
      }),
      phone: Joi.string().required().messages({
        "string.empty": "Phone is not allowed to be empty",
      }),
      email: Joi.string().required().messages({
        "string.empty": "Email is not allowed to be empty and ",
      }),
      address: Joi.string().required().messages({
        "string.empty": "Address is not allowed to be empty",
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

    console.log("Validate Successfully");

    props.history.push({
      pathname: "/jazzcashCheckout",
      data,
    });
    console.log("Validate Successfully");
  };

  return (
    <section id="page-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4>Shipping Details</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <InputField
              name="name"
              label="Name"
              error={error}
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 ">
            <InputField
              name="phone"
              label="Phone"
              error={error}
              value={data.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 ">
            <InputField
              name="email"
              label="Email"
              error={error}
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 ">
            <InputField
              name="address"
              label="Address"
              error={error}
              value={data.address}
              onChange={handleChange}
            />
          </div>
          <div className="row container">
            <div className="col-md-12 ">
              <a
                onClick={handleSubmit}
                className="btn btn-info icon-left float-right mt-3"
                // href="/jazzcashCheckout"
              >
                <span>Proceed to Payment</span>
              </a>
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

export default Checkout;
