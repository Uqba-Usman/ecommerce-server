import React from "react";
import PoloFooter from "./PoloFooter";
import PoloNavBarHeader from "./PoloNavBarHeader";
import PoloTopBar from "./PoloTopBar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const PoloLayout = ({ children }) => {
  return (
    <div className="body-inner">
      <PoloTopBar />
      <PoloNavBarHeader />
      <div id="page-content" style={{ minHeight: "200px" }}>
        <div className="container-fluid">{children}</div>
      </div>
      {/* <ToastContainer position="bottom-center" /> */}
      <PoloFooter />
    </div>
  );
};

export default PoloLayout;
