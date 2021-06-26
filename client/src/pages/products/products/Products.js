import React, { useEffect, useState } from "react";
import productService from "../../../services/ProductService";
import { paginate } from "../../../component/pagination/paginate";
import Pagination from "../../../component/pagination/Pagination";
import SearchBox from "../../../component/searchBox/SearchBox";

import SingleProduct from "../../../component/products/SingleProduct";
import CarouselSlide from "../../../component/carousel/CarouselSlide";
import _ from "lodash";
import CarouselContainer from "../../../component/carousel/ContainerCarousel";

function Products() {
  // console.log("PROPS:", sendData);
  const [products, setProducts] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
  const [totalCount, setTotalCount] = useState();
  const [data, setData] = useState([]);
  console.log("Initialzation State");

  const getPageData = (cd, cP, pS, sQ) => {
    console.log("GET APGE DTA", cd);
    let filtered = cd;
    if (sQ) {
      filtered = books.filter(
        (b) =>
          b.title.toLowerCase().startsWith(sQ.toLowerCase()) ||
          b.category.toLowerCase().startsWith(sQ.toLowerCase())
      );
    }
    console.log("FILTERED", filtered);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    console.log("SORTED", sorted);
    const newData = paginate(sorted, cP, pS);
    console.log("NEW DATA", newData, filtered.length);
    setData(newData);
    setTotalCount(filtered.length);
  };

  useEffect(() => {
    productService
      .getAllProducts()
      .then((res) => {
        console.log("RESPONSE", res);
        setBooks(res);
        getPageData(res, currentPage, pageSize, searchQuery);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageChange = async (page) => {
    console.log("HPC", page);
    await setCurrentPage(page);
    console.log("CURRENT PAGE", currentPage);
    getPageData(books, page, pageSize, searchQuery);
  };
  const handleSearch = (query) => {
    console.log("HS", query);
    setSearchQuery(query);
    getPageData(books, 1, pageSize, query);
  };

  return (
    <>
      <div className="pb-5">
        {/* <CarouselSlide /> */}
        <CarouselContainer />
      </div>
      <div className="container">
        <div class="col-lg-4 center pb-5">
          <SearchBox value={searchQuery} onChange={handleSearch} />
        </div>
        {data.length === 0 ? (
          <p>There is no Product available</p>
        ) : (
          <div className="shop">
            <div className="row">
              {data.map((pd, index) => (
                <SingleProduct key={index} product={pd} />
              ))}
            </div>
          </div>
        )}

        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        {/* {productsData.map((pd, index) => (
            <SingleProduct key={index} product={pd} />
          ))} */}
      </div>
    </>
  );
}

export default Products;
