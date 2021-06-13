import React from "react";
import BeautyStars from "beauty-stars";
import orderService from "../../../services/OrderService";

function CheckoutComplete(props) {
  const [ratingValue, setRatingValue] = React.useState(3);
  const [comments, setComments] = React.useState("");

  const handleSubmit = () => {
    const data = {
      ratingValue,
      comments,
      postedBy: props.history.location.sendData,
    };
    orderService
      .addFeedback(data)
      .then((response) => {
        console.log("RES:", response);
        props.history.push("/");
      })
      .catch((error) => console.log("ERROR:", error));
  };
  return (
    <>
      {/* Page title */}
      <section id="page-title">
        <div className="container">
          <div className="page-title">
            <h1>Order Completed</h1>
            <span>Congratulations! Your order is completed!</span>
          </div>
          <div className="breadcrumb">
            <ul>
              {/* <li>
                <a href="#">Home</a>
              </li> */}
              <li>
                <a href="#">Shop</a>
              </li>
              <li className="active">
                <a href="#">Order Completed</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* end: Page title */}
      {/* SHOP CHECKOUT COMPLETED */}
      <section id="shop-checkout-completed">
        <div className="container">
          <div className="p-t-10 m-b-20 text-center">
            <div className="text-center">
              <h3>Congratulations! Your order is completed!</h3>
              {/* <p>
                Your order is number #123456. You can
                <a href className="text-underline">
                  <mark>view your order</mark>
                </a>{" "}
                on your account page, when you are logged in.
              </p> */}
            </div>
            {/* <a href="#" className="btn icon-left m-r-10">
              <span>Go to login page</span>
            </a> */}
            <a className="btn icon-left" href="/">
              <span>Return To Shop</span>
            </a>
          </div>
        </div>
      </section>
      {/* end: SHOP CHECKOUT COMPLETED */}

      <div class="container">
        <div class="row">
          <div class="col-lg-5 center p-50 background-white b-r-6">
            <h3>How you rate us!!!</h3>
            <div className="col-md-12">
              <BeautyStars
                inactiveColor="#565c6e"
                activeColor="#e6d815"
                value={ratingValue}
                // editable={!booking.isRated}
                size={25}
                gap={12}
                onChange={(newValue) => {
                  setRatingValue(newValue);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                <bold> Comments</bold>
              </label>
              <textarea
                name=""
                id=""
                cols="15"
                rows="6"
                // disabled={booking.isRated}
                className="form-control form-border"
                value={comments}
                onChange={(e) => {
                  setComments(e.target.value);
                  console.log("CHANGE VALUE", e.target.value);
                }}
              ></textarea>
            </div>

            <button
              className="btn btn-info m-5"
              // disabled={booking.isRated}
              onClick={handleSubmit}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutComplete;
