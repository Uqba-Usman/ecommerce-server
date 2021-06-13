import React from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import FileBase from "react-file-base64";
import productService from "../../../services/ProductService";

import { useParams } from "react-router-dom";

function UpdateProduct(props) {
  const [product, setProduct] = React.useState({
    title: "",
    description: "",
    category: "",
    price: "",
    saleApply: "",
    salePercent: "",
    isHotProduct: "",
    selectedFile: "",
  });

  const [fileError, setFileError] = React.useState("");
  // const [title, setTitle] = React.useState(product.title);
  // const [price, setPrice] = React.useState(product.price);
  // const [category, setCategory] = React.useState(product.category);
  // const [description, setDescription] = React.useState(product.description);
  // const [saleApply, setSaleApply] = React.useState(product.saleApply);
  // const [isHotProduct, setIsHotProduct] = React.useState(product.isHotProduct);
  // const [salePercent, setSalePercent] = React.useState(product.salePercent);

  const { id } = useParams();
  console.log("PARAM ID", id);
  React.useEffect(() => {
    productService
      .getSingleProduct(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const handleSubmit = () => {
    // const data = {
    //   title,
    //   price,
    //   category,
    //   description,
    //   saleApply,
    //   salePercent,
    //   isHotProduct,
    // };
    console.log("DATA", product);
    console.log("Selected", product.selectedFile);
    if (product.selectedFile === undefined) {
      setFileError("File is not allowed to be empty");
      return;
    } else {
      setFileError("");
    }

    console.log("DATA", product);
    // productService
    //   .updateProduct(product._id, product)
    //   .then((response) => {
    //     toast.success("Product updated successfully");
    //     props.history.push("/productsTable");
    //     console.log("Response: ", response);
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //   });
  };

  const handleChange = async (e) => {
    let old = { ...product };
    old[e.target.name] = e.target.value;
    console.log("Old", old);
    await setProduct(old);
  };

  const handleCheckChange = async (e) => {
    let old = { ...product };
    old["isHotProduct"] = e.target.checked;
    console.log("Old", old);
    console.log("EVENT name", e.target.name);
    console.log("EVENT CHECK", e.target.checked);
    await setProduct(old);
  };
  const handleFileChange = async (base64) => {
    let old = { ...product };
    old["selectedFile"] = base64;
    console.log("Old", old);
    await setProduct(old);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-5 center p-50 background-white b-r-6">
          <h3>Update Product</h3>
          <form>
            <div class="form-group m-b-5">
              <label class="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={product.title}
                onChange={handleChange}
              />
            </div>
            <div class="form-group m-b-5">
              <label class="form-label">Price</label>
              <input
                type="text"
                name="price"
                className="form-control"
                value={product.price}
                onChange={handleChange}
              />
            </div>
            <div class="form-group m-b-10">
              <label class="form-label">Category</label>
              <input
                type="text"
                name="category"
                className="form-control"
                value={product.category}
                onChange={handleChange}
              />
            </div>

            <Form.Check
              type="switch"
              name="saleApply"
              id="custom-switch"
              label="Apply Sale"
              size="lg"
              checked={product.saleApply}
              onChange={handleChange}
            />
            {product.saleApply && (
              <div class="form-group m-b-10">
                <label class="form-label">Sale Percent</label>
                <input
                  type="text"
                  name="salePercent"
                  className="form-control"
                  value={product.salePercent}
                  onChange={handleChange}
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
                value={product.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => handleFileChange(base64)}
              />
              {fileError !== "" && (
                <p style={{ color: "red" }}>File is not allowed to be empty</p>
              )}
            </div>
            <div className="m-b-10 m-t-5">
              <Form.Check
                type="checkbox"
                label="Mark as Hot Product"
                size="lg"
                checked={product.isHotProduct}
                onChange={handleCheckChange}
              />
            </div>

            <div class="form-group">
              <button class="btn btn-info" type="button" onClick={handleSubmit}>
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
