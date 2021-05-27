import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import productService from "../../services/ProductService";
import { paginate } from "../pagination/paginate";
import Pagination from "../pagination/Pagination";
import SearchBox from "../searchBox/SearchBox";

import SingleProduct from "./SingleProduct";
import _ from "lodash";

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
  );
}

export default Products;

{
  /* <SingleProduct
            hotProduct="true"
            category="Women"
            title="Bolt SweatShirt"
            price="15"
          />
          <SingleProduct category="Women" title="Bolt SweatShirt" price="30" />
          <SingleProduct
            saleOnProduct="true"
            salePercent={60}
            category="Women"
            title="Bolt SweatShirt"
            price="20"
          />
          <SingleProduct
            newProduct="true"
            category="Women"
            title="Bolt SweatShirt"
            price="100"
          /> */
}
