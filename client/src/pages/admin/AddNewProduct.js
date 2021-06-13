import React from "react";
import { Form } from "react-bootstrap";
import FileBase from "react-file-base64";
import Joi from "@hapi/joi";
import InputField from "../../component/InputField";
import productService from "./../../services/ProductService";
import { toast } from "react-toastify";

function AddNewProduct(props) {
  const [data, setData] = React.useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });

  console.log("PROPS", props);

  const [saleApply, setSaleApply] = React.useState(true);
  const [isHotProduct, setIsHotProduct] = React.useState(false);
  const [salePercent, setSalePercent] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState("");

  const [error, setError] = React.useState();
  const [fileError, setFileError] = React.useState("");

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
      title: Joi.string().required().messages({
        "string.empty": "Title is not allowed to be empty",
      }),
      price: Joi.string().required().messages({
        "string.empty": "Price is not allowed to be empty",
      }),
      category: Joi.string().required().messages({
        "string.empty": "Category is not allowed to be empty",
      }),
      description: Joi.string().required().messages({
        "string.empty": "Description is not allowed to be empty",
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

    if (selectedFile === "") {
      setFileError("File is not allowed to be empty");
      return;
    } else {
      setFileError("");
    }

    const sendData = {
      title: data.title,
      price: data.price,
      category: data.category,
      description: data.description,
      saleApply,
      salePercent,
      isHotProduct,
      selectedFile,
    };
    console.log("DATA", sendData);
    productService
      .newProduct(sendData)
      .then((response) => {
        toast.success("New product added successfully");
        console.log("Response: ", response);
        props.history.push("/productsTable");
      })
      .catch((error) => {
        console.log("Error: ", error);
        toast.error("Error Occured: Product not added.");
      });

    console.log("Validate Successfully");
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 center p-50 background-white b-r-6">
            <h3>New Product</h3>
            <form>
              <div class="m-b-5">
                <InputField
                  name="title"
                  label="Title"
                  error={error}
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div class="m-b-5">
                <InputField
                  name="price"
                  label="Price"
                  error={error}
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div class=" m-b-10">
                <InputField
                  name="category"
                  label="Category"
                  error={error}
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <Form.Check
                type="switch"
                id="custom-switch"
                label="Apply Sale"
                size="lg"
                checked={saleApply}
                onChange={(e) => {
                  setSaleApply(e.target.checked);
                  console.log("sale", e.target.checked);
                }}
              />
              {saleApply && (
                <div class="form-group m-b-10">
                  <label class="form-label">Sale Percent</label>
                  <input
                    type="text"
                    className="form-control"
                    value={salePercent}
                    onChange={(e) => {
                      setSalePercent(e.target.value);
                    }}
                  />
                </div>
              )}

              <div class="form-group m-b-10">
                <label class="form-label">Description</label>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="5"
                  className="form-control"
                  value={data.description}
                  onChange={handleChange}
                ></textarea>
                {error && error.errorData.details.description && (
                  <p style={{ color: "red" }}>
                    {error.errorData.details.description}
                  </p>
                )}
              </div>
              <div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setSelectedFile(base64)}
                />
                {fileError !== "" && (
                  <p style={{ color: "red" }}>
                    File is not allowed to be empty
                  </p>
                )}
              </div>
              <div className="m-t-5 m-b-10">
                <Form.Check
                  type="checkbox"
                  label="Mark as Hot Product"
                  size="lg"
                  // disabled={disabled}
                  // checked={booking.oneWay}
                  checked={isHotProduct}
                  onChange={(e) => {
                    setIsHotProduct(e.target.checked);
                    console.log("hot", e.target.checked);
                  }}
                />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-info"
                  type="button"
                  onClick={handleSubmit}
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewProduct;
