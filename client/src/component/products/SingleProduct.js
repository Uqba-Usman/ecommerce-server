import React from "react";

function SingleProduct({ product }) {
  console.log("Single Product", product);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="grid-item">
        <div className="product">
          <div className="product-image">
            <a href={`/products/productDetail/${product._id}`}>
              <img
                src={product.selectedFile}
                //  src="polo/images/shop/products/1.jpg"
              ></img>
            </a>
            <a href={`/products/productDetail/${product._id}`}>
              <img
                src={product.selectedFile}
                // src="polo/images/shop/products/2.jpg"
              ></img>
            </a>
            {product.isHotProduct && <span className="product-hot">HOT</span>}
            {product.newProduct && <span className="product-new">NEW</span>}
            {product.saleApply && product.salePercent && (
              <>
                <span className="product-sale">SALE</span>
                <span className="product-sale-off">
                  {product.salePercent}% Off
                </span>
              </>
            )}

            <span className="product-wishlist">
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
            </span>
            <div className="product-overlay">
              <a href={`/products/productDetail/${product._id}`}>Quick View</a>
            </div>
          </div>
          <div className="product-description">
            <div className="product-category">{product.category}</div>
            <div className="product-title">
              <h3>
                <a href={`/products/productDetail/${product._id}`}>
                  {product.title}
                </a>
              </h3>
            </div>
            <div className="product-price">
              <ins>{`${product.price}$`}</ins>
            </div>
            <div className="product-rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            {/* <div className="product-reviews">
              <a
                href={`/products/productDetail/${product._id}`}
                className="btn btn-coloured"
              >
                Buy
              </a>
            </div> */}
            <div className="product-reviews">
              <a href="#">6 customer reviews</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

{
  /* <div className="grid-item">
<div className="product">
  <div className="product-image">
    <a href="#">
      <img
        alt="Shop product image!"
        src="/polo/images/shop/products/8.jpg"
      />
    </a>
    <a href="#">
      <img
        alt="Shop product image!"
        src="/polo/images/shop/products/1.jpg"
      />
    </a>
    <span className="product-sale">SALE</span>
    <span className="product-sale-off">50% Off</span>
    <span className="product-wishlist">
      <a href="#">
        <i className="fa fa-heart" />
      </a>
    </span>
    <div className="product-overlay">
      <a href="shop-product-ajax-page.html" data-lightbox="ajax">
        Quick View
      </a>
    </div>
  </div>
  <div className="product-description">
    <div className="product-category">Women</div>
    <div className="product-title">
      <h3>
        <a href="#">Nature Tshirt</a>
      </h3>
    </div>
    <div className="product-price">
      <del>$19.00</del>
      <ins>$15.00</ins>
    </div>
    <div className="product-rate">
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star-half-o" />
    </div>
    <div className="product-reviews">
      <a href="#">5 customer reviews</a>
    </div>
  </div>
</div>
</div>

<div className="grid-item">
<div className="product">
  <div className="product-image">
    <a href="#">
      <img
        alt="Shop product image!"
        src="/polo/images/shop/products/3.jpg"
      />
    </a>
    <a href="#">
      <img
        alt="Shop product image!"
        src="/polo/images/shop/products/7.jpg"
      />
    </a>
    <span className="product-hot">HOT</span>
    <span className="product-wishlist">
      <a href="#">
        <i className="fa fa-heart" />
      </a>
    </span>
    <div className="product-overlay">
      <a href="shop-product-ajax-page.html" data-lightbox="ajax">
        Quick View
      </a>
    </div>
  </div>
  <div className="product-description">
    <div className="product-category">Man</div>
    <div className="product-title">
      <h3>
        <a href="#">Logo Tshirt</a>
      </h3>
    </div>
    <div className="product-price">
      <ins>$39.00</ins>
    </div>
    <div className="product-rate">
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star" />
      <i className="fa fa-star-half-o" />
    </div>
    <div className="product-reviews">
      <a href="#">3 customer reviews</a>
    </div>
  </div>
</div>
</div> */
}
