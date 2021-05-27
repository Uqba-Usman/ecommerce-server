import React from "react";

const PoloLoaderModal = ({ show, id }) => {
  const [modalId, setModelId] = React.useState(id ? id : "loaderModalID");
  React.useEffect(() => {
    if (typeof window != "undefined")
      $(document).on("shown.bs.modal", "#" + modalId, function () {
        $(".modal-backdrop").before($(this));
      });
  }, []);
  React.useEffect(() => {
    // console.log("Calling show loader use Effect");
    if (typeof window != "undefined") {
      if (show) {
        // console.log("Showing Loader");
        $("#" + modalId).modal({
          show: true,
          backgrop: "static",
          keyboard: false,
        });
      } else {
        // console.log("Hiding Loader");
        $("#" + modalId).modal("hide");
      }
    }
  }, [show]);
  return (
    <>
      <div
        className="modal fade bd-example-modal-lg"
        id={modalId}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">Loading ...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoloLoaderModal;
