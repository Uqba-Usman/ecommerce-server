import React from "react";

const PoloNavBarHeader = ({ layoutData }) => {
  // const router = useRouter();

  return (
    <header id="header" className="light" data-fullwidth="true">
      <div className="header-inner">
        <div className="container">
          {/*Logo*/}
          <div id="logo">
            <a href="/">
              <span className="logo-default">Store</span>
              <span className="logo-dark">Store</span>
            </a>
          </div>
          {/*End: Logo*/}
          {/*end: Header Extras*/}
          {/*Navigation Resposnive Trigger*/}
          <div id="mainMenu-trigger">
            <a className="lines-button x">
              <span className="lines" />
            </a>
          </div>
          {/*end: Navigation Resposnive Trigger*/}
          {/*Navigation*/}
          <div id="mainMenu">
            <div className="container">
              <nav>
                <ul>
                  <li></li>

                  <li>
                    <a href="/products/newProduct">Add Product</a>
                  </li>
                  <li>
                    <a href="/admin/adminTable">Admin Table</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/*end: Navigation*/}
        </div>
      </div>
    </header>
  );
};

export default PoloNavBarHeader;
