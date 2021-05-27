import React from "react";

const PoloFooter = () => {
  return (
    <footer id="footer" className="inverted">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="widget">
                <div className="widget-title">ALTCABS</div>
                <p className="mb-5">
                  <br />
                  All rights reserved. Copyright © 2021.
                </p>
                <a href="/" className="btn btn-info" target="_blank">
                  Get Quotation
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Destiations</div>
                    <ul className="list">
                      <li>
                        <a href="/sitemap/destination/aberdeen">Aberdeen</a>
                      </li>
                      <li>
                        <a href="/sitemap/destination/heathrow">Heathrow</a>
                      </li>
                      <li>
                        <a href="/sitemap/destination/piccadilly">Piccadily</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Affiliate</div>
                    <ul className="list">
                      <li>
                        <a href="/affiliate-program">What we Offer</a>
                      </li>
                      <li>
                        <a href="/affiliate-program-terms-and-conditions">
                          Terms and Conditions
                        </a>
                      </li>
                      <li>
                        <a href="/affiliate/apply">Apply</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="widget">
                    <div className="widget-title">Support</div>
                    <ul className="list">
                      <li>
                        <a href="/help">Help Desk</a>
                      </li>
                      <li>
                        <a href="/sitemap/1">Site Map</a>
                      </li>
                      <li>
                        <a href="/">Home</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="copyright-text text-center">
            © 2021 ALTCABS - All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PoloFooter;
