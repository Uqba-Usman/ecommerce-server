import React from "react";
import InputField from "../../component/InputField";
import Joi from "@hapi/joi";
import adminService from "../../services/AdminService";
import { toast } from "react-toastify";

function AdminLogin(props) {
  const [data, setData] = React.useState({ email: "", password: "" });

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
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
          "string.empty": "Email is not allowed to be empty",
        }),
      password: Joi.string().min(3).required().messages({
        "string.empty": "Password is not allowed to be empty",
        "string.min": "Pasword must be atleast 3 characters long",
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

    console.log("Submitted", data);
    console.log("PROPS: ", props);
    console.log("LS", localStorage.getItem("token"));
    adminService
      .login(data.email, data.password)
      .then((res) => {
        console.log("Login", res);
        toast.success("Login Successfully");
        window.location.href = "/productsTable";
      })
      .catch((err) => {
        console.log("ERROR", err);
        toast.error("Wrong Email Or Password");
      });
  };

  return (
    <section id="page-content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h4>Admin Login</h4>
              </div>
            </div>
          </div>

          <div className="col-md-12 ">
            <InputField
              name="email"
              label="Email"
              error={error}
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 ">
            <InputField
              name="password"
              label="Password"
              type="password"
              error={error}
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="row container">
            <div className="col-md-12 ">
              <a
                onClick={handleSubmit}
                className="btn btn-info icon-left float-right mt-3"
                // href="/jazzcashAdminLogin"
              >
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
