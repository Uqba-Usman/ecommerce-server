import React from "react";
import { Form } from "react-bootstrap";
import FileBase from "react-file-base64";
import productService from "./../../services/ProductService";
import { toast } from "react-toastify";

function AddNewProduct(props) {
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
    const data = {
      title,
      price,
      category,
      description,
      saleApply,
      salePercent,
      isHotProduct,
      selectedFile,
    };
    console.log("DATA", data);
    productService
      .newProduct(data)
      .then((response) => {
        toast.success("New product added successfully");
        console.log("Response: ", response);
        props.history.push("/");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
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
