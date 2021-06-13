import React from "react";
import { Form } from "react-bootstrap";
import FileBase from "react-file-base64";
import productService from "./../../services/ProductService";
import { toast } from "react-toastify";

function AddNewProduct(props) {
  const [data, setData] = React.useState({
    title: "",
    price: "",
    category: "",
    description: "",
    saleApply: "",
    salePercent: "",
    isHotProduct: "",
    // selectedFile:"",
  });

  console.log("PROPS", props);
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [saleApply, setSaleApply] = React.useState(true);
  const [isHotProduct, setIsHotProduct] = React.useState(false);
  const [salePercent, setSalePercent] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState("");

  const handleSubmit = () => {
    const sendData = {
      title,
      price,
      category,
      description,
      saleApply,
      salePercent,
      isHotProduct,
      selectedFile,
    };
    console.log("DATA", sendData);
    // productService
    //   .newProduct(sendData)
    //   .then((response) => {
    //     toast.success("New product added successfully");
    //     console.log("Response: ", response);
    //     props.history.push("/");
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //   });
  };

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
  };

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 center p-50 background-white b-r-6">
            <h3>New Product</h3>
            <form>
              <div class="form-group m-b-5">
                <label class="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div class="form-group m-b-5">
                <label class="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div class="form-group m-b-10">
                <label class="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
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
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="form-control"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
              <div>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setSelectedFile(base64)}
                />
              </div>
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
